import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-background">
                    <div className={`auth-form-container ${isLogin ? 'login' : 'signup'}`}>
                        {isLogin ? (
                            <Login toggleForm={toggleForm} />
                        ) : (
                            <Signup toggleForm={toggleForm} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Login = ({ toggleForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/auth/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Login successful');
                localStorage.setItem('access_token', data.tokens.access);
                localStorage.setItem('refresh_token', data.tokens.refresh);
                navigate('/home'); // Redirect to the home page after successful login
            } else {
                alert(data.error || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleLogin} className="auth-form">
            <h2>LOGIN</h2>
            <div className="form-group1">
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="form-group1">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="auth-button">Login</button>
            <p onClick={toggleForm} className="toggle-link">Don't have an account? Sign Up</p>
        </form>
    );
};

const Signup = ({ toggleForm }) => {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/auth/signup/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, phone, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Signup successful');
                toggleForm(); // Show login form after successful signup
                navigate('/home'); // Redirect to home after signup
            } else {
                alert(data.error || 'Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSignup} className="auth-form">
            <h2>SIGNUP</h2>
            <div className="form-group1">
                <label>UserName</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="form-group1">
                <label>Phone Number</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className="form-group1">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="auth-button">Signup</button>
            <p onClick={toggleForm} className="toggle-link">Already have an account? Login</p>
        </form>
    );
};

export default Auth;
