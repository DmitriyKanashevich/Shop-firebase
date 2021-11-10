import React from 'react'

export const IndividualProduct = ({ individualProduct }) => {
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img" />
            </div>
            <div>Название</div>
            <div className='product-text title'> {individualProduct.title}</div>
            <div>Описание</div>
            <div className='product-text description'>{individualProduct.description}</div>
            <div>Цена</div>
            <div className='product-text price'>{individualProduct.price}  грн.</div>
            <div className="product-text date">
                {individualProduct.date !== 0 ? (
                   
                    <span className="product-sold-out"> Дата окончания скидки<p></p>{individualProduct.date}</span>
                ) : (
                    <span className="product-remaining"></span>
                )}
            </div>
           
            <div className="half">
                {individualProduct.date !== 0 ? (
                    <span className="product-sold-out"> Цена со скидкой  {individualProduct.price - (individualProduct.price / 100 * individualProduct.sell)} грн.</span>
                ) : (
                    <span className="product-remaining"></span>
                )}
            </div>
           
        </div>
    )
}
