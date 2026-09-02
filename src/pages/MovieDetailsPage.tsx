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
    },[id, dispatch]);
    return (
        <div>
            {
                movie &&
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p>{movie.release_date}</p>
                    <p>{movie.vote_average}</p>
                </div>
            }
        </div>
    );
};

export default MovieDetailsPage;