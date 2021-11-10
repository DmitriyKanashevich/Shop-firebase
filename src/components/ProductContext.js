import React, { createContext } from "react";
import { firestore } from "../index";
export const ProductsContext = createContext();
export class ProductsContextProvider extends React.Component {
    state = {
        products: []
    }
    componentDidMounth() {
        const prevProducts = this.state.products;
        firestore.collection('Products').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProducts.push({
                        ProductName: change.docChanges.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                    })
                }
                this.setState({
                    products: prevProducts
                })
            })
        })
    }
    render() {
        return (
            <ProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.ProductsContextProvider.children}
            </ProductsContext.Provider>
        )
    }
}