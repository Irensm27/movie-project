import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux/slices/MovieSlice.ts";

const Search = () => {
    const dispatch = useAppDispatch();

    const searchQuery = useAppSelector(
        state => state.movieStoreSlice.searchQuery
    );

    const [search, setSearch] = useState<string>(searchQuery);

    useEffect(() => {
        setSearch(searchQuery);
    }, [searchQuery]);

    const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(movieActions.changeSearchQuery(search));
    };

    return (
        <form
            onSubmit={searchHandler}
            className="flex w-full max-w-md"
        >
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movies..."
                className="w-full rounded-l-lg bg-white px-4 py-2 text-neutral-900 outline-none"
            />

            <button
                type="submit"
                className="rounded-r-lg bg-yellow-400 px-5 py-2 font-semibold text-neutral-900 transition hover:bg-yellow-300"
            >
                Search
            </button>
        </form>
    );
};

export default Search;