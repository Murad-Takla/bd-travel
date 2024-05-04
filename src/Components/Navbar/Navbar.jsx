import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import { MyContext } from '../../Context/Context';
import { FaUserCircle } from "react-icons/fa";
import Logo from '../../logo';


const Navbar = () => {
    const { user, LogOut } = useContext(MyContext)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const logoutHandler = () => {

        LogOut().then(() => { }).catch(() => { })
    }
    // console.log(user)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav className="p-2 text-black border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between container mx-auto ">
                    <div className='flex align-center justify-center items-center'>
                        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                            <div className='w-[50px] '>
                                <Logo></Logo>
                            </div>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Travel Guru
                            </span>

                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className={`hidden md: ${isMobileMenuOpen ? 'md:hidden' : ''}`}>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className=" w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                        >
                            <svg
                                className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="sr-only">Toggle mobile menu</span>
                        </button>
                    </div>
                    <div className={`font-bold md:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex  flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                            <li>
                                <Link to='/news' className=" py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 md:hover:bg-transparent">
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link to="/destination" className=" py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 md:hover:bg-transparent">
                                    Destination
                                </Link>
                            </li>
                            <li>
                                <Link to='/blog' className=" py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 md:hover:bg-transparent">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' className=" py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 md:hover:bg-transparent">
                                    Contact
                                </Link>
                            </li>

                            <li >
                                <Link to='/login' className=" py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 md:hover:bg-transparent">
                                    Login
                                </Link>
                            </li>


                            <li>
                                <Link
                                    to='/register'

                                    className=" py-2 px-3 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 md:hover:bg-transparent">
                                    Sign Up
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {
                        user?.uid ? <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><Link to='/profile'>Profile</Link></li>
                                    <li><Link to='/login' onClick={logoutHandler}>Logout</Link></li>

                                </ul>
                            </div>

                        </> : <div className='sm:invisible lg:visible'>
                            <FaUserCircle />
                        </div>
                    }

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                    </div>
                </div>
            </nav>
            {/* <Carousel></Carousel> */}
        </div>
    );
};

export default Navbar;
