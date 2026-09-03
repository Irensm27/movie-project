import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {movieActions} from "../redux/slices/MovieSlice.ts";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();

    const movie = useAppSelector(state => state.movieStoreSlice.movie);

    useEffect(() => {
        if (id) {
            dispatch(movieActions.loadMovieById(id));
        }
    }, [id, dispatch]);
    return (
        <div>
            {
                movie &&
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />

                    <h1>{movie.title}</h1>

                    <p>{movie.overview}</p>

                    <div>
                        {
                            movie.genres.map(genre =>
                                    <span key={genre.id}>
                                {genre.name}
                            </span>
                            )
                        }
                    </div>

                    <p>Release date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                    <p>Votes: {movie.vote_count}</p>
                    <p>Runtime: {movie.runtime} min</p>
                </div>
            }
        </div>
    );
};

export default MovieDetailsPage;