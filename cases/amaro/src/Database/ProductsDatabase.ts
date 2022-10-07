import { BaseDatabase } from "./BaseDatabase";
import { Products } from "../Model/Products";

export class ProductsDatabase extends BaseDatabase {
    private TABLE_NAME: string = "Amaro_Products";

    public InsertProduct = async (input: Products): Promise<void> => {
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

    public searchProductsByNameOrTags = async (input: string): Promise<{}> => {
        try {
           const result =  await ProductsDatabase.connection(this.TABLE_NAME)
            .select('*')
            .where("name", "like", `%${input}%`)
            .orWhere("tags", "like", `%${input}%`)
            .orderBy("name")

            return result
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);  
        }
    };
}