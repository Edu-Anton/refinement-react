import React from 'react'
import Navbar from '../organisms/Navbar'
import banner from '../img/banner2.jpg'
import img_g1 from '../img/g1.jpg'
import img_g2 from '../img/g2.jpg'
import img_g3 from '../img/g3.jpg'
import img_g4 from '../img/g4.jpg'
import img_g5 from '../img/g5.jpg'
import img_g6 from '../img/g6.jpg'
import img_g7 from '../img/g7.jpg'
import img_g8 from '../img/g8.jpg'
import img_g9 from '../img/g9.jpg'
import img_g10 from '../img/g10.jpg'
import img_g11 from '../img/g11.jpg'
import img_g12 from '../img/g12.jpg'

const Gallery = (props) => {
  return (
    <>
    {/* Banner */}
    <div className="position-relative">
      <figure>
        <img className="img-fluid w-100 h-auto" src={banner} alt=""/>
      </figure>
      <Navbar/>
      
    </div>
    {/* Galllery */}
    <div className="container py-5">
      <h2 className="text-center mb-5">Gallery</h2>
      <div className="row">
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g1} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g2} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g3} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g4} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g5} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g6} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g7} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g8} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g9} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g10} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g11} alt=""/>
        </div>
        <div className="col-3 mb-4">
          <img className="w-100" src={img_g12} alt=""/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Gallery
