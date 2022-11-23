import React from 'react'
import './cardVerticalMedia.scss'
import TitleThree from '../atoms/TitleThree'

const CardVerticalMedia = ({image, title}) => {
  return (
    <div className="card r-bg-primary">
      <div className="card-body text-white text-center">
        <figure>
          <img className="img-fluid" src={image} alt=""/>
        </figure>
        <TitleThree>{title}</TitleThree>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aperiam eveniet maxime dolores. Accusamus sapiente ipsum quod!</p>
      </div>
    </div>  
  )
}

export default CardVerticalMedia
