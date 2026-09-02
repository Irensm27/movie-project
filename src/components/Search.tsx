import {useAppDispatch} from "../redux/store.ts";
import { useState} from "react";
import {movieActions} from "../redux/slices/MovieSlice.ts";




const Search = () => {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>('');

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={() => dispatch(movieActions.searchMovies(search))}>
                Search
            </button>
        </div>
    );
};

export default Search;