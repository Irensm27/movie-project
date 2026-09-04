import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {movieActions} from "../redux/slices/MovieSlice.ts";


const GenreButtonComponent = () => {
    const dispatch = useAppDispatch();
    const genres = useAppSelector(state => state.movieStoreSlice.genres)
    const selectedGenreId = useAppSelector(state => state.movieStoreSlice.selectedGenreId)
    return (
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-6">

            <button
                onClick={() => dispatch(movieActions.changeGenre(null))}
                className={
                    selectedGenreId === null
                        ? "rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-neutral-900"
                        : "rounded-full bg-neutral-800 px-4 py-2 text-sm text-white transition hover:bg-neutral-700"
                }
            >
                All
            </button>

            {
                genres.map((genre) =>
                    <button
                        onClick={() => dispatch(movieActions.changeGenre(genre.id))}
                        key={genre.id}
                        className={
                            genre.id === selectedGenreId
                                ? "rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-neutral-900"
                                : "rounded-full bg-neutral-800 px-4 py-2 text-sm text-white transition hover:bg-neutral-700"
                        }
                    >
                        {genre.name}
                    </button>
                )
            }

        </div>
    );
};

export default GenreButtonComponent;