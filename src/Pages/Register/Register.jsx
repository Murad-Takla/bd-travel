import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/Context';
import toast from 'react-hot-toast';
import Logo from '../../logo';

const Register = () => {

    const navigate = useNavigate()
    const { user ,createNewUser , updateUserProfile} = useContext(MyContext)

    const registerFormHandler = (e) => {
        e.preventDefault()
        const form = e.target

        const email = form.email.value 
        const name = form.name.value 
        const password = form.password.value
        const password_confirmation = form.password_confirmation.value 
        const photoURL = form.photoURL.value

        if(password !== password_confirmation) {
            return toast.error('Please enter same password !');
        }

        createNewUser(email , password)
        .then((res)=>{
            const profile = res.user 
            form.reset()
            updateUserProfileHandler(name ,  photoURL)
            toast.success("Your registration in success !")
            navigate('/login')
        }).catch( (e) => {
            console.log(e.message)
        })

    }
    const updateUserProfileHandler = (name , photoURL) => {
        const profile = {
            displayName : name,
            photoURL : photoURL
        }
        updateUserProfile(profile).then (()=>{}).catch((e)=>{console.log(e)})
    }
    
    return (
        <div>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                   <div className='container mx-auto  w-[230px]  h-[110] p-2'>
                    <Logo></Logo>
                   </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Create a new account
                    </h2>
                    <div>
                        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                            Or
                            <Link
                                to="/login"
                                className="font-medium ml-3 text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                            >
                                login to your account
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={registerFormHandler}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-5  text-gray-700"
                                >
                                    Name
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input

                                        name="name"
                                        placeholder="John Doe"
                                        type="text"
                                        required

                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg
                                            className="h-5 w-5 text-red-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-5  text-gray-700"
                                >
                                    Email address
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input

                                        name="email"
                                        placeholder="user@example.com"
                                        type="email"
                                        required
                                        defaultValue=""
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
          "
                                    />
                                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg
                                            className="h-5 w-5 text-red-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <label
                                  
                                    className="block text-sm font-medium leading-5  text-gray-700"
                                >
                                   PhotoURL
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input

                                        name="photoURL"
                                        type="text"
                                        required

                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
          "
                                    />
                                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg
                                            className="h-5 w-5 text-red-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input

                                        name="password"
                                        type="password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Confirm Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input

                                        name="password_confirmation"
                                        type="password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                    >
                                        Create account
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;