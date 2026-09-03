import type {IMovie} from "../models/IMovie.ts";
import type {FC} from "react";
import type {IGenre} from "../models/IGenre.ts";
import GenreBadge from "./GenreBadge.tsx";

interface IMovieInfoProps {
    movie: IMovie;
    genres:IGenre[];
}

const MovieInfo:FC<IMovieInfoProps> = ({movie, genres}) => {
    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id)
    );
    return (
        <div>
            <h2 className="mb-2 text-lg font-bold text-white">
                {movie.title}
            </h2>

            <p className="mb-3 line-clamp-3 text-sm leading-5 text-neutral-400">
                {movie.overview}
            </p>

            <div className="flex flex-wrap gap-2">
                {
                    movieGenres.map(genre =>
                        <GenreBadge
                            genre={genre}
                            key={genre.id}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default MovieInfo;