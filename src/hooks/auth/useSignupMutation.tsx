import { useMutation } from '@tanstack/react-query';

import { SERVER } from '@/environment';
import { IUser } from '@/common/models/User';
import { toast } from 'react-toastify';
import { API } from '@/services/api';
import { THookHandler } from '../types';
export interface ISignupForm {
  username: string;
  password: string;
  name: string;
}

const useSignupMutation = (handlers?: THookHandler<any>) => {
  const signupMutation = useMutation({
    mutationFn: async (formData: ISignupForm) => {
      const { data } = await API.post<IUser>(
        SERVER.auth.url,
        '/signup',
        formData
      );
      if (!data.isSuccess) throw new Error(data.message);
      return data;
    },
    onSuccess: ({ data }) => {
      if (data) {
        console.log(data);
        toast.success('Đăng kí thành công!');
      }
      handlers?.onSuccess?.(data);
    },
    onError: (error) => {
      toast.error(error.message);
      handlers?.onError?.(error);
    },
  });

  return signupMutation;
};

export default useSignupMutation;
