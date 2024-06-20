import React from "react";
import anhtom from "../assets/images/anhtom.jpg";
import anharthur from "../assets/images/anharthur.jpg";
import dipol from "../assets/images/dipol.jpg";
import "../assets/css/Testimonial.css"
import Navbar from "../component/navbar";
import Footer from "../component/footer";

function Testimonial() {
  return (
    <div>
        <Navbar/>
      <section id="testimonial">
        <div class="title-text">
          <p>TESTIMONIAL</p>
          <h1>What Client Says</h1>
        </div>
        <div class="testimonial-row">
          <div class="testimonial-col">
            <div class="user">
              <img src={anhtom} alt="" />
              <div class="user-info">
                <h4>
                  THOMAS SHELBY <i class="bi bi-twitter"></i>
                </h4>
                <small>@tommyshelby</small>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="testimonial-col">
            <div class="user">
              <img src={anharthur} alt="" />
              <div class="user-info">
                <h4>
                  ARTHUR SHELBY <i class="bi bi-twitter"></i>
                </h4>
                <small>@arthurshelby</small>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="testimonial-col">
            <div class="user">
              <img src={dipol} alt="" />
              <div class="user-info">
                <h4>
                  POLLY GRAY <i class="bi bi-twitter"></i>
                </h4>
                <small>@pollygray</small>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>


      <div class="content testimonial-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="testimonial-block">
                        <div class="testimonial-content">
                            <p class="testimonial-text">“Free Beauty Website Templates that help me a lot to build easy and fast my hair shop website in 2 days”</p>
                        </div>
                        <div class="testimonial-info">
                            <h4 class="testimonial-name">Reba Truong</h4>
                            <span class="testimonial-meta">34 Year</span> <span class="testimonial-meta">Customer</span> </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="testimonial-block">
                        <div class="testimonial-content">
                            <p class="testimonial-text">“Free bootstrap responsive website templates 2017 its best ever i found for my hair salon”</p>
                        </div>
                        <div class="testimonial-info">
                            <h4 class="testimonial-name">Thomas Warren</h4>
                            <span class="testimonial-meta">34 Year</span> <span class="testimonial-meta ">Customer</span> </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="testimonial-block">
                        <div class="testimonial-content">
                            <p class="testimonial-text">“Best Free HTML CSS Website Templates for salon and hair cutting business. All features clean designed”</p>
                        </div>
                        <div class="testimonial-info">
                            <h4 class="testimonial-name">Carie Willis</h4>
                            <span class="testimonial-meta">34 Year</span> <span class="testimonial-meta">Customer</span> </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="testimonial-block">
                        <div class="testimonial-content">
                            <p class="testimonial-text">“Free Beauty Website Templates that help me a lot to build easy and fast my hair shop website in 2 days”</p>
                        </div>
                        <div class="testimonial-info">
                            <h4 class="testimonial-name">Reba Truong</h4>
                            <span class="testimonial-meta">34 Year</span> <span class="testimonial-meta">Customer</span> </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="testimonial-block">
                        <div class="testimonial-content">
                            <p class="testimonial-text">“Free bootstrap responsive website templates 2017 its best ever i found for my hair salon”</p>
                        </div>
                        <div class="testimonial-info">
                            <h4 class="testimonial-name">Thomas Warren</h4>
                            <span class="testimonial-meta">34 Year</span> <span class="testimonial-meta ">Customer</span> </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="testimonial-block">
                        <div class="testimonial-content">
                            <p class="testimonial-text">“Best Free HTML CSS Website Templates for salon and hair cutting business. All features are clean designed”</p>
                        </div>
                        <div class="testimonial-info">
                            <h4 class="testimonial-name">Carie Willis</h4>
                            <span class="testimonial-meta">34 Year</span> <span class="testimonial-meta">Customer</span> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <Footer/>
    </div>
  );
}

export default Testimonial;
