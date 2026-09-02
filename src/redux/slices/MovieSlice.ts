import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovieResponse} from "../../models/IMovieResponse.ts";
import type {IGenreResponse} from "../../models/IGenreResponse.ts";
import {loadGenres, loadMovieById, loadMovies, searchMovies} from "../movieThunks.ts";
import type {IMovie} from "../../models/IMovie.ts";
import type {IGenre} from "../../models/IGenre.ts";

type MovieSliceType = {
    movies: IMovie[];
    genres: IGenre[];
    page: number;
    totalPages: number;
    totalResults: number;
    error: string | null;
    movie: IMovie | null;

};

const initialMovieSliceState: MovieSliceType = {
    movies: [],
    genres: [],
    page: 1,
    totalPages: 0,
    totalResults: 0,
    error: null,
    movie: null,
};

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initialMovieSliceState,
    reducers: {
        changePage: (state, action:PayloadAction<number>) => {
            state.page = action.payload;
        }
    },
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

        .addCase(
            loadGenres.fulfilled,
            (state, action:PayloadAction<IGenreResponse>)=>{
                state.genres= action.payload.genres;
                state.error = null;
            })

        .addCase(loadGenres.rejected, (state, action) => {
            state.error = action.payload as string;
        })

        .addCase(loadMovieById.fulfilled,
            (state, action:PayloadAction<IMovie>)=>{
            state.movie= action.payload;
            state.error= null;
            })

        .addCase(loadMovieById.rejected, (state, action) => {
            state.error = action.payload as string;
        })

        .addCase(searchMovies.fulfilled, (state, action: PayloadAction<IMovieResponse>) => {
            state.movies = action.payload.results;
        })

        .addCase(searchMovies.rejected, (state, action) => {
            state.error = action.payload as string;
        })


})
export const movieActions = {...movieSlice.actions, loadMovies, loadGenres, loadMovieById};