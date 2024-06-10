import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Button } from '@nextui-org/button';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                return response.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                setError('Failed to fetch product. Please try again later.');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading product...</p>; 
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Product added to cart:', product);
    };

    return (
        <div className='flex flex-col h-screen'> 
            <section>
                <Header /> 
            </section>

            <div data-testid={`product-item`} className="flex-1 flex justify-center items-center gap-10">
                <img src={product.image} alt={product.title} className="w-48 h-auto object-cover rounded-lg"/>
                <div className='m-10' style={{ width: '50%' }}>
                    <div className='flex flex-col justify-between'>
                        <h2 className='font-bold my-10 text-3xl'>{product.title}</h2>
                        <p className='font-bold my-5 text-xl'>Price: ${product.price}</p>
                        <div>
                            <p className='my-5 overflow-hidden'>{product.description}</p>
                        </div>
                    </div>
                    <Button onClick={addToCart} className='px-10'>Add to Bag</Button>
                </div>
            </div>
            <section>
                <Footer />
            </section>
        </div>
    );
};

export default ProductDetail;
