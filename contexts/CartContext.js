import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart ] = useState([]);
    const [ itemAmount, setItemAmount ] = useState(0);
    const [ total, setTotal ] = useState(0);

    const addToCart = (product ,id) => {
        const newItem = { ...product, amount: 1};
        //check if the item is already in the cart
        const cartItem = cart.find( item => {
            return item.id === id;
        });

        if(cartItem){
            const newCart = [...cart].map( item => {
                if(item.id === id){
                    return { ...item, amount: cartItem.amount + 1}
                } else {
                    return item;
                }
            });
            setCart(newCart)
        }else{
            setCart( prevCart => [...prevCart, newItem])
        }
    }

    //remove an item from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter( item => item.id !== id );
        setCart(newCart)
    }

    //clear cart
    const clearCart = () => {
        setCart([])
    }

    //increase amount
    const increaseAmount = (id) => {
        const item = cart.find(item => item.id === id);
        addToCart(item, id)
    }

    const decreaseAmount = (id) => {
        setCart(prevCart => prevCart.map(item => 
            item.id === id 
            ? { ...item, 
                amount: item.amount < 2 
                    ? removeFromCart(id) 
                    : item.amount - 1 
            } 
            : item
            )
        )
    }

    //update total price
    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + (currentItem.price * currentItem.amount)
        }, 0 );
        setTotal(total)
    }, [cart])

    //update item amount
    useEffect(() => {
        if(cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0)
            setItemAmount(amount)
        }
    }, [cart])

    return (
        <CartContext.Provider 
            value={{
                cart ,
                addToCart, 
                removeFromCart, 
                clearCart, 
                increaseAmount, 
                decreaseAmount,
                itemAmount,
                total
            }} 
            >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
 