import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import TestimonialChild from "../component/testimonial-child";
import Footer from "../component/footer";
import service1 from "../assets/images/service-icon-1.png";
import service2 from "../assets/images/service-icon-2.png";
import service3 from "../assets/images/service-icon-3.png";
import barberfeature from "../assets/images/barber-feature.jpg";
import anh7 from '../assets/images/anh7.jpg';
import "../assets/css/features.css";
import "../assets/css/web.css";

function Features() {
  return (
    <div>
      <Navbar />
      <div>
        <header id="banner">
          <div className="banner-text">
            <h1>Hair Studio</h1>
            <p>Style Your Hair Is Style Your Life</p>
            <div className="banner-btn">
              <Link to="/meetus">
                <span></span> Contact
              </Link>
              <Link to="/features">
                <span></span> Read More
              </Link>
            </div>
          </div>
        </header>
      </div>
      <section id="features">
        <div className="title-text">
          <p>FEATURES</p>
          <h1>Why Choose Us</h1>
        </div>

        <div className="features-box">
          <div className="features">
            <div className="features-desc">
              <h1>Experienced Staff</h1>
              <div className="feature-icon">
                <i className="bi bi-shield-shaded"></i>
              </div>
              <div className="feature-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="features-desc">
              <h1>Pre Booking Online</h1>
              <div className="feature-icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <div className="feature-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="features-desc">
              <h1>Affordable Cost</h1>
              <div className="feature-icon">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <div className="feature-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-img">
            <img src={barberfeature} alt="" />
          </div>
        </div>

        <div className="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="about-img">
                  <img src={anh7} alt="Image" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header text-left">
                  <p>Learn About Us</p>
                  <h2>25 Years Experience</h2>
                </div>
                <div className="about-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus. Aenean consectetur convallis
                    porttitor. Aliquam interdum at lacus non blandit.
                  </p>
                  <a className="btn" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-block">
                <div className="service-icon mb20">
                  <img src={service1} alt="Traditional Cut" />
                </div>
                <div className="service-content">
                  <h2>
                    <a href="#" className="title">
                      Traditional Cut
                    </a>
                  </h2>
                  <p>
                    Get a traditional cut with professional styling to make you
                    look your best.
                  </p>
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
                  <h2>
                    <a href="#" className="title">
                      Mustache Trim
                    </a>
                  </h2>
                  <p>
                    Keep your mustache looking sharp and well-groomed with our
                    trim service.
                  </p>
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
                  <h2>
                    <a href="#" className="title">
                      Beard Trim
                    </a>
                  </h2>
                  <p>
                    Get a professionally styled beard trim to enhance your
                    look.
                  </p>
                  <div className="price">$45</div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center">
              <Link to="/service" className="btn">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TestimonialChild />
      <Footer />
    </div>
  );
}

export default Features;
