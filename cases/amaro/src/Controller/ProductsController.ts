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

    public searchProducts = async(req: Request, res: Response): Promise<void> => {
        try {
            let input = req.query.search as string
            const result = await this.productsBusiness.searchProducts(input)

            res.status(200).send(result);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };

    public getProductById = async( req: Request, res: Response): Promise<void> => {
        try {
            let id = req.params.id

            const result = await this.productsBusiness.getProductById(id)

            res.status(200).send(result);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };

    public deleteProduct = async( req: Request, res: Response): Promise<void> => {
        try {
            let id = req.params.id

            await this.productsBusiness.deleteProduct(id)

            res.status(200).send("Produto deletado!");
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };
}