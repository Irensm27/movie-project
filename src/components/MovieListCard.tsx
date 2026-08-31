import type {IMovie} from "../models/IMovie.ts";
import type {FC} from "react";
import PosterPreview from "./PosterPreview.tsx";
import StarsRating from "./StarsRating.tsx";
import type {IGenre} from "../models/IGenre.ts";
import GenreBadge from "./GenreBadge.tsx";

type MovieListCardProps = {
    movie: IMovie;
    genres:IGenre[];
}

const MovieListCard:FC<MovieListCardProps> = ({movie, genres}) => {
    const movieGenres = genres.filter(genre=> movie.genre_ids.includes(genre.id))
    return (
        <div>
            <PosterPreview posterPath={movie.poster_path} title={movie.title}/>
            {
                movieGenres.map(genre=><GenreBadge genre={genre} key={genre.id}/>)
            }
            <StarsRating rating={movie.vote_average}/>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
        </div>
    );
};

export default MovieListCard;