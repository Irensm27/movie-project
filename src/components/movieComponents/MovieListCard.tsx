import type {IMovie} from "../../models/moviemodels/IMovie.ts";
import type {FC} from "react";
import PosterPreview from "./PosterPreview.tsx";
import StarsRating from "./StarsRating.tsx";
import MovieInfo from "./MovieInfo.tsx";
import type {IGenre} from "../../models/genremodels/IGenre.ts";
import {Link} from "react-router-dom";


type MovieListCardProps = {
    movie: IMovie;
    genres:IGenre[];
}

const MovieListCard: FC<MovieListCardProps> = ({movie, genres}) => {
    return (
        <Link
            to={`/movies/${movie.id}`}
            className="block overflow-hidden rounded-xl bg-neutral-900 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
            <PosterPreview
                posterPath={movie.poster_path}
                title={movie.title}
            />

            <div className="space-y-2 p-4">
                <StarsRating rating={movie.vote_average}/>

                <p className="text-sm text-neutral-400">
                    {movie.release_date}
                </p>

                <p className="text-sm">
                    Rating: {movie.vote_average}
                </p>

                <p className="text-sm text-neutral-400">
                    Votes: {movie.vote_count}
                </p>
            </div>

            <div className="px-4 pb-4">
                <MovieInfo movie={movie} genres={genres}/>
            </div>
        </Link>
    );
};

export default MovieListCard;