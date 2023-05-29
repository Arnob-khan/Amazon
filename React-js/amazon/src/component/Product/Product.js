import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({handleAddToCart,product}) => {
    const {name,price,img,seller,ratings} =product
    return (
        <div className='product'>
           
            <img src={img} alt="" />
            <div className='product-info'>
                 <p className='product-name'>{name}</p>
                 <p className='product-price'>Price:${price}</p>
                 <p className='product-manufacturers'><small>Manufacturer:{seller}</small></p>
                 <p className='product-rattings'><small>Rattings:{ratings}</small></p>
            </div>

            <button className='btn-cart' onClick={()=>{handleAddToCart(product)}}>
                <p> Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            

        </div>
    );
};

export default Product;