import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './Croprec.css';

function Croprec() {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });
  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/recommend-crop/', formData);
      setResult(response.data.crop);
    } catch (error) {
      console.error('Error making prediction', error);
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleBackClick = () => {
    navigate('/home'); // Redirects to /home path
  };

  return (
    
    <div className="app-container1">
      <button className="info-button" onClick={togglePopup}>i</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Input Details</h2>
            <p>N - Ratio of Nitrogen content in soil</p>
            <p>P - Ratio of Phosphorous content in soil</p>
            <p>K - Ratio of Potassium content in soil</p>
            <p>Temperature - Temperature in degree Celsius</p>
            <p>Humidity - Relative humidity in %</p>
            <p>pH - pH value of the soil</p>
            <p>Rainfall - Rainfall in mm</p>
            <button className="close-button" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
      <h1>Crop Recommendation System</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Nitrogen (N): </label>
          <input type="number" name="N" value={formData.N} onChange={handleChange} min="0" max="120" step="0.01" required />
        </div>
        <div className="form-group">
          <label>Phosphorus (P): </label>
          <input type="number" name="P" value={formData.P} onChange={handleChange} min="0" max="100" step="0.01" required />
        </div>
        <div className="form-group">
          <label>Potassium (K): </label>
          <input type="number" name="K" value={formData.K} onChange={handleChange} min="0" max="80" step="0.01" required />
        </div>
        <div className="form-group">
          <label>Temperature: </label>
          <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} min="0" max="50" step="0.01" required />
        </div>
        <div className="form-group">
          <label>Humidity: </label>
          <input type="number" name="humidity" value={formData.humidity} onChange={handleChange} min="0" max="100" step="0.01" required />
        </div>
        <div className="form-group">
          <label>pH Level: </label>
          <input type="number" name="ph" value={formData.ph} onChange={handleChange} min="0" max="8" step="0.01" required />
        </div>
        <div className="form-group">
          <label>Rainfall: </label>
          <input type="number" name="rainfall" value={formData.rainfall} onChange={handleChange} min="0" max="300" step="0.01" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {result && (
        <div className="result-box">
          <h2>Recommended Crop</h2>
          <p className="result">{result}</p>
        </div>
      )}
      <button className="back-button" onClick={handleBackClick}>Back to Home</button>
    </div>
   
  );
}

export default Croprec;
