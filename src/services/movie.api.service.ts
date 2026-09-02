import axios from "axios";
import type {IMovieResponse} from "../models/IMovieResponse.ts";
import type {IGenreResponse} from "../models/IGenreResponse.ts";
import type {IMovie} from "../models/IMovie.ts";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
});

export const movieService = {
    getMovies: (page:number) =>
        axiosInstance.get<IMovieResponse>(`/discover/movie?page=${page}`),

    getMovieById: (id:string) => axiosInstance.get<IMovie>(`/movie/${id}`),

    searchMovies: (query:string) =>
        axiosInstance.get<IMovieResponse>(`/search/movie?query=${query}`)
}
export const genreService = {
    getGenres: () => axiosInstance.get<IGenreResponse>("/genre/movie/list")
}

