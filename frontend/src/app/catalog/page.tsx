"use client"
import React, {FC} from 'react';
import ProductList from "@/components/ProductList";

const CatalogPage:FC = () => {

    return (
        <div className="flex flex-col items-center h-screen">
            <h1 className="text-3xl font-bold mb-10">You can click on the card and open it on the separate page</h1>
            <ProductList />
        </div>
    );
};

export default CatalogPage;