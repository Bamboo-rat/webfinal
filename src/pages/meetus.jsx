import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../component/navbar';
import "../assets/css/meetus.css";
import Footer from '../component/footer';
import Item from '../component/item';

function Meetus() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    appointmentDate: '',
    appointmentTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/user/add', {
      nameUser: formData.name,
      emailUser: formData.email,
      phoneUser: formData.phone,
      appointmentDate: formData.appointmentDate,
      appointmentTime: formData.appointmentTime
    })
    .then(response => {
      console.log(response.data);
      alert("Message sent successfully!");
    })
    .catch(error => {
      console.error("There was an error sending the message!", error);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-caption">
                <h2 className="page-title">Contact us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bando">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.588491983443!2d105.8262382743166!3d21.009126380635244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac800f450807%3A0x419a49bcd94b693a!2zSOG7jWMgVmnhu4duIE5nw6JuIEjDoG5n!5e0!3m2!1svi!2s!4v1714984635345!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="widget widget-contact w-100 ">
                <h3 className="widget-title">Contact Info</h3>
                <address>
                  <strong>Hair Studio</strong>
                  <br /> 1355 Market Street, Suite 900
                  <br /> San Francisco, CA 94103
                  <br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
                <address>
                  <strong>Contact Name</strong>
                  <br />
                  <a href="mailto:yourdomain@gmail.com">yourdomain@gmail.com</a>
                </address>
              </div>
              <Item/>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="contact-form">
                    <h1>Contact Form</h1>
                    <p>Please complete the form below. We'll do everything we can to respond to you as quickly as possible.</p>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label" htmlFor="name">Name</label>
                            <input 
                              type="text" 
                              name="name" 
                              id="name" 
                              placeholder="" 
                              className="form-control" 
                              value={formData.name} 
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label" htmlFor="phone">Phone</label>
                            <input 
                              type="text" 
                              name="phone" 
                              id="phone" 
                              placeholder="" 
                              className="form-control" 
                              value={formData.phone} 
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label" htmlFor="email">Email</label>
                            <input 
                              type="text" 
                              name="email" 
                              id="email" 
                              placeholder="" 
                              className="form-control" 
                              value={formData.email} 
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label" htmlFor="subject">Subject</label>
                            <input 
                              type="text" 
                              name="subject" 
                              id="subject" 
                              placeholder="" 
                              className="form-control" 
                              value={formData.subject} 
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label" htmlFor="appointmentDate">Appointment Date</label>
                            <input 
                              type="date" 
                              name="appointmentDate" 
                              id="appointmentDate" 
                              placeholder="" 
                              className="form-control" 
                              value={formData.appointmentDate} 
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label" htmlFor="appointmentTime">Appointment Time</label>
                            <input 
                              type="time" 
                              name="appointmentTime" 
                              id="appointmentTime" 
                              placeholder="" 
                              className="form-control" 
                              value={formData.appointmentTime} 
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="control-label" htmlFor="message">Message</label>
                            <textarea 
                              className="form-control" 
                              id="message" 
                              name="message" 
                              rows="6" 
                              placeholder="" 
                              value={formData.message} 
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <button id="singlebutton" name="singlebutton" className="btn">Send Message</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Meetus;
