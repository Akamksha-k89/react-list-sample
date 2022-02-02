import React from 'react'
import './Card.css';
import food from './assets/images/salad.jpg';
function Card(props) {
    return (
        <div className='card'>
            <div className="card__body">
                <img classNamesrc ={food} alt='salad'/>
                <h2 className='card__title'>{props.title}Titles</h2>
                <p className='card__description'>{props.description}Description</p>
            </div>
            <button className='card__btn'>View Recipe</button>
        </div>
    )
}

export default Card

