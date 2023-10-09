import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './Root/PrivateRoute';
import Packages from './Pages/Packages/Packages';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/services.json')
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: ()=>fetch(`/services.json`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/package",
        element: <PrivateRoute><Packages></Packages></PrivateRoute>,
        loader: ()=>fetch(`/details.json`)
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
