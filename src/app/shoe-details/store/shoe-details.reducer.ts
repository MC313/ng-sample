import { ShoeDetailsActions, ShoeDetailsActionTypes } from './shoe-details.actions';
import { ShoeDetailsState } from './shoe-details.state';

const initialState: ShoeDetailsState = {
    currentShoeId: null,
    detailsOverlayState: 'HIDDEN',
}

export function reducer(state: ShoeDetailsState = initialState, action: ShoeDetailsActions): ShoeDetailsState {
    switch (action.type) {
        case ShoeDetailsActionTypes.SHOW_SHOE_DETAILS_OVERLAY:
            return {
                ...state,
                currentShoeId: action.payload,
                detailsOverlayState: 'SHOWING'
            };

        case ShoeDetailsActionTypes.HIDE_SHOE_DETAILS_OVERLAY:
            return {
                ...state,
                currentShoeId: null,
                detailsOverlayState: 'HIDDEN'
            };

        default: {
            return state;
        }
    }
}
