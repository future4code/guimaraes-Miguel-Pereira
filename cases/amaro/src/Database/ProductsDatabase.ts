import { BaseDatabase } from "./BaseDatabase";
import { Products } from "../Model/Products";

export class ProductsDatabase extends BaseDatabase {
    private TABLE_NAME: string = "Amaro_Products";

    // public insertProductsJSON = async (input: Products): Promise<void> => {
    //     try {
    //         await ProductsDatabase.connection(this.TABLE_NAME)
    //         .insert(input);
    //     } catch (error: any) {
    //         throw new error(error.message || error.sqlMessage)
    //     }
    //         };

    public InsertProduct = async (input: Products): Promise<void> => {
        try {
            await ProductsDatabase.connection(this.TABLE_NAME)
                .insert({
                    id: input.id,
                    name: input.name,
                    tags: input.tags.toString()
                });
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    public searchProducts = async (input: string): Promise<any> => {
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

    public getProductById = async (id: string): Promise<any> => {
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
            .select()
            .where({id: id})
    
            return result
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);  
        }
    };








    public deleteProduct = async(id: string): Promise<void> => {
        try {
            await ProductsDatabase.connection(this.TABLE_NAME)
            .delete()
            .where({id});
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);   
        }
    };
}