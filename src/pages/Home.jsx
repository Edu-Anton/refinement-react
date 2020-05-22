import React from 'react'
import './home.scss'
import banner from '../img/banner2.jpg'
import img_p4 from '../img/p4.jpg'
import img_p5 from '../img/p5.jpg'
import img_p6 from '../img/p6.jpg'
import img_e1 from '../img/e1.jpg'
import img_e2 from '../img/e2.jpg'
import img_e3 from '../img/e3.jpg'
import img_p7 from '../img/p7.jpg'
import img_p8 from '../img/p8.jpg'
import img_p9 from '../img/p9.jpg'
import img_p10 from '../img/p10.jpg'

const Home = () => {
  return (
    <>
    {/* Banner */}
    <div className="position-relative">
      <figure>
        <img src={banner} alt=""/>
      </figure>
      <nav className="navbar navbar-expand-lg navbar-light container position-absolute fixed-top">
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
      {/* <div className="position-absolute fixed-top h-100 container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light px-0">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <p className="mx-n3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum nobis in soluta provident tempore, aut magnam non atque quis tempora labore vel, voluptates perferendis natus possimus dolorem quidem quisquam?</p>
      </div> */}
    </div>

    {/* About */}
    <div className="container py-5">
      <h2 className="text-center mb-5">About</h2>
      <div className="row">
        <div className="col-6 d-flex mb-4">
          <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem sunt illo cum maiores cumque, sed voluptas molestias? Quas, vitae. Sapiente quos placeat quisquam ipsam?</p> 
          <div className="icon-box ml-4">
            <i className="fas fa-user icon"></i>
          </div>
        </div>
        <div className="col-6 d-flex flex-row-reverse">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt architecto veritatis eos voluptatibus explicabo provident maxime veniam quae aspernatur, cum vel incidunt magnam velit ad nulla quam!</p> 
          <div className="icon-box mr-4">
            <i className="fas fa-user icon"></i>
          </div>
        </div>
        <div className="col-6 d-flex">
          <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi ea quo obcaecati recusandae, expedita quia sunt dicta iste illum autem alias aspernatur, placeat nostrum!</p> 
          <div className="icon-box ml-4">
            <i className="fas fa-user icon"></i>
          </div>
        </div>
        <div className="col-6 d-flex flex-row-reverse">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi natus distinctio ab reiciendis quibusdam quam asperiores debitis mollitia obcaecati ipsum.</p> 
          <div className="icon-box mr-4">
            <i className="fas fa-user icon"></i>
          </div>
        </div>
      </div>
    </div>

    {/* For Student */}
    <div className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">For Student</h2>
        <div className="row">
          <div className="col-4">
            <div className="card text-center">
              <figure>
                <img className="w-100" src={img_p4} alt=""/>
              </figure>
              <h3>Attendance Procedure</h3>
              <p>Lorem ipsum dolor sit amet, consectscing elit. Maecenas moleset alldbus id ictum. Ut neque purus, sollic alitudin non ante ac, malesuada. condimentum libero.</p>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-center">
              <figure>
                <img className="w-100" src={img_p5} alt=""/>
              </figure>
              <h3>Health & Help</h3>
              <p>Lorem ipsum dolor sit amet, consectscing elit. Maecenas moleset alldbus id ictum. Ut neque purus, sollic alitudin non ante ac, malesuada. condimentum libero.</p>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-center">
              <figure>
                <img className="w-100" src={img_p6} alt=""/>
              </figure>
              <h3>Course Selection</h3>
              <p>Lorem ipsum dolor sit amet, consectscing elit. Maecenas moleset alldbus id ictum. Ut neque purus, sollic alitudin non ante ac, malesuada. condimentum libero.</p>
            </div>
          </div>
        </div>
    </div>
    </div>
    
    {/* New Course */}
    <div className="container py-5">
      <h2 className="text-center mb-5">New Course</h2>
      <div className="row">
        <div className="col-6 mb-4">
          <div className="card">
            <figure className="m-0">
              <img className="w-100" src={img_p7} alt=""/>
            </figure>
            <p className="position-absolute r-card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel nihil illum sapiente hic corporis ipsa consectetur facere fugiat explicabo expedita dolorem, maxime, saepe consequuntur eos!</p>
          </div>
        </div>
        <div className="col-6 mb-4">
          <div className="card">
            <figure className="m-0">
              <img className="w-100" src={img_p8} alt=""/>
            </figure>
            <p className="position-absolute r-card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel nihil illum sapiente hic corporis ipsa consectetur facere fugiat explicabo expedita dolorem, maxime, voluptas eos! Iure.</p>
          </div>
        </div>
        <div className="col-6 mb-4">
          <div className="card">
            <figure className="m-0">
              <img className="w-100" src={img_p9} alt=""/>
            </figure>
            <p className="position-absolute r-card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. consectetur facere fugiat explicabo expedita dolorem, maxime, saepe consequuntur dolores magnam voluptas eos! Iure.</p>
          </div>
        </div>
        <div className="col-6 mb-4">
          <div className="card">
            <figure className="m-0">
              <img className="w-100" src={img_p10} alt=""/>
            </figure>
            <p className="position-absolute r-card-text">Lagni vel nihil illum sapiente hic corporis ipsa consectetur facere fugiat explicabo expedita dolorem, maxime, saepe consequuntur dolores magnam voluptas eos! Iure.</p>
          </div>
        </div>
        
      </div>
    </div>

    {/* Latest Works / Testimonials */}
    <div className="py-5 container">
      <div className="row">
        <div className="col-4">

          <h3 className="mb-4">Testimonial</h3>
          <div className="row">
            <div className="col-12">
              <p>" Quisque varius, nibh ac feugiat interdum, libero massa laoreet tellus, nec congue lorem arcu a nunc. Praesent quis felis eget</p>
              <span>EMMA S.</span>
            </div>
            <div className="col-12">
              <p>" Quisque varius, nibh ac feugiat interdum, libero massa laoreet tellus, nec congue lorem arcu a nunc. Praesent quis felis eget</p>
              <span>EMMA S.</span>
            </div>
            <div className="col-12">
              <p>" Quisque varius, nibh ac feugiat interdum, libero massa laoreet tellus, nec congue lorem arcu a nunc. Praesent quis felis eget</p>
              <span>EMMA S.</span>
            </div>
          </div>
        </div>
        <div className="container col-8">
          <h3 className="mb-4">Latest Works</h3>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                  <figure>
                    <img className="w-100" src={img_e1} alt=""/>
                  </figure>
                  <p>Kasertas lertyasea deeraeser miasera lertasa ritise doloert ferdas caplicabo nerafaes asety u lasec vaserat.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                  <figure>
                    <img className="w-100" src={img_e2} alt=""/>
                  </figure>
                  <p>Kasertas lertyasea deeraeser miasera lertasa ritise doloert ferdas caplicabo nerafaes asety u lasec vaserat.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                  <figure>
                    <img className="w-100" src={img_e3} alt=""/>
                  </figure>
                  <p>Kasertas lertyasea deeraeser miasera lertasa ritise doloert ferdas caplicabo nerafaes asety u lasec vaserat.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
 )
}

export default Home
