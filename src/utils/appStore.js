import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice'
import videoSlice from "./videoSlice";


const appStore = configureStore({
    reducer:{
        menu:appSlice,
        video:videoSlice
    }
})


export default appStore;