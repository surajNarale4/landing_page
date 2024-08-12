import { useContext } from "react";
import {CartContext} from '../../main.jsx'
import '../cardRelatedCssGlobal/card.css'
export default function Cart(){

    const cart=useContext(CartContext)
    
    console.log(cart)
    
    return(
        <div className="container">
        <h1>Shopping</h1>
        <hr></hr>
            <div className="cart-body flex direction-column">

                    {cart.cart.map((product)=>
                    <div className="cart-card flex gap justify-equally">
                        <div style={{objectFit:'fill'}}>
                            <img src={product.img}></img>
                        </div>
                        <div style={{fontSize:'20px',marginRight:'20px',marginTop:'20px',fontWeight:'bolder',overflow:'hidden'}}>
                           <div> {product.name}... </div>
                           <div>  <button style={{height:'50px',width:'100px',margin:'20px'}}>Buy</button>  </div>
                           
                        </div>
                        <div>
                            <h4>{product.prize}</h4>
                        </div>
                       
                    </div>
                 
                    )}
                
            </div>


        </div>
    )
    
}