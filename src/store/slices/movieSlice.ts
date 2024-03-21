import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IMovie, IPagination} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services/movieService";

interface IState extends IPagination{

}
const initialState:IState = {
    page:'1',
    total_pages:null,
    total_results:null,
    results:[]
}
const getAll = createAsyncThunk<IState, {page:string}>(
    'movieSlice/getAll',
    async ({page},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getAll(page)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getAllByGenreId = createAsyncThunk<IState, {page:string, genreId:string}>(
    'movieSlice/getAllByGenreId',
    async ({page, genreId},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getAllByGenreId(page,genreId)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getAllBySearch = createAsyncThunk<IState, {page:string, search:string}>(
    'movieSlice/getAllBySearch',
    async ({page, search}, {rejectWithValue})=> {
        try {
            const {data} = await movieService.getSearchMoviesByName(page, search)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        setPage(state, action){
            state.page = action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAllBySearch.fulfilled, (state, action) => {
                const {results, total_results, total_pages, page} = action.payload
                state.results = results
                state.page = page
                state.total_pages = total_pages
                state.total_results = total_results
            })
            .addMatcher(isFulfilled(getAll, getAllByGenreId), (state, action) => {
                if (action.payload){
                    const {results, total_results, total_pages, page} = action.payload
                    state.results = results
                    state.page = page
                    state.total_pages = total_pages
                    state.total_results = total_results
                }
            })
})

const {reducer:movieReducer, actions} = movieSlice

const movieActions = {
    ...actions,
    getAll,
    getAllByGenreId,
    getAllBySearch
}

export {movieActions, movieReducer}