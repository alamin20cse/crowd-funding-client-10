import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeMain from './Component/HomeMain.jsx';
import Home from './Component/Home.jsx';
import AddNewCampaign from './Component/AddNewCampaign.jsx';
import AllCampaign from './Component/AllCampaign.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import ErrorPage from './Component/ErrorPage.jsx';
import AuthProvider from './Component/AuthProvider.jsx';
import Details from './Component/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain></HomeMain>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:4000/campign'),

      },
      {
        path:'/addnewcampaign',
        element:<AddNewCampaign></AddNewCampaign>
      },
      {
        path:'/allcampaign',
        element:<AllCampaign></AllCampaign>,
        loader:()=>fetch('http://localhost:4000/campign'),
       
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:"/details/:_id",
        element: <Details />,
        loader:()=>fetch('http://localhost:4000/campign'),
      },
     
     



    ]
  },

  {
    path:'*',
    element:<ErrorPage></ErrorPage>
}
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
