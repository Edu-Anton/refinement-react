import React from 'react'
import './container.scss'

const Container = (props) => {
  return (
    <div className={`container ${props.styleName}`}>
      {props.children}
    </div>
  )
}

export default Container
