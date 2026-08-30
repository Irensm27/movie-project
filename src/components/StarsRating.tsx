import type {FC} from "react";

type StarsRatingProps = {
    rating: number;
};

const StarsRating:FC<StarsRatingProps> = ({rating}) => {
    const stars = Math.round(rating / 2);

    return (
        <div>
            {
                [1, 2, 3, 4, 5].map(star => (
                    <span key={star}>
                        {star <= stars ? "★" : "☆"}
                    </span>
                ))
            }
        </div>
    );
};

export default StarsRating;