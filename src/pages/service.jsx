import React from 'react'
import '../assets/css/services.css'
import trim from '../assets/images/trim.jpg';
import style from '../assets/images/style.jpg';
import shampoo from '../assets/images/shampoo.jpg';
import cut from '../assets/images/cut.jpg';

function Service() {
  return (
    <div><section id="service">
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
</section></div>
  )
}

export default Service