import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
    const navigate = useNavigate();

    // Handle the logout process
    const handleLogout = () => {
        // Clear any stored authentication tokens or user data
        localStorage.removeItem('authToken'); // Assuming token is stored in localStorage
        // Redirect to login page after logout
        navigate('/');
    };

    // Cancel and return to the previous page
    const handleCancel = () => {
        navigate(-1); // Goes back to the previous page
    };

    return (
        <div className="logout-page">
            <h2>Are you sure you want to log out?</h2>
            <div className="logout-buttons">
                <button onClick={handleLogout} className="logout-confirm">Yes, Log Out</button>
                <button onClick={handleCancel} className="logout-cancel">Cancel</button>
            </div>
        </div>
    );
};

export default Logout;