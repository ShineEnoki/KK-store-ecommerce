import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState();

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
};

export default ProductContextProvider;
