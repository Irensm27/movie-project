import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/MovieSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer:{
        movieStoreSlice: movieSlice.reducer

    }
});
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();