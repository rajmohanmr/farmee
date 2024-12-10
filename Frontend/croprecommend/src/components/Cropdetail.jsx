import React, { useState } from "react";
import Data from "./Data";
import Model from "./Model";
import "./Cropdetail.css"
import { useNavigate } from 'react-router-dom';

const Cropdet = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState({});

  const getData = (img, title, desc, desc2, desc3) => {
    const cropData = { img, title, desc, desc2, desc3 };
    setTempdata(cropData);
    setModel(true);
  };

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
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="\contactus">
                  Contact Us
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="\aboutus">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="\logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅ Back
      </button>
      <section className="py-4 py-lg-5 container">
        
        <div className="row justify-content-center align-items-center">
          {Data.cardData.map((item, index) => {
            return (
              <div className="col-11 col-md-6 col-lg-3 mx-0 mb-5" key={index}>
                <div className="card p-2 overflow-hidden h-100 shadow-sm rounded">
                  <img
                    src={item.imgSrc}
                    className="card-img-top"
                    alt=""
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text text-muted">{item.desc}</p>
                    <button
                      className="btn w-100"
                      style={{ backgroundColor: "#6eb870", color: "white" }}
                      onClick={() =>
                        getData(
                          item.imgSrc,
                          item.title,
                          item.desc,
                          item.desc2,
                          item.desc3
                        )
                      }
                      onMouseOver={(e) => (e.target.style.color = "black")}
                      onMouseOut={(e) => (e.target.style.color = "white")}
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       
      </section>

      {model === true ? (
        <Model
          img={tempdata.img}
          title={tempdata.title}
          desc={tempdata.desc}
          desc2={tempdata.desc2}
          desc3={tempdata.desc3}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Cropdet;