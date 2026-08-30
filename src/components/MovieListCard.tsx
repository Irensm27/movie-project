import type {IMovie} from "../models/IMovie.ts";
import type {FC} from "react";
import PosterPreview from "./PosterPreview.tsx";
import StarsRating from "./StarsRating.tsx";

type MovieListCardProps = {
    movie: IMovie;
}

const MovieListCard:FC<MovieListCardProps> = ({movie}) => {
    return (
        <div>
            <PosterPreview posterPath={movie.poster_path} title={movie.title}/>
            <StarsRating rating={movie.vote_average}/>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
        </div>
    );
};

export default MovieListCard;