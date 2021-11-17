import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}

export const  LogInOutSlice =  createSlice({
    name: 'loggedin',
    initialState,
    reducers: {
        LogIn:  (state, action) => {
            state.user = action.payload
        },
        LogOut: (state) => {
            state.user = null
        }
    }
})

export const { LogIn, LogOut, GetUserInfo } = LogInOutSlice.actions;

export default LogInOutSlice.reducer 