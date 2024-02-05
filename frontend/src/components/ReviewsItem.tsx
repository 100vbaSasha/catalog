import React, {FC} from 'react';
import {IReview} from "@/types/Review";

type ReviewsItemProps = {
    reviewInfo: IReview
}

const ReviewsItem:FC<ReviewsItemProps> = (props) => {
    const { reviewInfo } = props;
    return (
        <li key={reviewInfo.id} className="border-b border-solid border-black mb-6">
            <h5 className="text-xl font-bold mb-2.5">{reviewInfo.name}</h5>
            <div className="flex">
                <h6 className="text-lg font-semibold">{reviewInfo.email}</h6>
                <h6 className="text-lg font-semibold mx-3">{reviewInfo?.phone}</h6>
            </div>
            <p className="text-md my-5">
                {reviewInfo.comment}
            </p>
        </li>
    );
};

export default ReviewsItem;