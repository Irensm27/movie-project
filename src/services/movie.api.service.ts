import axios from "axios";
import type {IMovieResponse} from "../models/IMovieResponse.ts";
import type {IGenreResponse} from "../models/IGenreResponse.ts";
import type {IMovieDetails} from "../models/IMovieDetails.ts";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
});

export const movieService = {
    getMovies: (page:number, genreId?:number, sortBy:string = 'popularity.desc') =>
        axiosInstance.get<IMovieResponse>(
            `/discover/movie?page=${page}&sort_by=${sortBy}${genreId ? `&with_genres=${genreId}` : ''}`
        ),

    getMovieById: (id:string) => axiosInstance.get<IMovieDetails>(`/movie/${id}`),

    searchMovies: (query:string, page:number) =>
        axiosInstance.get<IMovieResponse>(`/search/movie?query=${query}&page=${page}`),
}
export const genreService = {
    getGenres: () => axiosInstance.get<IGenreResponse>("/genre/movie/list")
}

