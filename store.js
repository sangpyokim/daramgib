import { configureStore } from '@reduxjs/toolkit'
import LoggedInReducer from './features/IsLoggedIn/IsLoggedInSlice'
import LogInOutSlice from './features/user/userSlice'

export const store = configureStore({
  reducer: {
        loggedin: LoggedInReducer,
        loginout: LogInOutSlice,
    },
})
