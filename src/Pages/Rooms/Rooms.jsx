import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllRooms from '../../Components/AllRooms/AllRooms';

const Rooms = () => {
    const rooms = useLoaderData()
    // console.log(rooms)
    return (
        <div  className='container mx-auto'>
            <p className='mb-5 font-extrabold text-2xl'>Stay in Cox’s Bazar</p>      
          <div>
            {
                rooms.map(rm => <AllRooms key={rm.id} rm={rm}></AllRooms>)
            }
        </div>

        </div>

    );
};

export default Rooms;