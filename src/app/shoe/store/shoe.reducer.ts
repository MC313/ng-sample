import { ShoeActions, ShoeActionTypes } from './shoe.actions';
import { ShoeState } from './shoe.state';
import { Shoe } from '../Shoe';

const initialState: ShoeState = {
    shoes: []
}

export function reducer(state: ShoeState = initialState, action: ShoeActions): ShoeState {
    switch (action.type) {
        case ShoeActionTypes.LOAD_SHOES_SUCCESS:
            return {
                ...state,
                shoes: action.payload
            }

        default: {
            return state;
        }
    }
}
