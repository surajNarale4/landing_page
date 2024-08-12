import '../cardRelatedCssGlobal/card.css'
import {CartContext} from '../../main.jsx'
import { useContext } from 'react'




export default function Card({product}){
   
   const cart=useContext(CartContext);

   function addOnCart(){
         cart.setCart((prev)=>{
            
          
            return [...prev,product]

         })
   }



    return (
    
         <div className='specific-card-container'>
            <div className='image-container'>
                <img src={product.img}></img>
            </div>

            <div className='card-description'>
                {product.name}
            </div>

            <div className='card-description card-product-prize'>
                {product.prize}
                <button onClick={addOnCart}>Add To Cart</button>
         

            </div>

         
               

        </div>
     
      
       
    )
}