import React from "react";
import "./Pest.css";
import { useNavigate } from 'react-router-dom';
export default function PestControl() {
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
      
      <div className="pest-control-container">
        <header className="header">
          <h1>Pest Control</h1>
          <p>Identify and manage common pests that can harm your crops and reduce yield.</p>
        </header>

        <section className="content">
          <img
            src="https://cpcindia.in/wp-content/uploads/2018/12/Which-is-the-best-Herbal-Termite-Control-Product-min-1.png"
            alt="Pest control in action"
            className="pest-image"
          />
          <article className="details">
            <h2>Effective Pest Control Strategies</h2>
            <p>Protecting crops from pests is essential for a successful harvest. Here are some common pest management strategies:</p>
            <ul>
              <li><strong>Biological Control:</strong> Use natural predators, such as ladybugs, to manage pest populations.</li>
              <li><strong>Cultural Control:</strong> Practice crop rotation and proper sanitation to minimize pest habitats.</li>
              <li><strong>Mechanical Control:</strong> Use traps and barriers to prevent pest access to crops.</li>
              <li><strong>Chemical Control:</strong> Apply pesticides carefully, following recommended guidelines for safe use.</li>
            </ul>
          </article>
        </section>

        <footer className="footer">
          <p>&copy; 2024 Pest Control Guide. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}