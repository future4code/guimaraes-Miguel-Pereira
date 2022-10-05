import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieDTO } from "../model/movieDTO";


export class MovieController {
  //Create Movie
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, duration_in_minutes, year_of_release } = req.body;

      const input: MovieDTO = {
        title,
        description,
        duration_in_minutes,
        year_of_release
      }

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}