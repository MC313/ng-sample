import { ShoeState } from "../shoe/store/shoe.state";
import { CartState } from "../cart/store/cart.state";
import { ShoeDetailsState } from "../shoe-details/store/shoe-details.state";

export interface AppState {
    cart: CartState,
    shoe: ShoeState,
    shoeDetails: ShoeDetailsState
}