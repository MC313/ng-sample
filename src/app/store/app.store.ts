import { ShoeState } from "../shoe/store/shoe.state";
import { CartState } from "../cart/store/cart.state";

export interface AppState {
    shoe: ShoeState,
    cart: CartState
}