import { create } from 'zustand';
import type { User, CartItem } from '../types';

interface CartItemWithDetails extends CartItem {
  name: string;
  price: number;
  image: string;
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  cart: CartItemWithDetails[];
  setUser: (user: User | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  clearUser: () => void;
  setCart: (cart: CartItemWithDetails[] | ((prev: CartItemWithDetails[]) => CartItemWithDetails[])) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  isAuthenticated: false,
  cart: [],
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  clearUser: () => set({ user: null, isAuthenticated: false }),
  setCart: (cart) => set((state) => ({
    cart: typeof cart === 'function' ? cart(state.cart) : cart,
  })),
})); 