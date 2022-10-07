import { ProductsDatabase } from "../Database/ProductsDatabase";
import { CustomError } from "../Error/CustomError";
import { Products, ProductsInputDTO } from "../Model/Products";
import GenerateId from "../Services/GenerateId";

const idGenerator = new GenerateId();

export class ProductsBusiness {
    private productsDB: ProductsDatabase
    constructor(){
        this.productsDB = new ProductsDatabase();
    };

    public createProducts = async(input: ProductsInputDTO): Promise<void> => {
        try {
            let { name, tags } = input
            const id: string = idGenerator.generateId();

            if(!name || !tags){
                throw new Error("Algum campo obrigatório está vazio!");
            };
            if(name.length < 4){
                throw new Error("Nome muito curto! Min. 4 caracteres.");
            };

            const products: Products = {
                id,
                name,
                tags
            }

            await this.productsDB.CreateProduct(products);
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };
}