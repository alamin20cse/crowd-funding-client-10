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
import MyCampaign from './Component/MyCampaign.jsx';
import MyDonations from './Component/MyDonations.jsx';
import UpdateCampaigns from './Component/UpdateCampaigns.jsx';
import PrivateRoute from './Component/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain></HomeMain>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://crowd-funding-10-server.vercel.app/campign'),

      },
      {
        path:'/addnewcampaign',
        element:<PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
      },
      {
        path:'/allcampaign',
        element:<AllCampaign></AllCampaign>,
        loader:()=>fetch('https://crowd-funding-10-server.vercel.app/campign'),
       
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
        loader:()=>fetch('https://crowd-funding-10-server.vercel.app/campign'),
      },
      {
        path:'/mycampaign',
        element:<PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
        loader:()=>fetch('https://crowd-funding-10-server.vercel.app/campign'),
      },
      {
        path:'/mydonations',
        element:<PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
        loader:()=>fetch(`https://crowd-funding-10-server.vercel.app/donatedcollection`)
      },
      {
        path: '/updatecampaigns/:id',
        element: <UpdateCampaigns />,
        loader: ({ params }) =>
          fetch(`https://crowd-funding-10-server.vercel.app/campign/${params.id}`)
      }
      
     
     



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
