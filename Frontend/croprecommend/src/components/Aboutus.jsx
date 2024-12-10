import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Aboutus.css';
import './Home.css';

const Aboutus = () => {
    const navigate = useNavigate();
    return (
        
        <div className="about-us">
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
                    <a className="navbar-brand d-flex align-items-center" href="\">
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
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" href="/aboutus">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <br />
            <button onClick={() => navigate(-1)} className="back-button">
                ⬅ Back
            </button>

            
            <header className="about-us-header">
                <h1>About Us</h1>
                <p>Growing Together, Sustaining the Future</p>
            </header>
            
            <section className="about-us-vision">
                <h2>Our Mission</h2>
                <p>We are committed to empowering farmers with sustainable practices, technology-driven solutions, and a supportive community. Our goal is to create a world where farming is both prosperous and environmentally responsible.</p>
            </section>

            <section className="about-us-values">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Integrity:</strong> Building trust through transparency and honesty.</li>
                    <li><strong>Innovation:</strong> Leveraging technology to improve farming practices.</li>
                    <li><strong>Sustainability:</strong> Supporting environmentally friendly practices that preserve natural resources.</li>
                    <li><strong>Community:</strong> Strengthening bonds among farmers and stakeholders.</li>
                </ul>
            </section>

            <section className="about-us-impact">
                <h2>Our Impact</h2>
                <p>Our initiatives have reached thousands of farmers, helping them adopt sustainable practices and improve their livelihoods. We provide training, access to resources, and a platform for farmers to connect, share knowledge, and innovate together.</p>
            </section>

            <section className="about-us-goals">
                <h2>Our Goals</h2>
                <ul>
                    <li>Reduce carbon footprint in agriculture by promoting eco-friendly methods.</li>
                    <li>Support farmers in maximizing yields through smart farming technologies.</li>
                    <li>Build resilient communities that can adapt to climate change challenges.</li>
                    <li>Expand our outreach to more regions and support more farming families.</li>
                </ul>
                <br />
            <button onClick={() => navigate(-1)} className="back-button">
                ⬅ Back
            </button>

            </section>
        </div>
    );
};

export default Aboutus;