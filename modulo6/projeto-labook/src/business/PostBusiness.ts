import { PostDataBase } from "../database/PostDatabase";
import { UserDataBase } from "../database/UserDatabase";
import { generateId } from "../services/GenerateId";
import { post } from "../types/PostType";

export class PostBusiness {
    createPost = async (post: post ): Promise<void> => {
        // let statusCode = 400
        try {
            if (!post.photo || !post.description || !post.type) {
                // statusCode = 406
                const message = '"photo", "description" and "type" must be provided'
                throw new Error(message)
             }

             const id = generateId();

             await new PostDataBase().createPost(
                id, 
                post.photo, 
                post.description,
                post.type,
                post.created_at,
                post.author_id,)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    getPostById = async(id: string): Promise<post[]> => {
        try {
            const post = await this.getPostById(id)

            return(post)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}