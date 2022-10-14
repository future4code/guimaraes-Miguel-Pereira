import { ProductsDatabase } from "../Database/ProductsDatabase";
import { CustomError } from "../Error/CustomError";
import { InvalidParams, ProductNotFound, ShortName } from "../Error/ProductsError";
import { Products, ProductsDTO, ProductsInputDTO } from "../Model/Products";
import GenerateId from "../Services/GenerateId";

const idGenerator = new GenerateId();

export class ProductsBusiness {
    private productsDB: ProductsDatabase
    constructor(){
        this.productsDB = new ProductsDatabase();
    };

    public insertProductsJSON = async(products: ProductsDTO[]): Promise<void> => {
        try {

            //Menos memória, mais tempo para concluir
            // products.forEach(async(product)=>{
            //     await this.productsDB.insertProductsJSON(product)
            // })

            //Mais rápido, consumo de memória mais intenso
            const promisses = products.map(async(product)=>{
                await this.productsDB.InsertProduct(product)
            })
            await Promise.all(promisses)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    };

    public createProducts = async(input: ProductsInputDTO): Promise<void> => {
        try {
            let { name, tags } = input
            const id: string = idGenerator.generateId();

            if(!name || !tags){
                throw new InvalidParams();
            };
            if(name.length < 4){
                throw new ShortName();
            };

            const products: Products = {
                id,
                name,
                tags
            }

            await this.productsDB.InsertProduct(products);
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    public searchProducts = async(input: string): Promise<[]> => {
        try {

            if(!input){
                input = "%"
            };

            const result  = await this.productsDB.searchProducts(input)

            if(!result.length){
                throw new ProductNotFound();
            };

            return result;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    public getProductById = async(id: string): Promise<{}> => {
        try {
            
            const result = await this.productsDB.getProductById(id)

            if(!result.length){
                throw new ProductNotFound();
            };

            return result;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    public deleteProduct = async(id: string): Promise<void> => {
        try {
            const verifyProduct = await this.productsDB.getProductById(id)

            if(!verifyProduct.length){
                throw new ProductNotFound();
            };
            
            
            await this.productsDB.deleteProduct(id);
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };
}