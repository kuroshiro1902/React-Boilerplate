import { IUser } from '@/common/models/User';
import { SERVER } from '@/environment';
import { API } from '@/services/api';
import { LocalStorageService } from '@/services/localStorage';
import { create } from 'zustand';

interface AuthData {
  /**
   * - undefined: Khi lần đầu tải trang hoặc khi đã đăng xuất.
   *
   * - null: Khi đã gọi api để xác thực nhưng không thành công.
   */
  user?: IUser | null;
  getToken: () => string | null;
  setUser: (user?: IUser | null) => void;
  setToken: (token: string | null) => void;
  setAuth: ({
    user,
    token,
  }: {
    user?: IUser | null;
    token: string | null;
  }) => void;
  verifyToken: () => Promise<IUser | null | undefined>;
}

const useAuthStore = create<AuthData>((set) => ({
  user: null,
  getToken: () => {
    return LocalStorageService.getToken();
  },
  setUser: (user) => {
    set({ user });
  },
  setToken: (token) => {
    LocalStorageService.setToken(token);
  },
  setAuth: ({ user, token }: { user?: IUser | null; token: string | null }) => {
    LocalStorageService.setToken(token);
    set({ user });
  },
  verifyToken: async () => {
    const { data } = await API.post<IUser>(SERVER.auth.url, '/verify-token');
    return data.data;
  },
}));

export default useAuthStore;
