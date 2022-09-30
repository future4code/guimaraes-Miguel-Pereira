import express from "express";
import { PlaylistController } from "../PlaylistController";

export const playlistRouter = express.Router();

const playlistController = new PlaylistController();

//Create Playlist
playlistRouter.post("/create/:user_id", playlistController.createPaylist);
//Get All Playlists
playlistRouter.get("/:userId", playlistController.getAllPlaylists);
//Delete Playlist
playlistRouter.delete("/delete/:userId/:id", playlistController.deletePlaylist);