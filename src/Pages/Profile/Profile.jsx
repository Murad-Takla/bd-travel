import React, { useContext } from 'react';
import { MyContext } from '../../Context/Context';

const Profile = () => {

    const { user } = useContext(MyContext)
    console.log(user)
    return (
        <div className='container mx-auto'>
            <h2>This is Profile Page
            </h2>
            <article className="h-[500px] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                <img
                    src={user?.photoURL}
                    alt="University of Southern California"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">{user?.displayName}</h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    {user?.email}
                </div>
            </article>


          
        </div>
    );
};

export default Profile;