import React, {FC, useEffect, useState} from 'react';
import type { ICar } from "@/types/Car";
import {fetchData} from "@/service";
import CarCard from "@/components/CarCard";
import {BASE_API_URL} from "@/constants";

const ProductList:FC = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        fetchData(BASE_API_URL).then((result: ICar[]) => setCars(result));
    }, []);

    return (
        <ul className="flex flex-wrap justify-center h-screen">
            {cars.length ?
                cars.map((car: ICar) => <CarCard key={car.id} carInfo={car} />) :
                <h1>Cars were not fetched. Probably u forgot to run server. Verify this <a className="underline" href="http://localhost:3001/cars">link</a></h1>
            }
        </ul>
    );
};

export default ProductList;