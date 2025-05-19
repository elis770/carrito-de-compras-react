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
            return state.map((product) =>
                product.id === action.payload ? {...product, quantity: product.quantity + 1} : product
            );
        case "[Cart] Decrement Quantity":
            return state.map((product) =>
                product.id === action.payload ? {...product, quantity: product.quantity - 1} : product
            );
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
    const incrementQuatity = (id) => {
        const action = {
            type: "[Cart] Increment Quatity",
            payload: id,
        };
        dispatch(action);
    };
    const decrementQuatity = (id) => {
        const action = {
            type: "[Cart] Decrement Quatity",
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
                incrementQuatity,
                decrementQuatity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};