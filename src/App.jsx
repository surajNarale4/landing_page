
import './App.css'
import {useContext,useState,createContext} from'react'
import {CardTypeContext} from './main.jsx'
import CardListType from './components/CardListType.jsx'
import NavBar from './components/utils/NavBar.jsx'




export const CartContext= createContext('')

function App() {
  
  const cardTypes=useContext(CardTypeContext)



 

  return (
    <div className=''>
      

       <NavBar/>

       <h1>Sections</h1>
  
       <CardListType cardTypes={cardTypes}/>
     
    </div>
    
    
 
  )
}

export default App
