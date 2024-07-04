import { IHeaderItem } from '@/common/models/HeaderItem';
import { create } from 'zustand';

export interface HeaderData {
  headerItems: IHeaderItem[];
  currentItemIndex: number;
  handleSelectedKey: (key: string) => void;
}

const useHeaderStore = create<HeaderData>((set, get) => ({
  headerItems: [{ key: 'home', href: '', label: 'Home' }],
  currentItemIndex: 0,
  handleSelectedKey: (key: string) => {
    const { headerItems } = get();
    const itemIndex = headerItems.findIndex((item) => item.key === key);
    if (itemIndex !== -1) {
      return set({ currentItemIndex: itemIndex });
    }
    return set({ currentItemIndex: 0 });
  },
}));

export default useHeaderStore;
