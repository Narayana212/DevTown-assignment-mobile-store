import { create } from 'zustand'
import {
  createJSONStorage,
  persist,
} from 'zustand/middleware'

export type CartItem = {
  product: any
}

type CartState = {
  items: CartItem[]
  addItem: (product: any) => void
  removeItem: (productId: string) => void
  clearCart: () => void
}

export const useCart = create<CartState>()(
  persist((set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          // Check if the product with the same ID is already in the cart
          const existingItem = state.items.find(
            (item) => item.product?._id === product._id
          )

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product?._id
                  ? { product }
                  : item
              ),
            }
          }

          return { items: [...state.items, { product, quantity: 1 }] }
        }),
      removeItem: (_id) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.product?._id !== _id
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'dev-town',
      storage: createJSONStorage(() => localStorage),
    }
  )
)