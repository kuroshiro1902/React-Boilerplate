import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuthStore from '@/stores/authStore';

function ProtectedRoutes() {
  console.log('Rerender Protected Routes');

  const { getToken, user } = useAuthStore();

  const [isAuth, setIsAuth] = useState<'success' | 'pending' | 'error'>(
    'pending'
  );

  useEffect(() => {
    console.log('Trigger verify token.');
    if (user && getToken()) {
      return setIsAuth('success');
    }
    if (user === null) {
      return setIsAuth('pending');
    }
    return setIsAuth('error');
  }, [user?.id]);

  if (isAuth === 'success') {
    return <Outlet />;
  }

  if (isAuth === 'error') {
    return <Navigate to='/login' />;
  }

  return <div>Authenticating...</div>;
}

export default ProtectedRoutes;
