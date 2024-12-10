import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contactus.css'; 
import './Home.css'
import { useNavigate } from 'react-router-dom';
const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
       <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <nav className="navbar navbar-expand-lg farmer-theme-navbar">
        <a className="navbar-brand" href="#" Style="padding-left: 9px;">
          <img src="https://img.freepik.com/premium-vector/f-letter-shape-with-green-leaf_843960-18.jpg" alt="Logo" width="40" height="39" class="d-inline-block align-top me-4" className="img-fluid"/>
          <span Style="margin-left: 10px;">Farmee</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="\home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅ Back
      </button>
      
      <div className="container mt-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <div className="row">
          
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

          <div className="col-md-6">
            <h4>Our Contact Information</h4>
            <ul className="list-unstyled">
              <li><strong>Phone:</strong> +1 234 567 890</li>
              <li><strong>Email:</strong> contact@farmerhub.com</li>
              <li><strong>Address:</strong> 123 Church Road, Kolenchery, Ernakulam</li>
            </ul>
            <h4>Find Us On The Map</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31433.505389970556!2d76.44077159307197!3d10.001309966650233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e01f480a86cb%3A0x36890154a76a80d1!2sKadayirippu%2C%20Kerala!5e0!3m2!1sen!2sin!4v1731358358672!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      
      <footer className="text-center mt-5 p-4">
        <p>&copy; 2024 FarmerHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;