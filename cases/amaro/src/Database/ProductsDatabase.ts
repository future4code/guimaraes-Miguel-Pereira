import { BaseDatabase } from "./BaseDatabase";
import { Products } from "../Model/Products";

export class ProductsDatabase extends BaseDatabase {
    private TABLE_NAME: string = "Amaro_Products";

    public CreateProduct = async (input: Products): Promise<void> => {
        try {
            await ProductsDatabase.connection(this.TABLE_NAME)
                .insert({
                    id: input.id,
                    name: input.name,
                    tags: input.tags
                });
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };
}