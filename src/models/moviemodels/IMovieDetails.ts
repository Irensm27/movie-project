export interface IMovieDetails {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    runtime: number;
    genres: {
        id: number;
        name: string;
    }[];
}