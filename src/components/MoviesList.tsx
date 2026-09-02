import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {movieActions} from "../redux/slices/MovieSlice.ts";
import MovieListCard from "./MovieListCard.tsx";


const MoviesList = () => {
    const dispatch = useAppDispatch();

    const movies = useAppSelector(state => state.movieStoreSlice.movies);
    const genres = useAppSelector(state => state.movieStoreSlice.genres);
    const page = useAppSelector(state => state.movieStoreSlice.page);

    useEffect(() => {
        dispatch(movieActions.loadMovies(page));
        dispatch(movieActions.loadGenres());
    }, [dispatch, page]);

    return (
        <div>
            {
                movies.map(movie =>
                    <MovieListCard
                        movie={movie}
                        key={movie.id}
                        genres={genres}
                    />
                )
            }
        </div>
    );
};

export default MoviesList;