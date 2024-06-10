import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Footer from './footer';
import Header from './header';


const Jeweleries = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery', { mode: "cors" })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch items");
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
  
    return { data, error, loading };
}

const NewJewelery = () => {
    const { data: items, error: itemError, loading: itemLoading } = Jeweleries();

    return (
        <div className='flex flex-col min-h-screens'> 
            <Header />
            <section className="flex-1 flex justify-center items-center">
                <div className='container relative flex justify-center'>
                    <aside id="default-sidebar" className="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 pr-8" aria-label="Sidebar">
                        <div className="h-full px-3 py-4 overflow-y-auto">
                            <p className='font-bold text-lg pb-8'>Categories</p>
                            <ul className="space-y-2 font-medium">
                                <li data-testid={`Electronics`}>
                                    <Link to="/electronics" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <span className="ms-3">Electronics</span>
                                    </Link>
                                </li>
                                <li data-testid={`Jewelery`}>
                                    <Link to="/jewelery" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">Jewelery</span>
                                    </Link>
                                </li>
                                <li data-testid={`MensClothing`}>
                                    <Link to="/menclothing" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">Men&lsquo;s Clothing</span>
                                    </Link>
                                </li>
                                <li data-testid={`Womens-Clothing`}>
                                    <Link to="/womenclothing" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">Women&lsquo;s clothing</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    
                    <div className="p-4 border-l border-black ">
                         <h3 className='font-bold'>{items.length} Items</h3>
                         <div className="p-4 grid grid-cols-3 gap-4">
                            
                            {itemLoading && <p>Loading items...</p>}
                            {itemError && <p>Error fetching items: {itemError.message}</p>}
                            {items.map((item, index) => (
                                <div className='jewelery-items' data-testid={`jewelery-item-${index}`} key={index}>
                                    <Link to={`/products/${item.id}`} key={index} className="flex flex-col gap-5 justify-end items-start">
                                        <img src={item.image} alt={item.title} className="w-32 h-auto object-cover rounded-lg" />
                                        <p>{item.title}</p>
                                        <p className='font-bold'>${item.price}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>  
            </section>  
            <section>
                <div>
                    <Footer />
                </div>
                
            </section>      
        </div>
    );
}

export default NewJewelery;
