import { MovieDatabase } from "../data/MovieDatabase"
import { GenerateId } from "../services/generateId"
import { MovieDTO } from "../types/movieDTO"


export class MovieBusiness {
    //Create Movie
    async create(input: MovieDTO): Promise<void> {
        const {
            title,
            description,
            duration_in_minutes,
            year_of_release } = input

        if (!title || !description || !duration_in_minutes || !year_of_release) {
            throw new Error("Dados inválidos")
        }

        const id = GenerateId()

        const movieDatabase = new MovieDatabase()
        await movieDatabase.create({
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
    }
}
