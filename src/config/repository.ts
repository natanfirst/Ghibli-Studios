import { AxiosPromise } from "axios";
import api from "./api";

export default class Respository {
  getMovies(): Promise<AxiosPromise> {
    return api.get("/films");
  }

  getMovieId(id: string): Promise<AxiosPromise> {
    return api.get(`/films/${id}`);
  }
}
