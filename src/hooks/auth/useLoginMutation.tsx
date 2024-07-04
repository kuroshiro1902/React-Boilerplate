import { useMutation } from '@tanstack/react-query';

import { SERVER } from '../../environment';
import { IUser } from '@/common/models/User';
import { toast } from 'react-toastify';
import { API } from '@/services/api';
import { THookHandler } from '../types';
import { AxiosError } from 'axios';
import { IApiResponse } from '@/common/models/ApiResponse';
export interface ILoginForm {
  username: string;
  password: string;
}

const useLoginMutation = (handlers?: THookHandler<any>) => {
  const loginMutation = useMutation({
    mutationFn: async (formData: ILoginForm) => {
      const { data } = await API.post<{ user: IUser; token: string }>(
        SERVER.auth.url,
        '/login',
        formData
      );
      if (!data.isSuccess) throw new Error(data.message);
      return data;
    },
    onSuccess: ({ data }) => {
      if (data) {
        toast.success('Đăng nhập thành công!');
      }
      handlers?.onSuccess?.(data);
    },
    onError: (error: AxiosError<IApiResponse>) => {
      toast.error(error.response?.data?.message);
      handlers?.onError?.(error);
    },
  });

  return loginMutation;
};

export default useLoginMutation;
