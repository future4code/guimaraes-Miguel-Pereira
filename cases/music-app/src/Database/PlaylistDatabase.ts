import { Playlist } from "../Models/Playlist";
import { BaseDatabase } from "./BaseDatabase";

export class PlaylistDatabase extends BaseDatabase {
    private TABLE_NAME: string = "Music_Playlist";

    //Pegar playlist pelo ID
    //( Consulta ao banco )
    public getPlaylistById = async (id: string): Promise<void> => {
        try {
            const result = await PlaylistDatabase.connection(this.TABLE_NAME)
                .select()
                .where({ id })

            return result[0]
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    //Criar Playlist
    public createPlaylist = async (input: Playlist): Promise<void> => {
        try {
            await PlaylistDatabase.connection(this.TABLE_NAME)
                .insert({
                    id: input.id,
                    name: input.name,
                    genre: input.genre,
                    musics: input.musics,
                    user_id: input.user_id
            })
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };
        
}
