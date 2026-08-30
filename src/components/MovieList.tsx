import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {movieActions} from "../redux/slices/MovieSlice.ts";
import MovieListCard from "./MovieListCard.tsx";


const MovieList = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movieStoreSlice.movies);

    useEffect(() => {
        dispatch(movieActions.loadMovies())
    },[dispatch])
    return (
        <div>
            {
                movies.map(movie => <MovieListCard movie={movie} key={movie.id}/> )
            }

        </div>
    );
};

export default MovieList;