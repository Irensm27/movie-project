import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovieResponse} from "../../models/IMovieResponse.ts";
import type {IGenreResponse} from "../../models/IGenreResponse.ts";
import {loadGenres, loadMovieById, loadMovies, loadTopRatedMovies, searchMovies} from "../movieThunks.ts";
import type {IMovie} from "../../models/IMovie.ts";
import type {IGenre} from "../../models/IGenre.ts";
import type {IMovieDetails} from "../../models/IMovieDetails.ts";

type MovieSliceType = {
    movies: IMovie[];
    genres: IGenre[];
    page: number;
    totalPages: number;
    totalResults: number;
    error: string | null;
    movie: IMovieDetails | null;
    searchQuery: string;
    selectedGenreId: number | null;
    sortBy: string;
    topMovies: IMovie[]

};

const initialMovieSliceState: MovieSliceType = {
    movies: [],
    genres: [],
    page: 1,
    totalPages: 0,
    totalResults: 0,
    error: null,
    movie: null,
    searchQuery: '',
    selectedGenreId: null,
    sortBy: 'popularity.desc',
    topMovies: []
};

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initialMovieSliceState,
    reducers: {
        changePage: (state, action:PayloadAction<number>) => {
            state.page = action.payload;},

        changeSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
            state.selectedGenreId = null;
            state.page = 1;},

        changeGenre: (state, action: PayloadAction<number | null>) => {
            state.selectedGenreId = action.payload;
            state.searchQuery = '';
            state.page = 1;},

        changeSort: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
            state.page = 1;}},

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
            (state, action:PayloadAction<IMovieDetails>)=>{
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

        .addCase(loadTopRatedMovies.fulfilled, (state, action:PayloadAction<IMovieResponse>)=>{
            state.topMovies = action.payload.results;
        })

        .addCase(loadTopRatedMovies.rejected, (state, action)=>{
            state.error = action.payload as string;
        })


})
export const movieActions = {...movieSlice.actions, loadMovies, loadGenres, loadMovieById, searchMovies, loadTopRatedMovies};