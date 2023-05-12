import { create } from 'zustand'

interface CartStore {
    items: string[]
    addItem: (name : string) => void
    removeItem: (name : string) => void
}

const useCartStore = create((set) => ({
  items: [],
  addItem: (name : string) => set((state: { items: any }) => ({ items: [...state.items, name] })),
  removeItem: (name : string) => set((state: any[]) => ({ items: state.filter((item : string) => item !== name) })),
}))

export default useCartStore