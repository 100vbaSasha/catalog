"use client"
import React, {FC, useEffect, useState} from 'react';
import {getCarIdFromPathname} from "@/utills";
import {usePathname} from "next/navigation";
import {ICar} from "@/types/Car";
import {fetchData} from "@/service";
import {BASE_API_URL} from "@/constants";
import CarCard from "@/components/CarCard";

const ReviewsPage:FC = () => {
    const pathname = usePathname();
    const carId = getCarIdFromPathname(pathname);
    const [carInfo, setCarInfo] = useState<ICar | null>(null);
    useEffect(() => {
        fetchData(`${BASE_API_URL}?id=${carId}`).then((result: ICar[]) => setCarInfo(result[0]));
    }, [carId]);

    console.log(carInfo);

    return (
        <div className="flex items-center flex-col h-screen">
            {carInfo && <CarCard carInfo={carInfo} />}
        </div>
    );
};

export default ReviewsPage;