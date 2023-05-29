import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getLocalStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const products=useLoaderData();
    const [cart,setCart]=useState([])

    
    

    useEffect(()=>{
          
        const storedCart =getLocalStorage()
            const saveCart=[];
           for(const id in storedCart){

             const addedProduct =products.find(product=>id===product.id)
             if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity
                saveCart.push(addedProduct);
               
             }
           }
           setCart(saveCart);
           console.log(saveCart)

          
    },[products])

    const handleAddToCart=(selectedProduct)=>{
        //  const newCart =[...cart,selectedProduct]
        let newCart=[]
        const exits= cart.find(product=>product.id ===selectedProduct.id)
        if(!exits){
            selectedProduct.quantity=1
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest = cart.filter(product=>product.id!==selectedProduct.id)
            exits.quantity=exits.quantity+1
            newCart =[...rest,exits]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }


    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart()
        console.log("hello")
    }
    return (
        <div className='shop-container'>

            <div className="products-container">
                   {
                    products.map(product=><Product product={product} key={product.id} handleAddToCart ={handleAddToCart}></Product>)
                   }
            </div>



            <div className="cart-container">

                  <Cart  clearCart={clearCart} cart={cart} >

                  <Link to='/orders'>
                     <button>Review Order</button>
                    </Link>
                  </Cart>
            </div>
        </div>
    );
};

export default Shop;