import React from 'react'
import footer from '../assets/images/footer.png';
<<<<<<< HEAD
import "../assets/css/footer.css"
=======
>>>>>>> 451fbbac78be467fa15c1991c1c033b01cda1f2b

function Footer() {
    return (
        <div>
            <section id="footer">
                <img src={footer} alt="" className="footer-img" />
                <div className="title-text">
                    <p>CONTACT</p>
                    <h1>Visit Shop Today</h1>
                </div>
                <div className="footer-row">
                    <div class="footer-left">
                        <h1>Opening Hours</h1>
                        <p><i class="bi bi-clock"></i>Monday to Friday - 9am to 9pm</p>
                        <p><i class="bi bi-clock"></i>Saturday to Sunday - 8am to 11pm</p>
                    </div>
                    <div className="footer-right">
                        <h1>Get In Touch</h1>
                        <p>#30 abc Colony, xyz City IN <i class="bi bi-geo-alt"></i></p>
                        <p>example@website.com <i class="bi bi-paperclip"></i></p>
                        <p>+01 123456789 <i class="bi bi-phone"></i></p>
                    </div>
                </div>
                <div className="social-links">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-youtube"></i>
                    <p>Copyright Easy Tutorials Youtube Chanel</p>
                </div>
            </section>
        </div>
    )
}

export default Footer