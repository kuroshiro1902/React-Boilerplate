const tokenKey = 'JASON_BOARD_GAME_APP_TOKEN';

export const LocalStorageService = {
  getToken: () => {
    return localStorage.getItem(tokenKey);
  },
  setToken: (token: string | null) => {
    if (token) {
      return localStorage.setItem(tokenKey, token);
    }
    if (token === null) {
      return localStorage.removeItem(tokenKey);
    }
  },
};
