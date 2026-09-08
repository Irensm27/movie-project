import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {movieActions} from "../../redux/slices/MovieSlice.ts";

const Sort = () => {
    const dispatch = useAppDispatch();

    const sortBy = useAppSelector(state => state.movieStoreSlice.sortBy);

    return (
        <div className="relative inline-flex items-center">
            <select
                value={sortBy}
                onChange={(e) => dispatch(movieActions.changeSort(e.target.value))}
                className="cursor-pointer appearance-none rounded-lg bg-neutral-800 py-2 pl-3 pr-8 text-white outline-none transition hover:bg-neutral-700"
            >
                <option value="popularity.desc">Popular</option>
                <option value="vote_average.desc">Top Rated</option>
                <option value="release_date.desc">Newest</option>
            </select>

            <span className="pointer-events-none absolute right-3 text-xs text-neutral-300">
                ▼
            </span>
        </div>
    );
};

export default Sort;