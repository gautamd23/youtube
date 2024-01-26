import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice'


const appStore = configureStore({
    reducer:{
        menu:appSlice
    }
})


export default appStore;