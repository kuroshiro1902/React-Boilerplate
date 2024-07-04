import { createContext, useContext, useEffect } from 'react';
import useAuthStore from '@/stores/authStore';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<{}>({});

export const AuthProvider = ({ children }: any) => {
  const { user, setAuth, setUser, verifyToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      verifyToken()
        .then((user) => {
          if (!user) {
            setAuth({ token: null, user: null });
            return navigate('/login');
          }
          setUser(user);
          return navigate('/');
        })
        .catch((err) => {
          setAuth({ token: null, user: null });
          return navigate('/login');
        });
    }
  }, [user?.id]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
