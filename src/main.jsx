import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContextPro from './Components/ContextPro.jsx';
import Login from './Components/Login.jsx'
import Singup from './Components/Singup.jsx'
import ManageService from './Components/ManageService.jsx'
import AllService from './Components/AllService.jsx'
import Book from './Components/Book.jsx'
import AddService from './Components/AddService.jsx'
import DoService from './Components/DoService.jsx'
import Details from './Components/Details.jsx'
import Buy from './Components/Buy.jsx'
import ManageServiceCardMap from './Components/ManageServiceCardMap.jsx'
import Update from './Components/Update.jsx'
import PrivateRouter from './Components/PrivateRoute.jsx'
import Error from './Components/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<Singup></Singup>
    },
    {
      path:'/manageservices',
      element:<PrivateRouter>
        <ManageServiceCardMap></ManageServiceCardMap>
      </PrivateRouter>
      
    },
    {
      path:'/allservices',
      element:<PrivateRouter>
<AllService></AllService>
      </PrivateRouter>
      ,
    },
    {
      path:'/bookedservice',
      element:<PrivateRouter>
 <Book></Book>
      </PrivateRouter>
     
    },
    {
      path:'/addservice',
      element:<PrivateRouter>
 <AddService></AddService>
      </PrivateRouter>
     
    },
    {
      path:'/doservice',
      element:<PrivateRouter>
  <DoService></DoService>
      </PrivateRouter>
    
    },
    {
      path:'/details',
      element:<Details></Details>
    },
    {
      path:'/buy',
      element:<Buy></Buy>
    },
    {
      path:'/updateHome/:id',
      element:<Update></Update>,
      loader:({params})=> fetch(`http://localhost:5000/updateHome/${params.id}`)
    }

  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextPro>

    <RouterProvider router={router} />

    </ContextPro>
  </StrictMode>,
)
