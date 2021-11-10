import React, { useState, useEffect } from 'react';
import { firestore, storage } from '../index';
import { Products } from './ProductsChange';
import { IndividualChangeProduct } from './IndividualChangeProducts';

const ChangeCart = () => {
    const [products, setProducts] = useState([]);
    var styles_product_box = {
        box: { display: 'flex', 'flex-wrap': 'wrap' }
    };
    const getProducts = async () => {
        const products = await firestore.collection('Products').get();
        const productsArray = [];
        for (var snap of products.docs) {
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if (productsArray.length === products.docs.length) {
                setProducts(productsArray);
            }
        }
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <br></br>
            {products.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center'>Редактирование товаров</h1>

                    <div className='producs-box' style={styles_product_box.box}>

                        <Products products={products} />
                    </div>
                </div>
            )}
            {products.length < 1 && (
                <div className='container-fluid'>
                    Please wait........
                </div>
            )}
        </>
    );
};
export default ChangeCart;
