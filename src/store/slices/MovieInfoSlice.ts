import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieInfo} from "../../interfaces";
import {movieService} from "../../services";



interface IState {
    movieInfo:IMovieInfo
}

const initialState:IState = {
    movieInfo:null
}

const getMovieById = createAsyncThunk<IMovieInfo, {id:string}>(
    'movieInfoSlice/getMovieById',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getMovieById(id)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const movieInfoSlice = createSlice({
    name:'movieInfoSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieInfo = action.payload
            })
})

const {reducer:movieInfoReducer, actions} = movieInfoSlice

const movieInfoActions ={
    ...actions,
    getMovieById
}
export {movieInfoReducer, movieInfoActions}