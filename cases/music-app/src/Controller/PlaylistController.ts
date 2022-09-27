import { PlaylistBusiness } from "../Business/PlaylistBusiness";
import { Request, Response } from "express";
import { PlaylistInputDTO } from "../Models/Playlist";

export class PlaylistController {
    private playlistBusiness: PlaylistBusiness
    constructor() {
        this.playlistBusiness = new PlaylistBusiness();
    };

    //Criar Playlist
    public createPaylist = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string;
            const input: PlaylistInputDTO = {
                name: req.body.name,
                genre: req.body.genre,
                musics: req.body.musics,
                user_id: req.params.user_id
            };

            await this.playlistBusiness.createPlaylist(input, token)

            res.status(201).send("Playlist criada.");
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };
}