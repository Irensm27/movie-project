import {useAppDispatch} from "../redux/store.ts";
import { useState} from "react";
import {movieActions} from "../redux/slices/MovieSlice.ts";




const Search = () => {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>('');

    return (
        <div className="flex w-full max-w-md">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movies..."
                className="w-full rounded-l-lg bg-white px-4 py-2 text-neutral-900 outline-none"
            />

            <button
                onClick={() => {
                    dispatch(movieActions.changeSearchQuery(search));
                    dispatch(movieActions.searchMovies({
                        query: search,
                        page: 1
                    }));
                }}
                className="rounded-r-lg bg-yellow-400 px-5 py-2 font-semibold text-neutral-900 transition hover:bg-yellow-300"
            >
                Search
            </button>
        </div>
    );
};

export default Search;