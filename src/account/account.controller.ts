import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { AccountRO, AccountsRO } from './account.interface';
import { AccountService } from './account.service';
import { CreateAccountDto, UpdateAccountDto } from './dto';
import { AccountEntity } from './entities/account.entity';

@ApiTags('account')
@Controller('account')
export class AccountsController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(
    @User('id') userId: Partial<UserEntity>,
    @Body() createAccountDto: CreateAccountDto
  ): Promise<AccountRO> {
    return this.accountService.create(userId, createAccountDto);
  }

  @Get()
  findAll(@User('id') userId: string): Promise<AccountsRO> {
    return this.accountService.find(userId);
  }

  @Get(':uuid')
  findOne(@User('id') userId: string, @Param('uuid') uuid: string): Promise<AccountRO> {
    return this.accountService.findOne(userId, uuid);
  }

  @HttpCode(204)
  @Patch(':uuid')
  update(
    @User('id') userId: Partial<UserEntity>,
    @Param('uuid') uuid: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Promise<void> {
    return this.accountService.update(userId, uuid, updateAccountDto);
  }

  @HttpCode(204)
  @Delete(':uuid')
  remove(
    @User('id') userId: string,
    @Param('uuid') uuid: string,
  ) {
    return this.accountService.remove(userId, uuid);
  }
}
