import React from 'react'
import Section from '../layout/Section/Section'
import CardStudent from '../components/CardStudent/CardStudent'
import Container from '../layout/Container/Container'
import Image from '../components/Image/Image'
import img4 from '../img/p4.jpg'
import img5 from '../img/p5.jpg'
import img6 from '../img/p6.jpg'

const Home = () => {
  return (
    <div>
      <Section>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam repudiandae assumenda officia provident quibusdam ipsum commodi aperiam animi? Autem illum ipsum illo expedita inventore quos quasi dolores laboriosam sed molestiae.</p>
      </Section>
      <Section>
        <h2>For Student</h2>
        <Container styleName="container-flex">
          <CardStudent 
            title="Attendance Procedure"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam repudiandae assumenda officia provident quibusdam ipsum commodi aperiam animi? Autem illum ipsum illo expedita inventore quos quasi dolores laboriosam sed molestiae."
          >
            <Image src={img4}/>
          </CardStudent>
          <CardStudent
            urlImg={img5} 
            title="Attendance Procedure"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam repudiandae assumenda officia provident quibusdam ipsum commodi aperiam animi? Autem illum ipsum illo expedita inventore quos quasi dolores laboriosam sed molestiae."
          />
               
          <CardStudent 
            urlImg={img6}
            title="Attendance Procedure"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam repudiandae assumenda officia provident quibusdam ipsum commodi aperiam animi? Autem illum ipsum illo expedita inventore quos quasi dolores laboriosam sed molestiae."
          />
        </Container>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam repudiandae assumenda officia provident quibusdam ipsum commodi aperiam animi? Autem illum ipsum illo expedita inventore quos quasi dolores laboriosam sed molestiae.</p>
      </Section>
    </div>
  )
}

export default Home
