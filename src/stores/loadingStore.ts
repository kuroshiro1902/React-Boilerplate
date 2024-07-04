import { create } from 'zustand';

export interface LoadingData {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const useHeaderStore = create<LoadingData>((set, get) => ({
  isLoading: true,
  setIsLoading: (value: boolean) => {
    return set({ isLoading: value });
  },
}));

export default useHeaderStore;
