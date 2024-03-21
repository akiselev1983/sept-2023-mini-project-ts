const baseURL:string = "https://api.themoviedb.org/3";

const token:string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGU3OGVkM2ExMTBkZTE0ZjlkNGE1NzI0Y2ZlNDE0YSIsInN1YiI6IjY1ZDliN2ZhNjA5NzUwMDE3ZGE2OTJjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BWYuSE2SsK8Ly4Mpwe2GvlCGJQPTXoQN7op8YvOFQSI'
const posterBaseUrl:string = 'https://image.tmdb.org/t/p/w500'

const movies:string = '/movie'
const genres:string = '/genre'

const urls = {
    movies:{
        getAll:`/discover${movies}`,
        byId:(id:string):string=> `${movies}/${id}`,
        searchMovie:`/search${movies}`
    },
    genres:{
        getAll: `${genres}${movies}/list`,
        getMoviesByGenreId:(genreId:string):string=>`${genres}/${genreId}/movies`

    }


}

export {baseURL, urls, token, posterBaseUrl}