import {createSlice} from "@reduxjs/toolkit";

interface IState {
    checkedTheme:boolean
}

const initialState:IState = {
    checkedTheme:false
}

const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        setCheckedTheme:(state)=>{
            state.checkedTheme = !state.checkedTheme
        }
    }
})
const {reducer:themeReducer, actions} = themeSlice
const themeActions = {
    ...actions
}

export {themeActions, themeReducer}