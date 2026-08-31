import type {IGenre} from "../models/IGenre.ts";
import type {FC} from "react";

interface IGenreBadgeProps {
    genre:IGenre;
}
const GenreBadge:FC<IGenreBadgeProps> = ({genre}) => {
    return (
        <div>
            {
                genre.name
            }
        </div>
    );
};

export default GenreBadge;