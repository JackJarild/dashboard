import { UserResponse } from '../types';
import { axios } from '@/lib/axios';

export type LoginCredentials = {
  email: string;
  password: string;
  //userType: string;
};

export const loginWithEmailAndPassword = (data: LoginCredentials): Promise<UserResponse> => {
  return axios.post('/user/login', {
    userId: data.email,
    password: data.password,
    userType: 'Company'
  });
};
