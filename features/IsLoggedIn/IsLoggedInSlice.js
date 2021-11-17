import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const IsLoggedInSlice = createSlice({
    name: 'loggedin',
    initialState,
    reducers: {
        setIsLogggedInTrue: (state) => {
            state.value = true
        },
        setIsLogggedInFalse: (state) => {
            state.value = false
        },
    }
})

export const { setIsLogggedInFalse, setIsLogggedInTrue } = IsLoggedInSlice.actions;

export default IsLoggedInSlice.reducer