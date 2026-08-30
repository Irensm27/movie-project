import type {IMovie} from "../../models/IMovie.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.api.service.ts";
import type {IMovieResponse} from "../../models/IMovieResponse.ts";

type MovieSliceType = {
    movies: IMovie[];
    page: number;
    totalPages: number;
    totalResults: number;
    error: string | null;

};

const initialMovieSliceState: MovieSliceType = {
    movies: [],
    page: 1,
    totalPages: 0,
    totalResults: 0,
    error: null
};

const loadMovies = createAsyncThunk(
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

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initialMovieSliceState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(
            loadMovies.fulfilled,
            (state, action: PayloadAction<IMovieResponse>) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.totalResults = action.payload.total_results;
                state.error = null;

            }
        )

        .addCase(loadMovies.rejected, (state, action) => {
            state.error = action.payload as string;
        })


})
export const movieActions = {...movieSlice.actions, loadMovies};