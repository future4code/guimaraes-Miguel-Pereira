import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'


export class MovieBusiness {
    //Create Movie
    async create(input: any): Promise<void> {
        const {
            title,
            description,
            duration_in_minutes,
            year_of_release } = input

        if (!title || !description || !duration_in_minutes || !year_of_release) {
            throw new Error("Dados inválidos")
        }

        const id = generateId()

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
