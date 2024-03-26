import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";
import {movieInfoReducer} from "./slices/MovieInfoSlice";
import {genreReducer} from "./slices/genreSlice";
import {themeReducer} from "./slices/themeSlice";

const store = configureStore({
    reducer:{
        movies:movieReducer,
        movieInfo:movieInfoReducer,
        genres:genreReducer,
        theme:themeReducer
    }
})
export {store}