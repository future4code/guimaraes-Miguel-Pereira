import { PlaylistDatabase } from "../Database/PlaylistDatabase";
import { CustomError } from "../Errors/CustomError";
import { EmptyParams, InvalidAuthorization } from "../Errors/PlaylistErrors";
import { Playlist, PlaylistInputDTO } from "../Models/Playlist";
import Authenticator from "../Services/Authenticator";
import IdGenerator from "../Services/GeneratorId";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();


export class PlaylistBusiness {
    private playlistDB: PlaylistDatabase
    constructor() {
        this.playlistDB = new PlaylistDatabase();
    };

    //Criar Playlist de um usuário
    public createPlaylist = async (input: PlaylistInputDTO, token: string): Promise<void> => {
        try {
            let {name, genre, musics, user_id} = input;
            const id: string = idGenerator.generateId();
            const verifyPlaylist = await this.playlistDB.getPlaylistByName(name);
            const tokenData = await authenticator.getTokenData(token);

            if(user_id !== tokenData.id){
            throw new InvalidAuthorization();
            };
            if(!name || !genre || !musics || !user_id ){
                throw new EmptyParams();
            };
            if(verifyPlaylist !== undefined && tokenData.id === input.user_id){
                    throw new Error("Já existe uma playlist com este nome");
            };

            const playlist: Playlist = {
                id,
                name,
                genre,
                musics,
                user_id
            };

            await this.playlistDB.createPlaylist(playlist);
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

    //Pegar todas as playlists de um usuário
    public getAllPlaylists = async (userId: string, token: string): Promise<any> => {
        try {
            const tokenData = await authenticator.getTokenData(token);

        if(userId !== tokenData.id){
            throw new InvalidAuthorization();
            };

        const result = await this.playlistDB.getAllPlaylists(userId)
        return result

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };
}