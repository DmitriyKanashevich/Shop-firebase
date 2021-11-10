import React from "react";
import { IndividualProduct } from "./IndividualProducts";

export const Products = ({ products }) => {
    return products.map((individualProduct) => (
        <IndividualProduct key={individualProduct.ID} individualProduct={individualProduct} />
    ))
}