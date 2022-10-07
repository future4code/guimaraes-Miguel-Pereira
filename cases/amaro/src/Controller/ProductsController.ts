import { ProductsBusiness} from "../Business/ProductsBusiness";
import { Request, Response } from "express";
import { ProductsInputDTO } from "../Model/Products";

export class ProductsController {
    private productsBusiness: ProductsBusiness
    constructor(){
        this.productsBusiness = new ProductsBusiness();
    };

    public createProduct = async(req: Request, res: Response): Promise<void> => {
        try {
            const input: ProductsInputDTO =  {
                name: req.body.name,
                tags: req.body.tags
            }

            await this.productsBusiness.createProducts(input)

            res.status(201).end("Produto adicionado!");
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };
}