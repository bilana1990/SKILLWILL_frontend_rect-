// pages/RegisterPage.js
import React, { useState } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Registration logic here
        alert('User registered!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterPage;