import axios from "axios";
import type {IMovieResponse} from "../models/moviemodels/IMovieResponse.ts";
import type {IGenreResponse} from "../models/genremodels/IGenreResponse.ts";
import type {IMovieDetails} from "../models/moviemodels/IMovieDetails.ts";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
});

export const movieService = {
    getMovies: (page: number, genreId?: number, sortBy: string = 'popularity.desc') => {
        const today = new Date().toISOString().split('T')[0];

        return axiosInstance.get<IMovieResponse>(
            `/discover/movie?page=${page}&sort_by=${sortBy}` +
            `${genreId ? `&with_genres=${genreId}` : ''}` +
            `${sortBy === 'release_date.desc' ? `&release_date.lte=${today}` : ''}`
        );
    },

    getMovieById: (id:string) => axiosInstance.get<IMovieDetails>(`/movie/${id}`),

    searchMovies: (query:string, page:number) => axiosInstance.get<IMovieResponse>(`/search/movie?query=${query}&page=${page}`),

    getTopRatedMovies: () => axiosInstance.get<IMovieResponse>("/movie/top_rated?page=1")
}
export const genreService = {
    getGenres: () => axiosInstance.get<IGenreResponse>("/genre/movie/list")
}

