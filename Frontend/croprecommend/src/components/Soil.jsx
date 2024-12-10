import React from "react";
import "./Soil.css";
import { useNavigate } from 'react-router-dom';

export default function SoilPreparation() {
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
    <br/>

    <br/>


   
  
      <nav className="navbar navbar-expand-lg farmer-theme-navbar">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="\">
            <img
              src="https://img.freepik.com/premium-vector/f-letter-shape-with-green-leaf_843960-18.jpg"
              alt="Logo"
              width="40"
              height="40"
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="\home">Home</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="\contactus">Contact Us</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="\aboutus">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="\logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅ Back
      </button>
      
      <div className="soil-preparation-container">
        <header className="header">
          <h1>Soil Preparation</h1>
          <p>Ensure soil health with the right nutrients and structure for your crop type.</p>
        </header>

        <section className="content">
          <img
            src="https://platthillnursery.com/wp-content/uploads/2022/03/Platt-Hill-Nursery-woman-running-soil-through-her-fingers.png"
            alt="Prepared soil in a field"
            className="soil-image"
          />
          <article className="details">
            <h2>Steps for Effective Soil Preparation</h2>
            <p>
              Preparing soil is the foundation of healthy crops. A well-prepared soil provides essential nutrients, improves water retention, and supports robust root development.
            </p>
            <ul>
              <li><strong>Testing:</strong> Analyze soil to determine pH and nutrient levels.</li>
              <li><strong>Amending:</strong> Add organic matter like compost for better structure.</li>
              <li><strong>Tilling:</strong> Loosen soil to improve aeration and water infiltration.</li>
              <li><strong>Leveling:</strong> Ensure even distribution to prevent waterlogging.</li>
            </ul>
          </article>
        </section>

        <footer className="footer">
          <p>&copy; 2024 Soil Preparation Guide. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}