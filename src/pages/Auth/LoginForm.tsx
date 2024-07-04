import { useEffect } from 'react';
import useLoginMutation from '../../hooks/auth/useLoginMutation';
import s from './Auth.module.scss';
import { Input, Form, Button } from 'antd';
import { IUser } from '../../common/models/User';

interface props {
  handleSuccess?: (data: { user: IUser; token: string; }) => void,
  handleError?: (error: any) => void,
}

type LoginFormInput = {
  username: string;
  password: string;
};

function LoginForm({handleSuccess, handleError}: props) {
  const {isSuccess, isPending: isFetching, error, data, mutate} = useLoginMutation();

  useEffect(()=>{  
    if (isSuccess && data.isSuccess && data.data) {
      return handleSuccess?.(data.data);
    }
    if (!isSuccess || !data.isSuccess || error) {
      return handleError?.(error);
    }
  }, [isSuccess, data]);

  return (
    <div className={s.form}>
      <Form
        name='login'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={mutate}
        autoComplete='off'
      >
        <Form.Item<LoginFormInput>
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }, {min: 6, message: 'Username must be at least 6 characters.'}, {max: 32, message: 'Username cannot be longer than 32 characters.'}]}
        >
          <Input disabled={isFetching} />
        </Form.Item>

        <Form.Item<LoginFormInput>
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }, {min: 6, message: 'Password must be at least 6 characters.'}, {max: 32, message: 'Password cannot be longer than 32 characters.'}]}
        >
          <Input.Password disabled={isFetching} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' loading={isFetching}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
