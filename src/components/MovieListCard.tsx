import type {IMovie} from "../models/IMovie.ts";
import type {FC} from "react";
import PosterPreview from "./PosterPreview.tsx";
import StarsRating from "./StarsRating.tsx";
import MovieInfo from "./MovieInfo.tsx";
import type {IGenre} from "../models/IGenre.ts";
import {Link} from "react-router-dom";


type MovieListCardProps = {
    movie: IMovie;
    genres:IGenre[];
}

const MovieListCard:FC<MovieListCardProps> = ({movie, genres}) => {
    return (
            <Link to={`/movies/${movie.id}`}>
            <PosterPreview posterPath={movie.poster_path} title={movie.title}/>
            <StarsRating rating={movie.vote_average}/>
            <MovieInfo movie={movie} genres={genres}/>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
            <p>Votes: {movie.vote_count}</p>
            <p>Language: {movie.original_language}</p>
            <p>Popularity: {movie.popularity}</p>

            {
                movie.original_title !== movie.title &&
                <p>Original title: {movie.original_title}</p>
            }
            </Link>
    );
};

export default MovieListCard;