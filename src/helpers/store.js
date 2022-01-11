import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../feature/Auth/userSlice'

const rootReducer = {
    user: userReducer,
}

const store = configureStore({
    reducer: rootReducer,
})


export default store


import couterReducer from '../features/Counter/counterSlice';

const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    counter: couterReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store
