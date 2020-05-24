import React from 'react'
import Navbar from '../organisms/Navbar'
import './about.scss'
import banner from '../img/banner2.jpg'
import img_a1 from '../img/a1.jpg'
import img_a2 from '../img/a2.jpg'
import img_a3 from '../img/a3.jpg'
import img_p7 from '../img/p7.jpg'
import img_p8 from '../img/p8.jpg'
import img_t1 from '../img/t1.jpg'
import img_t2 from '../img/t2.jpg'
import img_t3 from '../img/t3.jpg'
import img_t4 from '../img/t4.jpg'
import TitleOne from '../atoms/TitleOne'
import CardHorizontalFullMedia from '../molecules/CardHorizontalFullMedia'


const About = (props) => {
  return (
    <>
      {/* Banner */}
      <div className="position-relative">
        <figure>
          <img className="img-fluid w-100 h-auto" src={banner} alt=""/>
        </figure>
        <Navbar/>
        
      </div>
      {/* Who we are */}
      <div className="container py-5 text-center">
        <TitleOne>Who We Are</TitleOne>
        <p className="font-weight-bold">ALIQUAM DAPIBUS TINCIDUNT METUS. PRAESENT JUSTO DOLOR, LOBORTIS QUIS, LOBORTIS DIGNISSIM, PULVINAR AC, LOREM. VESTIBULUM SED ANTE. DONEC SAGITTIS EUISMOD PURUS. MAURIS FERMENTUM DICTUM MAGNA.</p>
        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis epellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.Itaque earum rerum hic tenetur Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem dis parturient montes. Duis ultricies pharetra magna.</p>
        <p>lorem Ipsum is simply dummy text of the printing and typesetting industry., Lorem Ipsum dummy text ever since dummy text of the printing and usings 1500s,Duis aute irure dolor in reprehenderit in voluptate velit esse when an,Lorem Ipsum has been the industry's standard dummy text ever since dummy text of the printing and usings 1500s,</p>
        <div className="row">
          <div className="col-4">
            <figure>
              <img src={img_a1} alt=""/>
            </figure>
          </div>
          <div className="col-4">
            <figure>
              <img src={img_a2} alt=""/>
            </figure>
          </div>
          <div className="col-4">
            <figure>
              <img src={img_a3} alt=""/>
            </figure>
          </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className="py-5 bg-light">
        <div className="container">
          <TitleOne>Why Choose Us</TitleOne>
          <div className="row">
            <div className="col-3">
              <h3>1. Vestibulum Iaculis</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, illum possimus officia earum hic consequatur similique. Rerum impedit voluptatem ipsam maxlores voluptas?</p>
            </div>
            <div className="col-3">
              <h3>2. Mauris Asan Nulla</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, illum possimus officia earum hic consequatur similique. Rerum voluptatem ipsam max. Cumque eius dolores voluptas?</p>
            </div>
            <div className="col-3">
              <h3>3. Faucibus Risus</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius adipisci voluptates reiciendis dolore libero blanditiis aspernatur commodi necessitatibus esse niam non veritatis impedit.</p>
            </div>
            <div className="col-3">
              <h3>4. Mauris Asan Nulla</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur cumque hic aliquam excepturi, libero commodi sequi, dolores ex quas quaerat quod. Libero.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Certification Program */}
      <div className="container py-5">
        <TitleOne>Certification Program</TitleOne>
        <div className="row">
          <div className="col-6">
            <CardHorizontalFullMedia image={img_p7}/>
          </div>
          <div className="col-6">
            <CardHorizontalFullMedia image={img_p8}/>
        </div>
        </div>
      </div>
      {/* Our Leadership */}
      <div>
        <div className="container">
          <TitleOne>Our Leadership</TitleOne>
          <div className="row">
            <div className="col-3">
              <figure>
                <img src={img_t1} alt=""/>
              </figure>
            </div>
            <div className="col-3">
              <figure>
                <img src={img_t2} alt=""/>
              </figure>
            </div>
            <div className="col-3">
              <figure>
                <img src={img_t3} alt=""/>
              </figure>
            </div>
            <div className="col-3">
              <figure>
                <img src={img_t4} alt=""/>
              </figure>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
