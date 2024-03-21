import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage";
import MovieInfo from "./components/MoviesContainer/MovieInfo/MovieInfo";
import GenrePage from "./pages/GenrePage";
import SearchMoviesList from "./components/HeaderContainer/Search/SearchMoviesList";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>
            },
            {
                path:'movies/:movieId', element:<MovieInfo/>
            },
            {
                path:'movies/genre/:id', element:<GenrePage/>
            },
            {
                path: 'search/movies', element: <SearchMoviesList/>
            }

        ]
    }
])

export {router}