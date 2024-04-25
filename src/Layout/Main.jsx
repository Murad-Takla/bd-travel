import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import { Outlet } from 'react-router-dom';
import Carousel from '../Components/Carousel/Carousel';

const Main = () => {
    return (
        <div className=''>
            <HomePage></HomePage>
            <div className='mt-2'>
                <Outlet>
                 
                </Outlet>
            </div>

        </div>
    );
};

export default Main;