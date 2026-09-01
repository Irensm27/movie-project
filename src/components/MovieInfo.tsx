import type {IMovie} from "../models/IMovie.ts";
import type {IGenre} from "../models/IGenre.ts";
import type {FC} from "react";
import GenreBadge from "./GenreBadge.tsx";

interface IMovieInfoProps {
    movie: IMovie;
    genres:IGenre[];
}

const MovieInfo:FC<IMovieInfoProps> = ({movie, genres}) => {
    const movieGenres = genres.filter(genre=> movie.genre_ids.includes(genre.id))
    return (
        <div>
            {
                movieGenres.map(genre=><GenreBadge genre={genre} key={genre.id}/>)
            }
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>

        </div>
    );
};

export default MovieInfo;