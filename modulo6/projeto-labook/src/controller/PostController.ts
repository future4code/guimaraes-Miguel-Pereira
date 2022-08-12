import { PostBusiness } from "../business/PostBusiness";
import {Request, Response} from "express";
import { generateId } from "../services/GenerateId";
import { SaveTime } from "../services/SaveTime";
import { post } from "../types/PostType";

export class PostController extends PostBusiness {


    createNewPost = async (req: Request, res: Response): Promise<void> => {
        let message = "Sucess!"
        try {
            const input: post = {
                id: generateId(),
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                created_at: SaveTime(),
                author_id: req.body.authorId
            }

            await new PostBusiness().createPost(input);

            res.status(201).send({ message })
        
        } catch (error: any) {
            res.send(error.sqlMessage || error.message);
        }
    };

    GetPost = async (req: Request, res: Response): Promise<void> => {
        try {
            const {id} = req.params
            const post  = await this.getPostById(id)

            res.status(200).send(post)
        } catch (error: any) {
            res.send(error.sqlMessage || error.message);
        }
    }
}
