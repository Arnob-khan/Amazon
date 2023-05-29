
import { getLocalStorage } from "../utilities/fakedb";

export const productAndCartLoader=async()=>{
   const productsData = await fetch('products.json');
   const products=await productsData.json()

   const storedCart= getLocalStorage()
   const initialCart=[]
   for(const id in storedCart){
       const addProduct = products.find(product=> id===product.id)
       if(addProduct){
            addProduct.quantity=storedCart[id]
            initialCart.push(addProduct);
       }
   }
   return {products,initialCart}
}