import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Footer from "../routes/footer";
import Header from "../routes/header";
import Shop from "../routes/shop";
import Cart from "../routes/cart";



const MockApp = () => {
    return (
        <BrowserRouter>
        <App />
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

describe('App Component', () => {

    it('renders correct heading', () => {
        render(<MockApp />);
        expect(screen.getByText(/Tomorrows Solutions, Today/i)).toBeInTheDocument();
    });

    it('render image', () => {
        render(<MockApp />)
        const image = screen.getByAltText('img')
        expect(image).toBeInTheDocument()
    })

    it('paragraph to render', () => {
        render(<MockApp />)
        const paragraphDiv = screen.getAllByTestId("company-info-id")
        expect(paragraphDiv).not.toBeNull()
    });

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
        expect(render(<MockApp />))
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
})