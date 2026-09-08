import {createAsyncThunk} from "@reduxjs/toolkit";
import {genreService, movieService} from "../services/movie.api.service.ts";


export const loadMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async (
        {page, genreId, sortBy}: {page:number, genreId:number | null, sortBy: string;},
        thunkAPI
    ) => {
        try {
            const {data} = await movieService.getMovies(
                page,
                genreId ?? undefined,
                sortBy
            );
            return data;
        } catch {
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
    async ({query, page}: {query:string, page:number}, thunkAPI) => {
        try {
            const {data} = await movieService.searchMovies(query, page);
            return data;
        } catch {
            return thunkAPI.rejectWithValue('Failed to search movie');
        }
    }
);

export const loadTopRatedMovies = createAsyncThunk(
    'movieSlice/loadTopRatedMovies',
    async (_, thunkAPI)=>{
        try {
            const {data} = await movieService.getTopRatedMovies();
            return data;
        } catch {
            return thunkAPI.rejectWithValue('Failed to load top rated movies');
        }
    }
)