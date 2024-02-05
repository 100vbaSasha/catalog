import React, {FC, memo} from 'react';
import {ICar} from "@/types/Car";
import Image, {ImageLoader} from "next/image";
import Link from "next/link";

type CarCardProps = {
    carInfo: ICar
}

const CarCard:FC<CarCardProps> = (props) => {
    const { carInfo } = props;
    const loader: ImageLoader = ({ src }) => {
        return carInfo.url || src;
    };
    return (
        <li key={carInfo.id} className="list-none">
            <Link href={`/catalog/${carInfo.id}`} className="block">
                <div className="bg-gray-200 p-4 m-2 w-72 h-72 flex flex-col items-center justify-center rounded-lg" >
                    <div className="h-64 w-64">
                        <Image loader={loader} src={carInfo.url!} alt={`image for ${carInfo.name}`} width={300} height={200} />
                    </div>
                    <h3 className="text-xl font-bold">{carInfo.mark} {carInfo.name}</h3>
                    <p className="text-md">{carInfo.price}</p>
                </div>
            </Link>
        </li>
    );
};

export default memo(CarCard);