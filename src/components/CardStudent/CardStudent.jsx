import React from 'react'
import './cardStudent.scss'

const CardStudent = (props) => {
  return (
    <div className="cardStudent">
      {props.children}
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default CardStudent
