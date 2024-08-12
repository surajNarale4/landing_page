import './cardRelatedCssGlobal/card.css'
import { Link } from 'react-router-dom'

export default function Card({card}){

    return (
        <div className='cardContainer'>
            <Link to={`/type/${card.type}/`}>
                <div className="cardImage">
                    <img src={card.src}></img>
                </div>
                <div className='cardDescription'>
                {card.type.toUpperCase()}
                </div>
            </Link>
            
            
        </div>
    )
}