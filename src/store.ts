import {create} from 'zustand';

export type itemStore = {
  items: {},
  addItem:(item:{})=>void;
}

export const useAppStore = create<itemStore>((set) => ({
  items:[],
  addItem: (item: any) => set((state: { items: any; }) => ({
     items: [...state.items, item] 
    })),
}));    