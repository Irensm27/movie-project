import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/MovieSlice.ts";
import MovieListCard from "./MovieListCard.tsx";


const MoviesList = () => {
    const dispatch = useAppDispatch();

    const movies = useAppSelector(state => state.movieStoreSlice.movies);
    const genres = useAppSelector(state => state.movieStoreSlice.genres);
    const page = useAppSelector(state => state.movieStoreSlice.page);
    const searchQuery = useAppSelector(state => state.movieStoreSlice.searchQuery);
    const selectedGenreId = useAppSelector(state => state.movieStoreSlice.selectedGenreId);
    const sortBy = useAppSelector(state => state.movieStoreSlice.sortBy);

    useEffect(() => {
        if (searchQuery) {
            dispatch(movieActions.searchMovies({
                query: searchQuery,
                page: page
            }));
        } else {
            dispatch(movieActions.loadMovies({
                page: page,
                genreId: selectedGenreId,
                sortBy: sortBy
            }));
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [dispatch, page, searchQuery, selectedGenreId, sortBy]);

    useEffect(() => {
        dispatch(movieActions.loadGenres());
    }, [dispatch]);

    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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