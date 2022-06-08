type ProductsDetails = {
    id: string,
    name: string,
    price?: number,
}

export const Products: ProductsDetails[] = [
    {
        id: (Math.round(Math.random() * (51 - 1) + 1)).toString(),
        name: "Banana",
        price: 2.55
    },
    {
        id: (Math.round(Math.random() * (51 - 1) + 1)).toString(),
        name: "Abacate",
        price: 3.95
    },
    {
        id: (Math.round(Math.random() * (51 - 1) + 1)).toString(),
        name: "Morango",
        price: 7.00
    }
]