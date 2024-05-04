import React from 'react';
import toast from 'react-hot-toast';
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';

const AllRooms = (props) => {
    const { price, title, description, rating, photo, id } = props.rm
    const handler = (id) => {
        console.log(id)
    }
    const confirmation = () => {
        toast.success("Thanks for confirmation !")
    }
    return (
        <div className=' w-[600px] h-[300px] mb-10  transition duration-300 ease-in-out hover:scale-110'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure ><img className='h-[300px] w-[250px]' src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-gray-400 '>{description}</p>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <span className='text-yellow-500'><IoIosStar /></span>
                            <span className='flex gap-2 items-center font-semibold text-gray-400 '> ${rating}  /  <p className='text-black font-bold'>  5</p> </span>
                        </div>
                        <div className='flex '>
                            <span className='flex items-center font-semibold text-gray-400'> ${price} <p className='text-black font-bold'>/ night</p></span>
                        </div>

                    </div>
                    <div className="card-actions justify-end">
                        {/* <Link to={`/rooms/${id}`} >
                            <button
                                onClick={() => console.log(id)}
                                className="btn hover:btn-warning btn-primary">Watch</button></Link> */}

                        <button className="btn hover:btn-warning btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Watch</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box ">
                                <img className='w-[200px] h-[200px]  container mx-auto rounded' src={photo} alt="" />
                                <h3 className="font-bold text-lg">{title}</h3>
                                <p className="py-4">{description}</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button
                                            onClick={confirmation}
                                            className="btn">Confirm</button>
                                    </form>
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                       
                                        <button className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRooms;