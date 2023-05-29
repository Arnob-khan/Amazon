import React from 'react';
import './Cart.css'

const Cart = ({cart,clearCart,children}) => {
    
     let total =0;
     let totalShipping =0
     let tax=0
     let grandTotal=0;
     let quantity=0;
     for(const product of cart){
        quantity=quantity+product.quantity
        total=total+product.price*product.quantity
        totalShipping=totalShipping+product.shipping
        tax=parseFloat(((total)*0.1).toFixed(2))
        grandTotal=total+totalShipping+tax
        
     } 

     

    return (
        <div className='cart'>
            <h2 className='cart-title'>Order Summary</h2>

            <div className='cart-info'>
                 <p>Selected item: {quantity}</p>
                 <p>Total Price: {total}</p>
                 <p>Total Shipping Charge:{totalShipping}</p>
                 <p>Tax: {tax}</p>
                 <h3>Grand Total: {grandTotal}</h3>
                 {/* <button onClick={clearCart}>Clear Cart</button> */}
                 {children}

            </div>
           
        </div>
    );
};

export default Cart;