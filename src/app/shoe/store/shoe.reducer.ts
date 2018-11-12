import { ShoeActions, ShoeActionTypes } from './shoe.actions';
import { ShoeState } from './shoe.state';
import { Shoe } from '../Shoe';

const initialShoe: Shoe = {
    id: 0,
    name: 'Air Jordan 1',
    description: 'initial shoe',
    sizes: ['10.5'],
    price: 100.00
};

const initialState: ShoeState = {
    shoes: [initialShoe],
    selectedShoe: null
}

export function reducer(state: ShoeState = initialState, action: ShoeActions): ShoeState {
    switch (action.type) {
        case ShoeActionTypes.LOAD_SHOES_SUCCESS:
            return {
                ...state,
                shoes: action.payload
            }

        case ShoeActionTypes.SHOW_SHOE_DETAILS:
            return {
                ...state,
                selectedShoe: action.payload
            };

        case ShoeActionTypes.HIDE_SHOE_DETAILS:
            return {
                ...state,
                selectedShoe: null
            };

        default: {
            return state;
        }
    }
}
