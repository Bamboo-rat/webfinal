import React from "react";
import anhtom from "../assets/images/anhtom.jpg";
import anharthur from "../assets/images/anharthur.jpg";
import dipol from "../assets/images/dipol.jpg";
import "../assets/css/Testimonial.css"

function TestimonialChild() {
  return (
    <div>
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
    </div>
  );
}

export default TestimonialChild;
