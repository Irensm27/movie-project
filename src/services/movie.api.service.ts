import axios from "axios";
import type {IMovieResponse} from "../models/IMovieResponse.ts";
import type {IGenreResponse} from "../models/IGenreResponse.ts";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
});

export const movieService = {
    getMovies: () => axiosInstance.get<IMovieResponse>("/discover/movie")
};

export const genreService = {
    getGenres: () => axiosInstance.get<IGenreResponse>("/genre/movie/list")
}

