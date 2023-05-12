interface CartStore {
    items: string[]
    addItem: (name : string) => void
    removeItem: (name : string) => void
}

type Coffee = {
    name: string,
    roaster: string,
    last_review: string,
    roast: string,
    loc_country: string,
    origin_1: string,
    origin_2: string,
    g_USD: number,
    rating: number,
    desc_1: string,
    desc_2: string,
    desc_3: string,
}