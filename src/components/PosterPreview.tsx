import type {FC} from "react";

type PosterPreviewProps = {
    posterPath: string;
    title: string;
};

const PosterPreview:FC<PosterPreviewProps> = ({posterPath, title}) => {

    const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

    return (
        <img
            src={posterUrl}
            alt={title}
        />
    );
};

export default PosterPreview;