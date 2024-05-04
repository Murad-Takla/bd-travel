import React from 'react';
import BookingForm from '../../Components/BookingForm/BookingForm';

import Logo from '../../logo';

const Destination = () => {
    return (
        <div className='container mx-auto lg:grid grid-cols-2  p-6'>
            <div className='flex flex-col  justify-center p-6'>
                <div>
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl dark:text-black ">Cox's Bazar</h1>
                    <p className='text-gray-400'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </div>
            </div>
            <div>
                <BookingForm></BookingForm>
            </div>
            
        </div>
    );
};

export default Destination;