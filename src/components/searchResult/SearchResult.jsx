import { useParams } from "react-router-dom"
import data from '../JSONOBJECT/data.json'
import './searchResult.css'
import { Link } from "react-router-dom"
import NavBar from "../utils/NavBar"
import {CartContext} from '../../main.jsx'
import { useContext } from 'react'



export default function SearchResult(){
    // const params=useParams()
    // console.log(params)
    const cart=useContext(CartContext)
    console.log(cart)
    const {searchQuery}=useParams()
  

    function getFilterData(){
       
        const productType=data.filter((type)=>{
            if(type.products.includes(searchQuery)){
                return true;
            }
           
        })
//This is need good algorithm to search pattarns ...       
        console.log(productType)
      if(productType.length!=0){ 
       return productType[0].data.filter((product)=>{
        
            if(product.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())){
                return true
            }
        })
    }
   
    return []
      


    }
                
 console.log(getFilterData())  
       
            
    

    return(
        <>
        <NavBar/>
       <div className='result-container'>
         Search Result
        <div className='card-container'>
           
           {getFilterData().map((prop)=>{
            return <div>
             <div className="inner-card-container">
                        <div className="img">
                            <img src={prop.img}></img>
                        </div>
                        <div className="card-description">
                               <p>{prop.name}</p>
                               <button onClick={()=>{
                                cart.setCart((prev)=>{
                                    return[...prev,prop]
                                })
                               
                               }}>Add To Cart</button>
                               <button>Buy</button>
                                
                            
                        </div>
                       
               
                   </div>
              
                </div>
           })}
            

        </div>

       </div>
       </>
    )
}