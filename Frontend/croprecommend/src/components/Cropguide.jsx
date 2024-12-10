import React from 'react';
import './Cropguide.css';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function CropGuidance() {
  const navigate = useNavigate();

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    

  
  
      <nav className="navbar navbar-expand-lg farmer-theme-navbar">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://img.freepik.com/premium-vector/f-letter-shape-with-green-leaf_843960-18.jpg"
              alt="Logo"
              width="40"
              height="38"
              className="d-inline-block align-top me-2"
            />
            <span>Farmee</span>
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
          <div className="collapse navbar-collapse" id="navbarNav" style={{ paddingTop: '1px' }}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="\home">Home</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="\contactus">Contact Us</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅ Back
      </button>
      <br /><br />
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1491372770658-8db4fb88f70b?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Crop Field"
          className="hero-image"
        />
        <div className="hero-text">
          <h2>Optimize Your Crop Production</h2>
          <p>
            Discover expert tips and essential practices to enhance your crop
            yields sustainably. Learn about soil management, crop rotation, and
            pest control.
          </p>
          <br />
        </div>
        <div className="guidance-section" id="guidance">
          <h3>Essential Crop Guidance</h3>
          <div className="guidance-cards">
            <div className="card">
              <h4>Crop Details</h4>
              <p>
                Tailor practices to meet crop-specific needs for healthier,
                more productive harvests.
              </p>
              <a href="/cropdetails">Details</a>
            </div>
            <div className="card">
              <h4>Soil Preparation</h4>
              <p>
                Ensure soil health with the right nutrients and structure for
                your crop type.
              </p>
              <a href="/soilprep">Details</a>
            </div>
            <div className="card">
              <h4>Pest Control</h4>
              <p>
                Identify and manage common pests that can harm your crops and
                reduce yield.
              </p>
              <a href="/pestcontrol">Details</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}