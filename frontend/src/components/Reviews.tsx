import React, {FC, useCallback, useState} from 'react';
import {IReview} from "@/types/Review";
import { MOCKED_DEFAULT_REVIEWS } from "../../mock-tool";
import ReviewsItem from "@/components/ReviewsItem";
import ReviewsForm from "@/components/ReviewsForm";

type ReviewsProps = {
    defaultReviews?: IReview[]
}
const Reviews:FC<ReviewsProps> = (props) => {
    const { defaultReviews = MOCKED_DEFAULT_REVIEWS } = props;
    const [reviews, setReviews] = useState<IReview[]>(defaultReviews);

    const handleAddReview = useCallback((newReview: IReview) => {
        setReviews((prev: IReview[]) => [...prev, newReview] )
    }, []);

    return (
        <div style={{ width: "800px" }} className="bg-gray-300 w-250px rounded-lg p-12">
            <h2 className="text-3xl text-center font-bold mb-10">Reviews</h2>
            <ul className="h-80 p-5 overflow-y-auto border border-solid border-black rounded-lg">{reviews.map((review: IReview) => <ReviewsItem key={review.id} reviewInfo={review} />)}</ul>
            <ReviewsForm addReview={handleAddReview} />
        </div>
    );
};

export default Reviews;