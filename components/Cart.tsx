import { CartProvider } from "use-shopping-cart"
import getStripe from '../utils/getStripe'

export default function Cart({ children }) {
    return (
        <CartProvider mode="checkout-session" stripe={getStripe()} currency={"usd"}>
            {children}
        </CartProvider>
    );
}