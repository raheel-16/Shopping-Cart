import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../routes/footer";
import Header from "../routes/header";
import Cart from "../routes/cart";
import ProductDetail from "../routes/products";

const MockFooter = () => (
    <BrowserRouter>
        <Footer />
    </BrowserRouter>
);

const MockHeader = () => (
    <BrowserRouter>
        <Header />
    </BrowserRouter>
);

const MockCart = () => (
    <BrowserRouter>
        <Cart />
    </BrowserRouter>
);

const MockProduct = () => (
    <BrowserRouter>
        <ProductDetail />
    </BrowserRouter>
);

describe('Product Component', () => {
    it('Footer should render in the document', () => {
        render(<MockFooter />);
    });

    it('Header should render in the document', () => {
        render(<MockHeader />);
    });

    it('should render product item', async () => {
        render(<MockProduct />);
        await waitFor(() => {
            const productElements = screen.getAllByTestId("product-item");
            expect(productElements).toHaveLength(1);
        });
    });

    it('should add product to cart and render in the cart', async () => {
        render(<MockProduct />);
        const addButton = await screen.findByRole('button', { name: /Add to Bag/i });
        fireEvent.click(addButton);

        // Navigate to cart to check if the product is added
        render(<MockCart />);
        await waitFor(() => {
            const cartProductElements = screen.getAllByTestId('cart-product');
            expect(cartProductElements.length).toBeGreaterThan(0);
        });
    });
});
