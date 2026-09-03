import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {movieActions} from "../redux/slices/MovieSlice.ts";

const Sort = () => {
    const dispatch = useAppDispatch();

    const sortBy = useAppSelector(
        state => state.movieStoreSlice.sortBy
    );

    return (
        <select
            value={sortBy}
            onChange={(e) => dispatch(movieActions.changeSort(e.target.value))}
            className="rounded-lg bg-neutral-800 px-3 py-2 text-white outline-none transition hover:bg-neutral-700"
        >
            <option value="popularity.desc">Popular</option>
            <option value="vote_average.desc">Top Rated</option>
            <option value="release_date.desc">Newest</option>
        </select>
    );
};

export default Sort;