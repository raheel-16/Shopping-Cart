const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800  w-full">
            <div className="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between">
                <span className="text-base text-gray-600 sm:text-center dark:text-gray-400">© 2024. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-4 text-base font-medium text-gray-600 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="" className="hover:underline me-6">About</a>
                    </li>
                    <li>
                        <a href="" className="hover:underline me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="" className="hover:underline me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
