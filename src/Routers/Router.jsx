import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Destination from '../Pages/Destination/Destination'
import News from '../Pages/News/News'
import Blog from '../Pages/Blog/Blog'
import Contact from '../Pages/Contact/Contact'
import Login from '../Pages/Login/Login'
import Carousel from '../Components/Carousel/Carousel'
import Register from '../Pages/Register/Register'
import Profile from '../Pages/Profile/Profile'
import PrivateRoute from './PrivateRoute'
import Rooms from '../Pages/Rooms/Rooms'
import Modal from '../Components/Modal/Modal'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
       
        children: [
           
            {
                path: "/news",
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: "/destination",
                element: <Destination></Destination>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/rooms",
                loader : () => {return fetch (`https://bd-travel-server-silk.vercel.app/rooms`)},
                element: <Rooms></Rooms>
            },
            {
                path : "/rooms/:id",
                element : <Modal></Modal>,
                
            }
        ]
    }
])

