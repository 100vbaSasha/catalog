"use client"
import React, {FC} from 'react';
import Reviews from "@/components/Reviews";

const ReviewsPage:FC = () => {

    return (
        <div className="flex items-center flex-col h-screen">
            <Reviews />
        </div>
    );
};

export default ReviewsPage;