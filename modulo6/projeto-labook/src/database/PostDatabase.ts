import { BaseDatabase } from "./BaseDatabase";
import { POST_TYPES } from "../types/PostType";
import {post} from "../types/PostType"
export class PostDataBase extends BaseDatabase {
    private postTable = 'labook_posts'

    createPost = async (
        id: string,
        photo: string,
        description: string,
        type: POST_TYPES,
        created_at: string,
        author_id: string
    ): Promise <void> => {
        try {
            await PostDataBase.connection(this.postTable)
            .insert({
                id,
                photo,
                description,
                type,
                created_at,
                author_id
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    getPost = async (
        id: string
    ): Promise<post[]> => {
        try {
            const post: post[] = []
            const result = await PostDataBase.connection(this.postTable)
            .select('*')
            .where({id})

            for(let i of result){
                post.push(i)
            }
            return post;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
        
    }
}