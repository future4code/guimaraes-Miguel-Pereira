export type Playlist = {
    id: string,
    name: string,
    genre: string,
    musics: string[],
    user_id: string
};

export interface PlaylistInputDTO {
    name: string,
    genre: string,
    musics: string[],
    user_id: string
}