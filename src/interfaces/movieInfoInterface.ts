import {IGenre} from "./genreInterface";

export interface IMovieInfo {
    adult: boolean
    backdrop_path: string
    budget: number
    genres: IGenre[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: []
    production_countries: []
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: []
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}