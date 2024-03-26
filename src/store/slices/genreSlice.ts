import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genres:IGenre[],
    genreTrigger:boolean
}

const initialState:IState = {
    genres:[],
    genreTrigger:null
}

const getAll = createAsyncThunk<IGenre[], void>(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=> {
        try {
            const {data} = await genreService.getAllGenres()
            return data.genres
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{
        setGenreTrigger(state){
            state.genreTrigger = !state.genreTrigger
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
            })
})

const {reducer:genreReducer, actions} = genreSlice

const genreActions = {
    ...actions,
    getAll
}
export {genreActions, genreReducer}

