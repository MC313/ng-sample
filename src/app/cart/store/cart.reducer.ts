import * as _ from 'lodash/fp';

import { CartActions, CartActionTypes } from '../store/cart.actions';
import { Product } from '../Product';
import { CartState } from './cart.state';

const initialState: CartState = {
    products: [],
};

export function reducer(state: CartState = initialState, action: CartActions): CartState {
    switch (action.type) {
        case CartActionTypes.LOAD_CART:
            return state;

        // move this action to the shoe reducer
        case CartActionTypes.ADD_PRODUCT:
            let product: Product;
            let products: Product[];
            const currentProductIndex: number = _.findIndex({ id: action.payload.id }, state.products);
            if (currentProductIndex !== -1) {
                // Create copy of the product's state
                products = [...state.products];
                // Update the current product with the new quantity
                product = { ...products[currentProductIndex], quantity: products[currentProductIndex].quantity += 1 };
                // Update product's state with updated product
                products[currentProductIndex] = product;
            }
            return {
                ...state,
                products: product ? [...products] : [...state.products, action.payload]
            };

        // change this to increment / decrement quantity (lodash/fp might be helpful with this)
        case CartActionTypes.UPDATE_PRODUCT:
            // Find product in cart match product info in payload
            // Replace product in cart with product info in payload 
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        case CartActionTypes.REMOVE_PRODUCT:
            const updatedProductsList: Product[] = _.reject(['id', action.payload.id], state.products);
            return {
                ...state,
                products: updatedProductsList
            };

        default: {
            return state;
        }
    }
}
