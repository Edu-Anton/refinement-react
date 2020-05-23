import React from 'react'
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


const About = (props) => {
  return (
    <>
      {/* Banner */}
      <div className="position-relative">
        <figure>
          <img className="img-fluid w-100 h-auto" src={banner} alt=""/>
        </figure>
        <nav className="navbar navbar-expand-lg navbar-dark container position-absolute fixed-top">
          <a className="navbar-brand" href="/">Refinement</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Codes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        
      </div>
      {/* Who we are */}
      <div className="container py-5 text-center">
        <h2 className="text-center">Who We Are</h2>
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
          <h2 className="text-center">Why Choose Us</h2>
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
        <h2 className="text-center mb-5"> Certification Program</h2>
        <div className="row">
          <div className="col-6">
            <div className="card">
              <figure className="m-0">
                <img className="w-100" src={img_p7} alt=""/>
              </figure>
              <p className="position-absolute r-card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel nihil illum sapiente hic corporis ipsa consectetur facere fugiat explicabo expedita dolorem, maxime, saepe consequuntur eos!</p>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <figure className="m-0">
                <img className="w-100" src={img_p8} alt=""/>
              </figure>
              <p className="position-absolute r-card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel nihil illum sapiente hic corporis ipsa consectetur facere fugiat explicabo expedita dolorem, maxime, voluptas eos! Iure.</p>
            </div>
        </div>
        </div>
      </div>
      {/* Our Leadership */}
      <div>
        <div className="container">
          <h2 className="text-center">Our Leadership</h2>
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
