import cartReducer, {addToCart, CartState} from "../store/reducers/CartSlice";

const initialState: CartState = {
    cartItems: [],
    totalPrice: 0,
    isLoading: false,
    error: '',
}

describe('Cart reducer', () => {
    test('should be add product to cart', () => {
        expect(cartReducer(initialState, addToCart({id: 4670008496752, amount: 1, price: 574})));
    })
})