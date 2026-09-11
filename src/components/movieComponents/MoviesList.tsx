import MovieListCard from "./MovieListCard.tsx";
import type {IMovie} from "../../models/moviemodels/IMovie.ts";
import type {IGenre} from "../../models/genremodels/IGenre.ts";

type MoviesListProps = {
    movies: IMovie[];
    genres: IGenre[];
};

const MoviesList = ({movies, genres}: MoviesListProps) => {
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