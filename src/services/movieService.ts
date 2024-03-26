import {apiService} from "./apiService";
import {IRes} from "../types";
import {IMovieInfo, IPagination} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll:(page:string):IRes<IPagination> =>apiService.get(urls.movies.getAll, {params:{page:`${page}`}}),
    getMovieById:(id:string):IRes<IMovieInfo> =>apiService.get(urls.movies.byId(id)),
    getAllByGenreId:(page:string,genreId:string):IRes<IPagination>=>apiService.get(urls.genres.getMoviesByGenreId(genreId),{params:{page:`${page}`}}),
    getSearchMoviesByName:(page:string,query:string):IRes<IPagination> =>apiService.get(urls.movies.searchMovie,
        {params:{page:`${page}`,query:`${query}`}}),
    getAllPopularMovies: (page:string):IRes<IPagination> =>apiService.get(urls.movies.getAllPopular, {params:{page:`${page}`}})
}

export {movieService}