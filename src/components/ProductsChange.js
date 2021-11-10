import React from "react";
import { IndividualChangeProduct } from "./IndividualChangeProducts";

export const Products = ({ products }) => {
    return products.map((individualChangeProduct) => (
        <IndividualChangeProduct key={individualChangeProduct.ID} individualChangeProduct={individualChangeProduct} />

    ))
}