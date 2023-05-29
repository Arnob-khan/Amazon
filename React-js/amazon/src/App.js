
import './App.css'; 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './layouts/Main';
import Order from './component/Orders/Order';
import Inventory from './component/Inventory/Inventory';
import Shop from './component/Shop/Shop';
import { productAndCartLoader } from './loader/productAndCartLoader';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Shipping from './component/Shipping/Shipping';
import PrivateAuth from './component/routes/PrivateAuth';

function App() {
  const router =createBrowserRouter([
    {path:'/',
     element:<Main></Main>,
     children:[ {
      path:'/',
      loader:()=>fetch('products.json'),
      element: <Shop></Shop>
     },{
      path:'/orders',
      element: <Order></Order>,
      loader: productAndCartLoader
     },
     {
      path:'/shipping',
      element: <PrivateAuth><Shipping></Shipping></PrivateAuth>
     },
     {
      path:'/inventory',
      element: <Inventory></Inventory>
     },
     {
      path:'/shop',
      element:<Shop></Shop>,
      loader:()=>fetch('products.json')
     }
     ,{
      path:'/login',
      element:<Login></Login>,

     }
     ,{
      path:'/signup',
      element:<Signup></Signup>,

     }
    ]
    },
    
  ])
  return (

    <div  >
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
