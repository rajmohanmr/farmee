// File: src/components/ImageUpload.js
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './Diseasdet.css';  // Assuming you have some CSS styles in this file

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const navigate = useNavigate(); 
    
    const handleBackClick = () => {
        navigate('/home'); // Redirects to /home path
      };
  

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', file);

        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/detect_disease/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResult(response.data.result);  // Ensure the backend response matches this key
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Disease Detection</h1>
            <div className="upload-section">
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload} className="upload-button">
                    {loading ? 'Uploading...' : 'Upload and Detect'}
                </button>
            </div>
            {result && (
                <div className="result-section">
                    <h2>Prediction Result:</h2>
                    <p className="result">{result}</p>
                </div>
            )}
            <button className="back-button" onClick={handleBackClick}>Back to Home</button>
        </div>
    );
};

export default ImageUpload;
