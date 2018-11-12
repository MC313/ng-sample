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
        // and figure out how to prevent adding duplicates
        case CartActionTypes.ADD_PRODUCT:
            let product: Product;
            let products: Product[];
            let currentProduct: Product;
            const productsGroupedById = _.groupBy('id', state.products)
            const productsObjects = _.mapValues((productArray) => _.head(productArray), productsGroupedById);
            currentProduct = productsObjects[action.payload.id];
            if (currentProduct) {
                products = _.reject(['id', action.payload.id], state.products);
                product = { ...currentProduct, quantity: currentProduct.quantity += 1 };
                return {
                    ...state,
                    products: [...products, product]
                };
            }
            return {
                ...state,
                products: [...state.products, action.payload]
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
