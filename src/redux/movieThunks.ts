import {createAsyncThunk} from "@reduxjs/toolkit";
import {genreService, movieService} from "../services/movie.api.service.ts";



export const loadMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async (page:number, thunkAPI) => {
        try {
            const {data} = await movieService.getMovies(page);
            return data;
        } catch  {
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
        } catch  {
            return thunkAPI.rejectWithValue('Failed to load genres');
        }
    }
);

export const loadMovieById = createAsyncThunk(
    "movieSlice/loadMovieById",
    async (id:string, thunkAPI) => {
        try {
            const {data} = await movieService.getMovieById(id);
            return data;
        } catch {
            return thunkAPI.rejectWithValue('Failed to load movie');
        }
    }
);

export const searchMovies = createAsyncThunk(
    'movieSlice/searchMovies',
    async (query:string, thunkAPI)=>{
        try{
            const {data}= await movieService.searchMovies(query);
            return data;
        }catch {
            return thunkAPI.rejectWithValue('Failed to search movie')
        }
    }
)