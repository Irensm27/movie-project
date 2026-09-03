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
            className="aspect-[2/3] w-full object-cover"
        />
    );
};

export default PosterPreview;