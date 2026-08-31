import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {movieActions} from "../redux/slices/MovieSlice.ts";
import MovieListCard from "./MovieListCard.tsx";


const MoviesList = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movieStoreSlice.movies);
    const genres = useAppSelector(state => state.movieStoreSlice.genres)

    useEffect(() => {
        dispatch(movieActions.loadMovies())
        dispatch(movieActions.loadGenres())
    },[dispatch])
    return (
        <div>
            {
                movies.map((movie) => <MovieListCard movie={movie} key={movie.id} genres={genres} /> )
            }

        </div>
    );
};

export default MoviesList;