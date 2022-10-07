import { CustomError } from "./CustomError";

export class EmptyParams extends CustomError {
    constructor() {
        super(401, "Algum campo obrigatório (name, genre, musics) está vazio.")
    }
};

export class InvalidAuthorization extends CustomError {
    constructor() {
        super(401, "Acesso não autorizado!")
    }
};

export class PlaylistNotFound extends CustomError {
    constructor() {
        super(404, "Playlist não encontrada.")
    }
};

export class SamePlaylistName extends CustomError {
    constructor() {
        super(409, "Já existe uma playlist com este nome.")
    }
}