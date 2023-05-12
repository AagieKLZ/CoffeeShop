interface CartStore {
    items: string[]
    addItem: (name : string) => void
    removeItem: (name : string) => void
}