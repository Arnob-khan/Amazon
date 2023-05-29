import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const {products,initialCart} =useLoaderData();
    const [cart,setCart]=useState(initialCart)

    const handleRemoveBtn=(id)=>{
        
        const remaining =cart.filter(product=>product.id!==id);
            setCart(remaining)

            
            removeFromDb(id)
        
    }

    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart()
        console.log("hello")
    }
    
    return (
        <div className='shop-container'> 

            <div className='product-container'>
                {
                    cart.map(product=><ReviewItem product={product} handleRemoveBtn={handleRemoveBtn} key={product.id}></ReviewItem>)
                }
                {
                    cart.length=== 0 && <h2>No items for review.Please shop</h2>
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/shipping'>
                       
                        <button>Procesed shipping</button>
                        
                    </Link>
                </Cart>
            </div>

            
            
        </div>
    );
};

export default Order;