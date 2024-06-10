// Cart.js
import { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';


const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const handleRemove = (id) => {
        setCart(cart => cart.filter(product => product.id !== id))
    }

    const price = cart.reduce((total, product) => total + product.price * product.quantity, 0)

    const updateCart = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const increaseQuantity = (product) => {
        const updatedCart = cart.map(item => 
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updatedCart);
    };

    const decreaseQuantity = (product) => {
        const updatedCart = cart.map(item => 
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0);
        updateCart(updatedCart);
    };

    if (cart.length === 0) {
        return (
            <div className='flex flex-col h-screen'>
                <Header />
                <div className='flex-1 flex justify-center items-center'>
                    <p>Your cart is empty. <Link to="/">Go back to shop.</Link></p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <div className='flex-1 flex flex-col items-center'>
                <h2 className='text-3xl my-10'>Your Cart</h2>
                <div className='w-full max-w-5xl'>
                    {cart.map((product, index) => (
                        <div data-testid={`item-${index}`} key={index} className='flex justify-between items-center border-b py-4'>
                            <img src={product.image} alt={product.title} className='w-20 h-auto object-cover rounded-lg'/>
                            <div className='flex-1 mx-4'>
                                <h3 className='font-bold'>{product.title}</h3>
                                <p className='my-5'>${product.price}</p>
                            </div>
                            <div className='quantity-buttons space-x-5 flex'>
                                <button onClick={() => decreaseQuantity(product)}>-</button>
                                <span className='w-8 h-8 flex justify-center items-center border border-gray-300 rounded bg-white cursor-pointer'>{product.quantity}</span>
                                <button onClick={() => increaseQuantity(product)}>+</button>
                                <button onClick={() => handleRemove(product.id)}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                    </svg>
                                </button>
                            </div>
                            <div>

                            </div>
                        </div>
                    ))}
                    <div className='flex justify-end gap-2 font-bold '>
                        <span>Subtotal:</span>
                        <span>${price.toFixed(2)}</span>                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
