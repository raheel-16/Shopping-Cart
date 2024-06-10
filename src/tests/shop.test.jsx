import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../routes/footer";
import Header from "../routes/header";
import Shop from "../routes/shop";
import Cart from "../routes/cart";
import ProductDetail from "../routes/products";
import NewElectronics from "../routes/electronics";
import NewJewelery from "../routes/jewelery";
import NewMensClothing from "../routes/mensclothing";
import NewWomensClothing from "../routes/womensclothing";


const MockElectronics = () => {
    return (
        <BrowserRouter>
            <NewElectronics />
        </BrowserRouter>
    )
}

const MockJewelery = () => {
    return (
        <BrowserRouter>
            <NewJewelery />
        </BrowserRouter>
    )
}

const MockMensClothing = () => {
    return (
        <BrowserRouter>
            <NewMensClothing />
        </BrowserRouter>
    )
}

const MockWomensClothing = () => {
    return (
        <BrowserRouter>
            <NewWomensClothing />
        </BrowserRouter>
    )
}

const MockFooter = () => {
    return (
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    )
}

const MockHeader = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}

const MockShop = () => {
    return (
        <BrowserRouter>
            <Shop />
        </BrowserRouter>
    )
}

const MockCart = () => {
    return (
        <BrowserRouter>
            <Cart />
        </BrowserRouter>
    )
}

const MockProduct = () => {
    return (
        <BrowserRouter>
            <ProductDetail />
        </BrowserRouter>
    )
}



describe('Shop Component', () => {
    it('Footer should render in the document', () => {
        render(<MockFooter />)
    })

    it('Header should render in the document', () => {
        render(<MockHeader />)
    })

    it('Load the Home Page', () => {
        render(<MockHeader />)
        const HomeButton = screen.getByRole("button", {name: /Home/i})
        fireEvent.click(HomeButton)
        expect(render(<MockHeader />))
    })

    it('Load the Shop Page', () => {
        render(<MockShop />)
        const HomeButton = screen.getByRole("button", {name: /Shop/i})
        fireEvent.click(HomeButton)
        expect(render(<MockShop />))
    })

    it('Load the Cart Page', () => {
        render(<MockCart />)
        const HomeButton = screen.getByRole("button", {name: /Cart/i})
        fireEvent.click(HomeButton)
        expect(render(<MockCart />))
    })

    it('Load the Electronics Page', () => {
        render(<MockShop />)
        const ElectronicsButton = screen.getByTestId(/Electronics/i)
        fireEvent.click(ElectronicsButton)
        expect(render(<MockElectronics />))
    })

    it('Load the Jewelery Page', () => {
        render(<MockShop />)
        const JeweleryButton = screen.getByTestId(/Jewelery/i)
        fireEvent.click(JeweleryButton)
        expect(render(<MockJewelery />))
    })

    it('Load the Mens Clothing Page', () => {
        render(<MockShop />)
        const MensClothingButton = screen.getByTestId(/Mens-Clothing/i)
        fireEvent.click(MensClothingButton)
        expect(render(<MockMensClothing />))
    })

    it('Load the Womens Clothing Page', () => {
        render(<MockShop />)
        const WomensClothingButton = screen.getByTestId(/Womens-Clothing/i)
        fireEvent.click(WomensClothingButton)
        expect(render(<MockWomensClothing />))
    })

    it('should render item', async () => {
        render(<MockShop />)
        const itemElements = await screen.findAllByTestId("item-0")
        waitFor(() => expect(itemElements).toBeInTheDocument())
    });

    it('Render all 20 items', async () => {
        render(<MockShop />)
        const itemElements = await screen.findAllByTestId(/item-/i);
        expect(itemElements.length).toBe(20)
    });

    it('renders all items', async () => {
        render(<MockShop />)
        const itemElements = await screen.findAllByTestId(/item-/i);
        waitFor(() => expect(itemElements).toBeInTheDocument())
    });

    it('Render the Item Page upon click', async () => {
        render(<MockShop />);
        const itemElement = await screen.findByTestId("item-0");
        fireEvent.click(itemElement);
        await waitFor(() => expect(render(<MockProduct />)));
    });
})