import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {movieActions} from "../../redux/slices/MovieSlice.ts";

const Sort = () => {
    const dispatch = useAppDispatch();

    const {sortBy, searchQuery} = useAppSelector(
        state => state.movieStoreSlice
    );

    const isSearchActive = searchQuery.trim() !== '';

    return (
        <div className="flex flex-col">
            <div className="relative inline-flex items-center">
                <select
                    value={sortBy}
                    disabled={isSearchActive}
                    onChange={(e) =>
                        dispatch(movieActions.changeSort(e.target.value))
                    }
                    className="cursor-pointer appearance-none rounded-lg bg-neutral-800 py-2 pl-3 pr-8 text-white outline-none transition hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <option value="popularity.desc">Popular</option>
                    <option value="vote_average.desc">Top Rated</option>
                    <option value="release_date.desc">Newest</option>
                </select>

                <span className="pointer-events-none absolute right-3 text-xs text-neutral-300">
                    ▼
                </span>
            </div>

            {
                isSearchActive &&
                <p className="mt-1 text-xs text-neutral-400">
                    Sorting is unavailable during search
                </p>
            }
        </div>
    );
};

export default Sort;