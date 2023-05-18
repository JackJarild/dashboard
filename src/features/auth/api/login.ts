import { UserResponse } from '../types';

import { axios } from '@/lib/axios';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
  //userType: string;
};

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO): Promise<UserResponse> => {
  return axios.post('/user/login', {
    userId: data.email,
    password: data.password,
    userType: 'Company'
  });
};
