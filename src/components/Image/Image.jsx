import React from 'react'
import './image.scss'

const Image = (props) => {
  return (
    <figure>
      <img className="image" src={props.src} alt=""/>
    </figure>
  )
}

export default Image
