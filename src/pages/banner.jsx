import React from 'react'
import barber from "../assets/images/Barber.jpg"
import barbershop from "../assets/images/barbershop-6.jpg"
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import TestimonialChild from '../component/testimonial-child'
import post1 from "../assets/images/post-img-1.jpg"
import post2 from "../assets/images/post-img-2.jpg"
import post3 from "../assets/images/post-img-large-1.jpg"
import "../assets/css/banner.css"


function Banner() {
  return (
    <div>
<Navbar/>
<div>
        <header class="py-5">
        <div class="container-px-5">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xxl-6">
                    <div class="text-center my-5">
                        <h1 class="fw-bolder mb-3">Our mission is to make building websites easier for everyone.</h1>
                        <p class="lead fw-normal text-muted mb-4">Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.</p>
                        <a class="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="py-5 bg-light" id="scroll-target">
        <div class="container px-5 my-5">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6"><img class="img-fluid rounded mb-5 mb-lg-0" src={barber} alt="..." /></div>
                <div class="col-lg-6">
                    <h2 class="fw-bolder">Our founding</h2>
                    <p class="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5">
        <div class="container px-5 my-5">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded mb-5 mb-lg-0" src={barbershop} alt="..." /></div>
                <div class="col-lg-6">
                    <h2 class="fw-bolder">Growth &amp; beyond</h2>
                    <p class="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                </div>
            </div>
        </div>
    </section>
    </div>


    <div class="content">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="post-block">
          <div class="row">
            <div class="col-md-6">
              <div class="post-img">
                <a href="#"><img src={post1} alt="Post 1" className="img-responsive" /></a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="post-content">
                <h2><a href="#" class="title" target="_blank">Welcome to the hair model website</a></h2>
                <p class="meta">
                  <span class="meta-date">1 January 2020</span>
                  <span class="meta-comment"><a href="#">(12) Comments</a></span>
                  <span class="meta-author">By <a href="#">Author</a></span>
                </p>
                <p>Vestibulum eget tellus tincidunt erat posuere lobortis. Nulla facilisi. Mauris rutrum mollis dui, quis elementum turpis viverra sed.</p>
                <a href="#" class="btnp">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="post-block">
          <div class="row">
            <div class="col-md-6">
              <div class="post-img">
                <a href="#"><img src={post2} alt="Post 2" className="img-responsive" /></a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="post-content">
                <h2><a href="#" class="title" target="_blank">Welcome to the hair model website</a></h2>
                <p class="meta">
                  <span class="meta-date">1 January 2020</span>
                  <span class="meta-comment"><a href="#">(12) Comments</a></span>
                  <span class="meta-author">By <a href="#">Author</a></span>
                </p>
                <p>Suspendisse lacus est, scelerisque quis ante et, pharetra fermentum nibh. Duis placerat velit sit amet felis consequat.</p>
                <a href="#" class="btnp">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="post-block">
          <div class="row">
            <div class="col-md-6">
              <div class="post-img">
                <a href="#"><img src={post3} alt="Post 3" className="img-responsive" /></a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="post-content">
                <h2><a href="#" class="title" target="_blank">Welcome to the hair model website</a></h2>
                <p class="meta">
                  <span class="meta-date">1 January 2020</span>
                  <span class="meta-comment"><a href="#">(12) Comments</a></span>
                  <span class="meta-author">By <a href="#">Author</a></span>
                </p>
                <p>Cras dolor arcu, porttitor at finibus id, condimentum ut turpis. Fusce nec justo id leo libero pharetra posuere.</p>
                <a href="#" class="btnp">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="post-block">
          <div class="row">
            <div class="col-md-6">
              <div class="post-img">
                <a href="#"><img src={post1} alt="Post 4" className="img-responsive" /></a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="post-content">
                <h2><a href="#" class="title" target="_blank">Welcome to the hair model websites</a></h2>
                <p class="meta">
                  <span class="meta-date">1 January 2020</span>
                  <span class="meta-comment"><a href="#">(12) Comments</a></span>
                  <span class="meta-author">By <a href="#">Author</a></span>
                </p>
                <p>Cras dolor arcu, porttitor at finibus id, condimentum ut turpis. Fusce nec justo id leo libero pharetra posuere.</p>
                <a href="#" class="btnp">Read More</a>
              </div>
            </div>
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

export default Banner