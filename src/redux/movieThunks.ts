import {createAsyncThunk} from "@reduxjs/toolkit";
import {genreService, movieService} from "../services/movie.api.service.ts";


export const loadMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getMovies();
            return data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('Failed to load movies');
        }
    }
);

export const loadGenres = createAsyncThunk(
    'movieSlice/loadGenres',
    async (_, thunkAPI)=>{
        try {
            const {data} = await genreService.getGenres();
            return data;
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('Failed to load genres');
        }
    }
);