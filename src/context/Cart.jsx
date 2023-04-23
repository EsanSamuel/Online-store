import React, { useState, createContext } from "react";
import { product } from "../utils/constants";

export const CartContext = createContext()

const getProducts = () => {
    let cart = {}
    for (let i = 1; i < product.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getProducts())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        
    }

    const removeCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeCart }}>
            {children}
        </CartContext.Provider>
    )

}