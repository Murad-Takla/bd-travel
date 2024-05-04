import React from 'react';
import './Carousel.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
//className=''
const Carousel = () => {
    return (
        <div className='container mx-auto mt-[480px] '>
            <div className="carousel ">
                <div className="carousel-text text-black">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl dark:text-black">Cox's Bazar</h1>
                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button type="button" className="text-black text-[16px] bg-[#F9A51A]  focus:ring-4 focus:outline-none focus:ring-[#1ccc31] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
                        Booking
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
                <div className="carousel-slides ">
                    <Link to='/' className="slide-link ">
                        <img src="https://i.postimg.cc/W34K1hX5/sundorbon.png" alt="Slide 1" className="slide-image" />
                        <span className="tooltip-text ">sundorbon</span>
                    </Link>
                    <Link to='/' className="slide-link">
                        <img src="https://i.postimg.cc/d1zzNJjn/Sajek.png" alt="Slide 2" className="slide-image" />
                        <span className="tooltip-text">Sajek</span>
                    </Link>
                    <Link to='/' className="slide-link">
                        <img src="https://i.postimg.cc/g075rGQd/Sreemongol.png" alt="Slide 3" className="slide-image" />
                        <span className="tooltip-text">Sreemangal</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
