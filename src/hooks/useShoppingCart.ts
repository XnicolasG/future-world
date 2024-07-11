import { create } from 'zustand'

type store = {
    cart:cartItem[];
    addToCart : (cartItem: cartItem) => void
}

export const useShoppingCart = create<store>()((set) => ({
    cart:[],
    addToCart: (cartItem: cartItem) => set((state) => ({cart: [...state.cart, cartItem]}))
}))