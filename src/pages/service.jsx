import React from 'react'
import '../assets/css/services.css'
import trim from '../assets/images/trim.jpg';
import style from '../assets/images/style.jpg';
import shampoo from '../assets/images/shampoo.jpg';
import cut from '../assets/images/cut.jpg';
import Navbar from '../component/navbar';
import TestimonialChild from '../component/testimonial-child';
import Footer from '../component/footer';
import service1 from "../assets/images/service-icon-1.png"
import service2 from "../assets/images/service-icon-2.png"
import service3 from "../assets/images/service-icon-3.png"
import Carousel from '../component/Carousel';

function Service() {
  return (
    <div>
        <Navbar />
        <section id="service">
    <div class="title-text">
        <p>SERVICES</p>
        <h1>We Provider Better</h1>
    </div>

    <div class="service-box">

        <div class="single-service">
            <img src={trim} alt="" />
            <div class="overlay"></div>
            <div class="service-desc">
                <h3>Beard Trim</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div class="single-service">
            <img src={style} alt="" />
            <div class="overlay"></div>
            <div class="service-desc">
                <h3>Hair Styling</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div class="single-service">
            <img src={shampoo} alt="" />
            <div class="overlay"></div>
            <div class="service-desc">
                <h3>Dry Shampoo</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div class="single-service">
            <img src={cut} alt="" />
            <div class="overlay"></div>
            <div class="service-desc">
                <h3>Hair Cut</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
</section>
<Carousel/>
<div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-block">
                <div className="service-icon mb20">
                  <img src={service1} alt="Traditional Cut" />
                </div>
                <div className="service-content">
                  <h2><a href="#" className="title">Traditional Cut</a></h2>
                  <p>Get a traditional cut with professional styling to make you look your best.</p>
                  <div className="price">$45</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-block">
                <div className="service-icon mb20">
                  <img src={service2} alt="Mustache Trim" />
                </div>
                <div className="service-content">
                  <h2><a href="#" className="title">Mustache Trim</a></h2>
                  <p>Keep your mustache looking sharp and well-groomed with our trim service.</p>
                  <div className="price">$45</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-block">
                <div className="service-icon mb20">
                  <img src={service3} alt="Beard Trim" />
                </div>
                <div className="service-content">
                  <h2><a href="#" className="title">Beard Trim</a></h2>
                  <p>Get a professionally styled beard trim to enhance your look.</p>
                  <div className="price">$45</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<TestimonialChild/>
<Footer/>
</div>
  )
}

export default Service
