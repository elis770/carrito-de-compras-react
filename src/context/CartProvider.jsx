import {useReducer } from "react";
import {CartContext} from "./CartContext";

const inicialState = [];

const cartReducer = (state = inicialState, action = {}) => {
    switch (action.type) {
        case "[Cart] Add Product":
            return [...state, action.payload];
        case "[Cart] Remove Product":
            return state.filter((product) => product.id !== action.payload);
        case "[Cart] Increment Quantity":
            return state.map(product => {
                    const cant = product.quantity + 1
                    if (product.id === action.payload) return {...product, quantity: cant}
                    return product
                });
        case "[Cart] Decrement Quantity":
           return state.map(product => {
                    const cant = product.quantity - 1
                    if (product.id === action.payload && product.quantity > 1) return {...product, quantity: cant}
                    return product
                });
        default:
            return state;
    }
};

export const CartProvider = ({children}) => {
    const [shoppingList, dispatch] = useReducer(cartReducer, inicialState);

    const addProduct = (product) => {
        product.quantity = 1;
        const action = {
            type: "[Cart] Add Product",
            payload: product,
        };
        dispatch(action);
    };
    const removeProduct = (id) => {
        const action = {
            type: "[Cart] Remove Product",
            payload: id,
        };
        dispatch(action);
    };
    const incrementQuantity = (id) => {
        const action = {
            type: "[Cart] Increment Quantity",
            payload: id,
        };
        dispatch(action);
    };
    const decrementQuantity = (id) => {
        const action = {
            type: "[Cart] Decrement Quantity",
            payload: id,
        };
        dispatch(action);
    };

    return (
        <CartContext.Provider
            value={{
                shoppingList,
                addProduct,
                removeProduct,
                incrementQuantity,
                decrementQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};