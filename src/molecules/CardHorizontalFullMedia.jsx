import React from 'react';

const CardHorizontalFullMedia = (props) => {
  return (
    <div className="card">
      <figure className="m-0">
        <img className="w-100" src={props.image} alt=""/>
      </figure>
      <p className="position-absolute r-card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel nihil illum sapiente hic corporis ipsa consectetur facere fugiat explicabo expedita dolorem, maxime, saepe consequuntur eos!</p>
    </div>
  )
}

export default CardHorizontalFullMedia
