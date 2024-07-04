import s from './Auth.module.scss';
import LoginForm from './LoginForm';
import { memo, useCallback, useEffect, useState } from 'react';
import SignupForm from './SignupForm';
import { IUser } from '../../common/models/User';
import { useNavigate } from 'react-router-dom';
import { Switch } from 'antd';
import useAuthStore from '@/stores/authStore';

enum Mode {
  LOGIN = 'login',
  SIGNUP = 'signup',
}

function Auth() {
  const [mode, setMode] = useState<Mode>(Mode.LOGIN);

  const navigate = useNavigate();
  const AuthStore = useAuthStore();

  const toggleMode = () =>
    setMode((prev) => (prev === Mode.LOGIN ? Mode.SIGNUP : Mode.LOGIN));

  const handleLoginSuccess = useCallback(
    ({ token, user }: { user: IUser; token: string }) => {
      AuthStore.setAuth({ token, user });
      navigate('/');
    },
    []
  );

  const handleSignupSuccess = useCallback(() => {
    setMode(Mode.LOGIN);
  }, []);

  useEffect(() => {
    console.log('Mount Auth page.');
    return () => console.log('Unmount Auth page.');
  }, []);

  // useEffect(() => {
  //   const loginWithToken = async () => {
  //     const token = AuthStore.getToken();
  //     if (token) {
  //       try {
  //         const user = await AuthStore.verifyToken();
  //         if (user) {
  //           AuthStore.setUser(user);
  //           navigate('/');
  //         }
  //       } catch (error) {
  //         AuthStore.setAuth({ user: null, token: null });
  //       }
  //     }
  //   };
  //   loginWithToken();
  // }, []);

  return (
    <div className={s.Auth}>
      <Switch
        checked={mode === Mode.SIGNUP}
        onChange={toggleMode}
        checkedChildren='Sign up'
        unCheckedChildren='Login'
      />
      {mode === Mode.LOGIN && <LoginForm handleSuccess={handleLoginSuccess} />}
      {mode === Mode.SIGNUP && (
        <SignupForm handleSuccess={handleSignupSuccess} />
      )}
    </div>
  );
}

export default memo(Auth);
