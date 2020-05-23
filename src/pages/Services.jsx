import React from 'react'
import banner from '../img/banner2.jpg'
import img_s1 from '../img/s1.jpg'
import img_s2 from '../img/s2.jpg'
import img_s3 from '../img/s3.jpg'
import img_s4 from '../img/s4.jpg'
import img_s5 from '../img/s5.jpg'
import img_s6 from '../img/s6.jpg'
import img_s7 from '../img/s7.jpg'


const Services = (props) => {
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
    {/* Services */}
    <div className="container py-5">
      <h2 className="text-center mb-5">Services</h2>
      <div className="row">
        <div className="col-4">
          <div className="card r-bg-primary">
            <div className="card-body text-white text-center">
              <figure>
                <img className="img-fluid" src={img_s1} alt=""/>
              </figure>
              <h3>Dolor nunc vule</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aperiam eveniet maxime dolores. Accusamus sapiente ipsum quod!</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card r-bg-primary">
            <div className="card-body text-white text-center">
              <figure>
                <img className="img-fluid" src={img_s2} alt=""/>
              </figure>
              <h3>Dolor nunc vule</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aperiam eveniet maxime dolores. Accusamus sapiente ipsum quod!</p>
            </div>
          </div>
        </div>
        <div className="col-4">
            <div className="card r-bg-primary">
              <div className="card-body text-white text-center">
                <figure>
                  <img className="img-fluid" src={img_s3} alt=""/>
                </figure>
                <h3>Dolor nunc vule</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aperiam eveniet maxime dolores. Accusamus sapiente ipsum quod!</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    {/* Features */}
    <div className="bg-gray">
      <div className="container">
        <h2 className="text-center mb-5">Features</h2>
        <div className="row">
          <div className="col-3">
            <div className="card text-center p-4">
              <i>Icon</i>
              <h3>Sceleris Eget</h3>
              <hr/>
              <p>Quisque nulla. Vestibulum libero nisl, porta vel, scelerisque eget, lesuada at, neque. Viv eget nibh. Etam cus. Nulla facilisi.</p>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center p-4">
              <i>Icon</i>
              <h3>Sceleris Eget</h3>
              <hr/>
              <p>Quisque nulla. Vestibulum libero nisl, porta vel, scelerisque eget, lesuada at, neque. Viv eget nibh. Etam cus. Nulla facilisi.</p>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center p-4">
              <i>Icon</i>
              <h3>Sceleris Eget</h3>
              <hr/>
              <p>Quisque nulla. Vestibulum libero nisl, porta vel, scelerisque eget, lesuada at, neque. Viv eget nibh. Etam cus. Nulla facilisi.</p>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center p-4">
              <i>Icon</i>
              <h3>Sceleris Eget</h3>
              <hr/>
              <p>Quisque nulla. Vestibulum libero nisl, porta vel, scelerisque eget, lesuada at, neque. Viv eget nibh. Etam cus. Nulla facilisi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* What We Offer */}
    <div className="container py-5">
      <h2 className="text-center mb-5">What We Offer</h2>
      <div className="row">
        <div className="col-6 mb-4">
          <div className="d-flex">
            <figure className="mr-4">
              <img src={img_s4} alt=""/>
            </figure>
            <div>
              <h3>Mauris non magna ul</h3>  
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat ullam dolorum dolorem qui obcaecati voluptas deserunt placeat? Eos et, nesciuo!</p>
            </div>
          </div>
        </div>
        <div className="col-6 mb-4">
          <div className="d-flex">
            <figure className="mr-4">
              <img src={img_s5} alt=""/>
            </figure>
            <div>
              <h3>Mauris non magna ul</h3>  
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat ullam dolorum dolorem qui obcaecati voluptas deserunt placeat? Eos et, nesciuo!</p>
            </div>
          </div>
        </div>
        <div className="col-6 mb-4">
          <div className="d-flex">
            <figure className="mr-4">
              <img src={img_s6} alt=""/>
            </figure>
            <div>
              <h3>Mauris non magna ul</h3>  
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat ullam dolorum dolorem qui obcaecati voluptas deserunt placeat? Eos et, nesciuo!</p>
            </div>
          </div>
        </div>
        <div className="col-6 mb-4">
          <div className="d-flex">
            <figure className="mr-4">
              <img src={img_s7} alt=""/>
            </figure>
            <div>
              <h3>Mauris non magna ul</h3>  
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat ullam dolorum dolorem qui obcaecati voluptas deserunt placeat? Eos et, nesciuo!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
