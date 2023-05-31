import { axios } from '@/lib/axios';

import { UserResponse } from '../types';

export const getUser = (id: number): Promise<UserResponse> => {
  return axios.get(`user/customer/${id}`)
};