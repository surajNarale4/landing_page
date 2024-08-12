import './utils.css'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function NavBar(){

    const [inputValue,setInputValue]=useState('/')
    const navigate=useNavigate()

    function navigation(){
        navigate(`/search/${inputValue}`)
    }
    return(
        <div className='NavBar'>
            <Link to='/cart'>Cart</Link>

            <div className='search'>
                <input type='text' onChange={(e)=>{setInputValue(e.target.value)}}></input>
                <button onClick={navigation}>SEARCH</button>
            </div>
            
        </div>
    )
}