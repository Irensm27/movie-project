import {useEffect} from "react";
import MoviesList from "../components/movieComponents/MoviesList.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import GenreButtonComponent from "../components/genreComponents/GenreButtonComponent.tsx";
import MovieBanner from "../components/movieComponents/MovieBanner.tsx";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {movieActions} from "../redux/slices/MovieSlice.ts";

const MoviesPage = () => {
    const dispatch = useAppDispatch();

    const {
        movies,
        genres,
        page,
        searchQuery,
        selectedGenreId,
        sortBy,
        isLoading,
        error
    } = useAppSelector(state => state.movieStoreSlice);

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
        <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[140px]"/>

                <div className="absolute -right-40 top-[500px] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]"/>

                <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-yellow-400/5 blur-[120px]"/>
            </div>

            <div className="relative z-10">
                <MovieBanner/>
                <GenreButtonComponent/>

                {
                    isLoading &&
                    <div className="flex min-h-[300px] items-center justify-center">
                        <p className="text-xl">
                            Loading...
                        </p>
                    </div>
                }

                {
                    error && !isLoading &&
                    <div className="flex min-h-[300px] items-center justify-center">
                        <p className="text-xl text-red-400">
                            {error}
                        </p>
                    </div>
                }

                {
                    !isLoading && !error &&
                    <>
                        <MoviesList
                            movies={movies}
                            genres={genres}
                        />
                        <Pagination/>
                    </>
                }
            </div>

        </div>
    );
};

export default MoviesPage;