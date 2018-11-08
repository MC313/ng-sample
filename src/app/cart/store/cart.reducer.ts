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
            const updateProductsList: Product[] =
                state.products.filter(product => product.id !== action.payload.id);
            return {
                ...state,
                products: updateProductsList
            };

        default: {
            return state;
        }
    }
}
