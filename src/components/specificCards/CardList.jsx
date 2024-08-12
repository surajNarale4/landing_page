import { useParams } from "react-router-dom"
import data from '../JSONOBJECT/data.json'
import NavBar from "../utils/NavBar"
import '../cardRelatedCssGlobal/CardListType.css'
import Card from './Card.jsx'


export default function CardList(){
    // '/type/:type'<--
    const {type}=useParams() 
    const products=data.filter((product)=> product.type.trim() === type.trim() ? true : false)
   console.log(products)
    
    return(
        <>

      <NavBar/>

      <div className='container'>
            <div className='specificCards'>

              {products[0]?
              products[0].data.map((product)=>{
                     return <Card product={product}/>
              })
              :''
              }
              
     
            </div>

        </div> 

      
    
      

        </>
       
    )
}