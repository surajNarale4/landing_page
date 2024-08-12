import Card from './Card.jsx'
import './cardRelatedCssGlobal/CardListType.css'
export default function CardListType({cardTypes}){

    return(
      
        <div className='container'>
            <div className='cardsType'>

                {cardTypes.map((card)=><Card card={card}/>)}

            </div>

        </div>
      
    )

}