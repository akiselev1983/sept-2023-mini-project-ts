import {IGenres, IRes} from "../types";
import {IGenre} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAllGenres:():IRes<IGenres<IGenre[]>> => apiService.get(urls.genres.getAll)
}

export {genreService}