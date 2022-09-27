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

    //Criar Playlist
    public createPlaylist = async (input: PlaylistInputDTO, token: string): Promise<void> => {
        try {
            let {name, genre, musics, user_id} = input;
            const id: string = idGenerator.generateId();
            const tokenData = await authenticator.getTokenData(token);
            // const verifyPlaylist = await this.playlistDB.getPlaylistById(id)

            if(user_id !== tokenData.id){
            throw new InvalidAuthorization();
            };
            if(!name || !genre || !musics || !user_id ){
                throw new EmptyParams();
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
}