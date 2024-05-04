import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import { Outlet } from 'react-router-dom';
import Carousel from '../Components/Carousel/Carousel';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Destination from '../Pages/Destination/Destination';

const Main = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className='mt-2 '>
              
                <div>
                    <Outlet>

                    </Outlet>
                </div>
            </div>
           
        </div>
    );
};

export default Main;