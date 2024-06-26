import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routers/Router'
import toast, { Toaster } from 'react-hot-toast';

function App() {


  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
    </div>
  )
}

export default App
