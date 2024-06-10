import { Button } from '@nextui-org/button';
import { Link } from 'react-router-dom'; 

export default function Header() {
    return (
      <>
            <div className='h-60 grid grid-rows grid-cols-3 pt-6 bg-gradient-to-b from-blue-900 to-pink-300 border-b border-black '>
                <div className='flex justify-items-start mx-5'>
                    <Link to="/" className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Quadra</Link>
                </div>

                <div className='flex justify-stretch'>
                    <form className="w-full">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products..." required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>
                <div>
                    <nav className='flex justify-end mx-5'>
                        <ul className='flex gap-4'>
                            <Button color='primary' variant='ghost' className='text-white'>
                                <Link to="/">Home</Link>
                            </Button>
                            <Button color='primary' variant='ghost' className='text-white'>
                                <Link to="/shop">Shop</Link>
                            </Button>
                            <Button color='primary' variant='ghost' className='text-white'>
                                <Link to="/cart">Cart</Link>
                            </Button>
                        </ul>
                    </nav> 
                </div>
            </div>
      </>
    );
}