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

    //Pegar todas as Playlists
    public getAllPlaylists = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.userId
            const token = req.headers.authorization as string

            const result = await this.playlistBusiness.getAllPlaylists(userId, token)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };

    //Editar Playlist
    public editPlaylist = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, genre, musics } = req.body
            const user_id = req.params.user_id;
            const id = req.params.id;
            const token = req.headers.authorization as string;

            const input = { id, name, genre, musics, user_id }
            console.log(input)

            await this.playlistBusiness.editPlaylist(input, token)

            res.status(200).send("Dado(s) alterado(s).")
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };

    //Deleta Playlist
    public deletePlaylist = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = req.params.userId
            const id = req.params.id
            const token = req.headers.authorization as string

            await this.playlistBusiness.deletePlaylist(id, userId, token)

            res.status(200).send("Playlist deletada.")
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };
}