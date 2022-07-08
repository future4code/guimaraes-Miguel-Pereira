import { connection } from "./connection"
import { Product, User, Purchase } from "./types"

export const createNewUser =async (user: User) => {
    await connection('labecommerce_users')
    .insert(user)
};

export const createNewProduct = async (product: Product) => {
    await connection('labecommerce_products')
    .insert(product)
};

export const createNewPurchase = async (purchase: Purchase) => {
    await connection('labecommerce_purchases')
    .insert(purchase)
}