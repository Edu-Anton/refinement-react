import React from 'react'
import Navbar from '../organisms/Navbar'
import './home.scss'
import banner from '../img/banner2.jpg'
import img_p1 from '../img/p1.jpg'
import img_p2 from '../img/p2.jpg'
import img_p3 from '../img/p3.jpg'
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
import TitleOne from '../atoms/TitleOne'
import CardHorizontalFullMedia from '../molecules/CardHorizontalFullMedia'

const Home = () => {
  return (
    <>
    {/* Banner */}
    <div className="position-relative">
      <figure>
        <img className="img-fluid w-100 h-auto" src={banner} alt=""/>
      </figure>
      <Navbar/>
      <div className="banner-cards container position-absolute">
        <div className="row">
          <div className="col-4">
            <div className="card r-bg-primary">
              <div className="card-body text-white text-center">
                <figure>
                  <img className="img-fluid" src={img_p1} alt=""/>
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
                  <img className="img-fluid" src={img_p2} alt=""/>
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
                  <img className="img-fluid" src={img_p3} alt=""/>
                </figure>
                <h3>Dolor nunc vule</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aperiam eveniet maxime dolores. Accusamus sapiente ipsum quod!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* About */}
    <div className="container pb-5 r-pt-about">
      <TitleOne>About</TitleOne>
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
        <TitleOne>For Student</TitleOne>
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
      <TitleOne>New Course</TitleOne>
      <div className="row">
        <div className="col-6 mb-4">
          <CardHorizontalFullMedia image={img_p7}/>
        </div>
        <div className="col-6 mb-4">
          <CardHorizontalFullMedia image={img_p8}/>
        </div>
        <div className="col-6 mb-4">
          <CardHorizontalFullMedia image={img_p9}/>
        </div>
        <div className="col-6 mb-4">
          <CardHorizontalFullMedia image={img_p10}/>
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
