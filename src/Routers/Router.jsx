import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Destination from '../Pages/Destination/Destination'
import News from '../Pages/News/News'
import Blog from '../Pages/Blog/Blog'
import Contact from '../Pages/Contact/Contact'
import Login from '../Pages/Login/Login'
import Carousel from '../Components/Carousel/Carousel'
import Register from '../Pages/Register/Register'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
       
        children: [
           
            {
                path: "/news",
                element: <News></News>
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
        ]
    }
])

