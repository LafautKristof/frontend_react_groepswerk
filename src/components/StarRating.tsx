import React from "react";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div>
            {[0, 1, 2, 3, 4].map((i) => {
                if (rating >= i + 1) {
                    return <IoStar key={i} />;
                } else if (rating >= i + 0.5) {
                    return <IoStarHalf key={i} />;
                } else {
                    return <IoStarOutline key={i} />;
                }
            })}
        </div>
    );
};

export default StarRating;
