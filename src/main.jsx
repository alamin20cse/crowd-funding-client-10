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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain></HomeMain>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/addnewcampaign',
        element:<AddNewCampaign></AddNewCampaign>
      }



    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
