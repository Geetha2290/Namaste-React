import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Errors';
import RestaurantDetails from './components/RestaurantDetails'

const root = ReactDOM.createRoot(document.getElementById('container'));


const AppLayout = () => (
  <>
    <Header />
    <Outlet/>
    <Footer/>
  </>

)

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <Error />,
    children: [ 
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path:'/restaurantDetails/:id',
        element: <RestaurantDetails/>
      }
    ]
  }
])

root.render(<RouterProvider router={routes}/>)