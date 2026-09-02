import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {movieActions} from "../redux/slices/MovieSlice.ts";

const Pagination = () => {
    const dispatch = useAppDispatch();

    const page = useAppSelector(state => state.movieStoreSlice.page);
    const totalPages = useAppSelector(state => state.movieStoreSlice.totalPages);

    return (
        <div>
            <button
                disabled={page === 1}
                onClick={() => dispatch(movieActions.changePage(page - 1))}
            >
                Previous
            </button>

            <span>
                {page} / {totalPages}
            </span>
            <button
                disabled={page === totalPages}
                onClick={() => dispatch(movieActions.changePage(page + 1))}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;