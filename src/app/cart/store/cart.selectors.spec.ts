import * as CartSelectors from './cart.selectors';
import { CartState } from './cart.state';
import { Product } from '../Product';

describe('CartSelectors', () => {
    const products: Product[] = [{
        id: 1,
        name: "Air Jordan 1",
        image: "",
        price: 200,
        description: "The Air Jordan 1 (I) was designed by Peter Moore and marked a new era in basketball shoewear design. There has been multiple fakes of this shoe and also other shoe brands made models where you could see lots of similarities with Air Jordan 1. The Air Jordan 1 – Black / Varsity Red model was banned by the NBA back in 1985 due to NBA color rules and this actually helped to create more publicity and interest for the shoes. Who knows, it might have been a marketing trick from Nike.",
        sizes: ["8", "9", "9.5", "10", "10.5"],
        quantity: 1
    },
    {
        id: 2,
        name: "Air Jordan 2",
        image: "",
        price: 200,
        description: "No black leather in Italy? The Air Jordan II was designed by Bruce Kilgore and just as its predecessor (Air Jordan 1 (I)) it showed a great innovative design. The low-tops were very stylish, produced in Italy and were far from the ordinary basketball shoe.",
        sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11"],
        quantity: 1
    }];
    const mockState: CartState = { products };

    beforeEach(() => { });

    it('should return the current products in the cart', () => {
        expect(CartSelectors.selectProductsInCart.projector(mockState)).toBe(products);
    });

    it('should return the total price for all the current products in the cart', () => {
        expect(CartSelectors.selectProductsTotalPrice.projector(mockState)).toEqual(400);
    });


});