import s from './Auth.module.scss';
import { Input, Form, Button } from 'antd';
import useSignupMutation, { ISignupForm } from '../../hooks/auth/useSignupMutation';
import { useEffect } from 'react';
import { IUser } from '../../common/models/User';

interface props {
  handleSuccess?: (data: IUser) => void;
  handleError?: (error: any) => void;
}

function SignupForm({ handleSuccess, handleError }: props) {
  const { isSuccess, isPending: isFetching, error, data, mutate } = useSignupMutation();

  useEffect(() => {
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
        name="sign-up"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={mutate}
        autoComplete="off"
      >
        <Form.Item<ISignupForm>
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input disabled={isFetching} />
        </Form.Item>

        <Form.Item<ISignupForm>
          label="Username"
          name="username"
          rules={[
            { required: true, message: 'Please input your username!' },
            { min: 6, message: 'Username must be at least 6 characters.' },
            { max: 32, message: 'Username cannot be longer than 32 characters.' },
          ]}
        >
          <Input disabled={isFetching} />
        </Form.Item>

        <Form.Item<ISignupForm>
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 6, message: 'Password must be at least 6 characters.' },
            { max: 32, message: 'Password cannot be longer than 32 characters.' },
          ]}
        >
          <Input.Password disabled={isFetching} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isFetching}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignupForm;
