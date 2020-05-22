import React from 'react'
import './section.scss'
import Container from '../Container/Container'

const Section = (props) => {
  return (
    <div className="section">
      <Container>
        {props.children}
      </Container>
    </div>
  )
}

export default Section
