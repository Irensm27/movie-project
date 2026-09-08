import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {movieActions} from "../../redux/slices/MovieSlice.ts";

const Pagination = () => {
    const dispatch = useAppDispatch();

    const page = useAppSelector(state => state.movieStoreSlice.page);
    const totalPages = useAppSelector(state => state.movieStoreSlice.totalPages);

    const visibleTotalPages = Math.min(totalPages, 500);

    const pages = [];

    for (
        let i = Math.max(1, page - 2);
        i <= Math.min(visibleTotalPages, page + 2);
        i++
    ) {
        pages.push(i);
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 py-8">

            <button
                disabled={page === 1}
                onClick={() => dispatch(movieActions.changePage(page - 1))}
                className="
                    rounded-lg
                    bg-zinc-800
                    px-4
                    py-2
                    text-white
                    transition
                    hover:bg-zinc-700
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                Previous
            </button>

            {page > 3 && (
                <>
                    <button
                        onClick={() => dispatch(movieActions.changePage(1))}
                        className="
                            h-10
                            w-10
                            rounded-lg
                            bg-zinc-800
                            text-white
                            transition
                            hover:bg-zinc-700
                        "
                    >
                        1
                    </button>

                    <span className="px-1 text-zinc-400">
                        ...
                    </span>
                </>
            )}

            {pages.map(pageNumber => (
                <button
                    key={pageNumber}
                    onClick={() =>
                        dispatch(movieActions.changePage(pageNumber))
                    }
                    className={`
                        h-10
                        w-10
                        rounded-lg
                        transition
                        ${
                        pageNumber === page
                            ? "bg-amber-500 font-bold text-black"
                            : "bg-zinc-800 text-white hover:bg-zinc-700"
                    }
                    `}
                >
                    {pageNumber}
                </button>
            ))}

            {page < visibleTotalPages - 2 && (
                <>
                    <span className="px-1 text-zinc-400">
                        ...
                    </span>

                    <button
                        onClick={() =>
                            dispatch(movieActions.changePage(visibleTotalPages))
                        }
                        className="
                            h-10
                            min-w-10
                            rounded-lg
                            bg-zinc-800
                            px-2
                            text-white
                            transition
                            hover:bg-zinc-700
                        "
                    >
                        {visibleTotalPages}
                    </button>
                </>
            )}

            <button
                disabled={page >= visibleTotalPages}
                onClick={() => dispatch(movieActions.changePage(page + 1))}
                className="
                    rounded-lg
                    bg-zinc-800
                    px-4
                    py-2
                    text-white
                    transition
                    hover:bg-zinc-700
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                Next
            </button>

        </div>
    );
};

export default Pagination;