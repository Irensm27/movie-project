import type {IGenre} from "../../models/genremodels/IGenre.ts";
import type {FC, MouseEvent} from "react";
import {useAppDispatch} from "../../redux/store.ts";
import {movieActions} from "../../redux/slices/MovieSlice.ts";

interface IGenreBadgeProps {
    genre: IGenre;
}

const GenreBadge: FC<IGenreBadgeProps> = ({genre}) => {
    const dispatch = useAppDispatch();

    const handleGenreClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(movieActions.changeGenre(genre.id));
    };

    return (
        <div
            onClick={handleGenreClick}
            className="cursor-pointer rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-neutral-900 transition hover:bg-yellow-300"
        >
            {genre.name}
        </div>
    );
};

export default GenreBadge;