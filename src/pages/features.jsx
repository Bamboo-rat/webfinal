import React from "react";
import '../assets/css/features.css'
import barberfeature from "../assets/images/barber-feature.jpg";

function Features() {
  return (
    <div>
      <section id="features">
        <div class="title-text">
          <p>FEATURES</p>
          <h1>Why Choose Us</h1>
        </div>

        <div class="features-box">
          <div class="features">
            <h1>Experienced Staff</h1>
            <div class="features-desc">
              <div class="feature-icon">
                <i class="bi bi-shield-shaded"></i>
              </div>
              <div class="feature-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <h1>Pre Booking Online</h1>
            <div class="features-desc">
              <div class="feature-icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <div class="feature-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <h1>Affordable Cost</h1>
            <div class="features-desc">
              <div class="feature-icon">
                <i class="bi bi-currency-dollar"></i>
              </div>
              <div class="feature-text">
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
          <div class="feature-img">
            <img src={barberfeature} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
