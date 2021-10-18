import { Controller, HttpCode, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Public } from 'src/common/decorators/public.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { UserRO } from 'src/user/user.interface';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import JwtRefreshGuard from './guards/jwt-refresh.guard';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  login(@User() user: UserRO, @Res() res: Response) {
    const accessToken = this.authService.getAccessToken(user.user.id);
    const refreshToken = this.authService.getRefreshToken(user.user.id);
    this.userService.saveRefreshToken(user.user.id, refreshToken);

    const accessTokenCookie = this.authService.getCookieWithJwt(accessToken);
    const refreshTokenCookie =
      this.authService.getCookieWithRefreshToken(refreshToken);

    res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
    res.json(user);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  refresh(@User('id') userId: string, @Res() res: Response) {
    const accessToken = this.authService.getAccessToken(userId);
    const refreshToken = this.authService.getRefreshToken(userId);
    this.userService.saveRefreshToken(userId, refreshToken);

    const accessTokenCookie = this.authService.getCookieWithJwt(accessToken);
    const refreshTokenCookie =
      this.authService.getCookieWithRefreshToken(refreshToken);

    res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
    res.json({ status: 'accepted' });
  }

  @Post('sign-out')
  @HttpCode(202)
  async logOut(@User('id') userId: string, @Res() res: Response) {
    await this.userService.revokeRefreshToken(userId);

    res.setHeader('Set-Cookie', this.authService.getCookiesForLogOut());
    res.json({ status: 'accepted' });
  }
}
