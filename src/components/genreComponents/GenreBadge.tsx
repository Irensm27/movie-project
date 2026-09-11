import type {FC, MouseEvent} from "react";
import {useAppDispatch} from "../../redux/store.ts";
import {movieActions} from "../../redux/slices/MovieSlice.ts";
import type {IGenre} from "../../models/genremodels/IGenre.ts";

interface IGenreBadgeProps {
    genre: IGenre;
    clickable?: boolean;
}

const GenreBadge: FC<IGenreBadgeProps> = ({genre, clickable = true}) => {
    const dispatch = useAppDispatch();

    const handleGenreClick = (e: MouseEvent<HTMLDivElement>) => {
        if (!clickable) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        dispatch(movieActions.changeGenre(genre.id));
    };

    return (
        <div
            onClick={handleGenreClick}
            className={`rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-neutral-900 ${
                clickable
                    ? "cursor-pointer transition hover:bg-yellow-300"
                    : ""
            }`}
        >
            {genre.name}
        </div>
    );
};

export default GenreBadge;