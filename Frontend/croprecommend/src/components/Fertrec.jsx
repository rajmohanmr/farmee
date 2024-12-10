import React, { useState } from 'react';
import './Fertrec.css';
import { useNavigate } from 'react-router-dom';

const FertilizerForm = () => {
    const [formData, setFormData] = useState({
        temperature: '0',
        humidity: '0',
        moisture: '0',
        soilType: '',
        cropType: '',
        nitrogen: '0',
        phosphorous: '0',
        potassium: '0'
    });
    const [recommendation, setRecommendation] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Convert all inputs to numbers to ensure valid data is sent
            const processedData = {
                ...formData,
                temperature: parseFloat(formData.temperature),
                humidity: parseFloat(formData.humidity),
                moisture: parseFloat(formData.moisture),
                nitrogen: parseFloat(formData.nitrogen),
                phosphorous: parseFloat(formData.phosphorous),
                potassium: parseFloat(formData.potassium),
            };

            const response = await fetch('http://localhost:8000/api/predict_fertilizer/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(processedData),
            });

            if (response.ok) {
                const result = await response.json();
                setRecommendation(result.fertilizer);
            } else {
                const errorResult = await response.json();
                console.error("Error fetching recommendation:", errorResult.error);
            }
        } catch (error) {
            console.error("Error fetching recommendation:", error);
        }
    };

    const navigate = useNavigate(); 
    
    const handleBackClick = () => {
        navigate('/home'); // Redirects to /home path
      };
  

    return (
        <div className="fertilizer-container1">
            <h2>Fertilizer Recommendation System</h2>
            <form onSubmit={handleSubmit} className="fertilizer-form">
                <div className="form-group">
                    <label>Temperature:</label>
                    <input type="number" name="temperature" onChange={handleChange} value={formData.temperature} required />
                </div>
                <div className="form-group">
                    <label>Humidity:</label>
                    <input type="number" name="humidity" onChange={handleChange} value={formData.humidity} required />
                </div>
                <div className="form-group">
                    <label>Moisture:</label>
                    <input type="number" name="moisture" onChange={handleChange} value={formData.moisture} required />
                </div>
                <div className="form-group">
                    <label>Soil Type:</label>
                    <select name="soilType" onChange={handleChange} value={formData.soilType} required>
                        <option value="">Select Soil Type</option>
                        <option value="0">Black</option>
                        <option value="1">Clayey</option>
                        <option value="2">Loamy</option>
                        <option value="3">Red</option>
                        <option value="4">Sandy</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Crop Type:</label>
                    <select name="cropType" onChange={handleChange} value={formData.cropType} required>
                        <option value="">Select Crop Type</option>
                        <option value="0">Barley</option>
                        <option value="1">Cotton</option>
                        <option value="2">Ground Nuts</option>
                        <option value="3">Maize</option>
                        <option value="4">Millets</option>
                        <option value="5">Oil seeds</option>
                        <option value="6">Paddy</option>
                        <option value="7">Pulses</option>
                        <option value="8">Sugarcane</option>
                        <option value="9">Tobacco</option>
                        <option value="10">Wheat</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Nitrogen:</label>
                    <input type="number" name="nitrogen" onChange={handleChange} value={formData.nitrogen} required />
                </div>
                <div className="form-group">
                    <label>Phosphorous:</label>
                    <input type="number" name="phosphorous" onChange={handleChange} value={formData.phosphorous} required />
                </div>
                <div className="form-group">
                    <label>Potassium:</label>
                    <input type="number" name="potassium" onChange={handleChange} value={formData.potassium} required />
                </div>
                <button type="submit" className="submit-button">Get Recommendation</button>
            </form>
            {recommendation && <h3 className="recommendation">Recommended Fertilizer: {recommendation}</h3>}
            <button className="back-button" onClick={handleBackClick}>Back to Home</button>
        </div>
    );
};

export default FertilizerForm;
