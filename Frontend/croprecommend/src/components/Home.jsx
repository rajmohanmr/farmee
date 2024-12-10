import React from "react";
import "./Home.css";

export default function () {
  return (
    <div>
      <br />
      <br />
  
      
      <nav class="navbar navbar-expand-lg farmer-theme-navbar">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img src="https://img.freepik.com/premium-vector/f-letter-shape-with-green-leaf_843960-18.jpg" alt="Logo" width="40" height="38" class="d-inline-block align-top me-2" />
      <span>Farmee</span>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" Style="padding-top: 1px;">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item me-3">
          <a class="nav-link active" aria-current="page" href="\home">Home</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link" href="\contactus">Contact Us</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link" href="\aboutus">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://www.asiafarming.com/wp-content/uploads/2023/01/Growing-Potatoes-Organically-in-Telangana2-1024x683.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Crop Guidance</h5>
                <br />
                <p className="card-text">
                  Crop guidance provides farmers with essential insights on best
                  practices for growing, managing, and harvesting crops
                  effectively
                </p>
                <a href="/cropguide" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://www.rnbglobal.edu.in/assets/images/blog/WA0w-Background-1.svg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Crop Recommendation</h5>
                <br />
                <p className="card-text">
                  Crop recommendation suggests the most suitable crops for
                  specific soil, climate, and farming conditions to maximize
                  yield and sustainability.
                </p>
                <a href="/croprec" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img
                src="https://assets.yara.com/09e8ce914e33431b8524d79db4a3ea18.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Fertilizer Recommendation</h5>
                <br />
                <p className="card-text">
                  This suggests the optimal types and amounts of fertilizers to
                  enhance crop growth and soil health.
                </p>
                <a href="/fertrec" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img
                src="https://cdn.freshfruitportal.com/2024/07/pexels-nc-farm-bureau-mark-2749165-1-1024x683.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Disease Recognation</h5>
                <br />
                <p className="card-text">
                  Disease recognition helps identify crop diseases early,
                  enabling timely interventions to protect crop health and
                  yield.
                </p>
                <br />
                <a href="/diseasdet" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}