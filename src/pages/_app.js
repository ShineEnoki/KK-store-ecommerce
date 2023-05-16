import '@/styles/globals.css';
import CartContextProvider from '../../contexts/CartContext';
import ProductContextProvider from '../../contexts/ProductContext';
import SidebarContextProvider from '../../contexts/SidebarContext';

export default function App({ Component, pageProps }) {
    return (
        <SidebarContextProvider >
            <ProductContextProvider >
                <CartContextProvider >
                    <Component {...pageProps} />
                </CartContextProvider>
            </ProductContextProvider>
        </SidebarContextProvider>
    )
}
