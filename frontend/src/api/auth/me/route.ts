// src/services/auth/me/route.ts
import { http } from '@/libs/http';
import { MeResponse } from '@/helpers/types/authTypes';

export const getMe = async (): Promise<MeResponse> => {
  const response = await http.get('/auth/me');
  return response;
};
