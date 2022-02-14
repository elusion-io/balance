import { Error, LoginCredentials, RegisterCredentials, Status, User } from '@types';
import { initReactQueryAuth } from 'react-query-auth';
import { API_URL } from 'api/constants';

import { getUserData, loginWithEmailAndPassword, registerWithEmailAndPassword } from '../api/auth';
import { post } from '../utils/http.util';

const waitInitial = false;

const loadUser = async (): Promise<User | undefined> => {
  let user;

  if (!user) {
    user = await getUserData();
  }

  return user;
};

const loginFn = async (loginCredentials: LoginCredentials): Promise<User | undefined> => {
  const user = await loginWithEmailAndPassword(loginCredentials);

  return user;
};

const registerFn = async (registerCredentials: RegisterCredentials): Promise<User | undefined> => {
  const user = await registerWithEmailAndPassword(registerCredentials);

  return user;
};

const logoutFn = async (): Promise<Status | undefined> => {
  const status = await post<Status>(`${API_URL}/auth/sign-out`);

  return status;
};

const authConfig = {
  loadUser,
  loginFn,
  logoutFn,
  registerFn,
  waitInitial
};

const { AuthConsumer, AuthProvider, useAuth } = initReactQueryAuth<
User | undefined,
Error,
LoginCredentials,
RegisterCredentials
>(authConfig);

export { AuthProvider, AuthConsumer, useAuth };