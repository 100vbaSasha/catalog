import React, {FC, memo} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import type {IReview, INewReview} from "@/types/Review";
type ReviewsFormProps = {
    addReview: (newReview: IReview) => void;
}
type FormValues = {
    name: string
    email: string
    comment: string
}

const VALIDATION_LABEL = "Fill required field";
const ReviewsForm:FC<ReviewsFormProps> = (props) => {
    const { addReview } = props;
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit:SubmitHandler<INewReview> = (data) => {
        const newReview = {
            name: data.name || 'test',
            email: data.email || 'test',
            comment: data.comment || 'test',
            id: Math.floor(Math.random() * 1000001)
        };
        addReview(newReview);
        reset();
    }

    return (
        <div className="mt-20">
            <h4 className="text-2xl font-bold mb-2.5">Leave a Review</h4>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                <textarea
                    {...register("comment", {
                        required: true
                    })}
                    className="w-full rounded-sm h-24 p-2 border border-solid border-black"
                    placeholder="Comment *"
                />
                <p className="text-red-500">
                    {errors?.comment && VALIDATION_LABEL}
                </p>
                <div className="flex gap-10 my-5">
                    <div className="w-1/2">
                        <input
                            className="w-full p-2 rounded-sm border border-solid border-black"
                            {...register("name", { required: true })}
                            placeholder="Name *"
                        />
                        <p className="text-red-500">
                            {errors?.name && VALIDATION_LABEL}
                        </p>
                    </div>
                    <div className="w-1/2">
                        <input
                            className="w-full p-2 rounded-sm border border-solid border-black"
                            {...register("email", { required: true })}
                            placeholder="Email *"
                        />
                        <p className="text-red-500">
                            {errors?.email && VALIDATION_LABEL}
                        </p>
                    </div>
                </div>
                <input
                    {...register("phone")}
                    className="w-full rounded-sm p-2 border border-solid border-black"
                    placeholder="Phone (optional) *"
                />
                <input
                    className="text-center py-4 px-20 bg-green-800 text-white rounded-3xl my-5 cursor-pointer"
                    type="submit"
                    value="Send review"
                />
            </form>
        </div>
    );
};

export default memo(ReviewsForm);