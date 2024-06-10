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
            const cartProductElements = screen.getAllByTestId(/^item-/);
            console.log(cartProductElements);
            expect(cartProductElements.length).toBeGreaterThan(0);
        });
    });

    it('should handle quantity change and removal in the cart', async () => {
        render(<MockProduct />);
        const addButton = await screen.findByRole('button', { name: /Add to Bag/i });
        fireEvent.click(addButton);

        // Navigate to cart to check if the product is added
        render(<MockCart />);
        await waitFor(() => {
            const cartProductElement = screen.getByTestId('item-0');
            expect(cartProductElement).toBeInTheDocument();
        });

        const increaseButton = screen.getByRole('button', { name: '+' });
        const decreaseButton = screen.getByRole('button', { name: '-' });
        const removeButton = screen.getByRole('button', { name: /Remove/i });
        const quantityDisplay = screen.getByText('1');

        // Increase quantity
        fireEvent.click(increaseButton);
        await waitFor(() => {
            expect(quantityDisplay.textContent).toBe('2');
        });

        // Decrease quantity
        fireEvent.click(decreaseButton);
        await waitFor(() => {
            expect(quantityDisplay.textContent).toBe('1');
        });

        // Remove product
        const cartProductElement = screen.getByTestId('item-0');
        expect(cartProductElement).toBeInTheDocument();
        fireEvent.click(removeButton);
        await waitFor(() => {
            expect(cartProductElement).not.toBeInTheDocument();
        });
    });
});
