import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      alert('Login failed: ' + err.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h2 className="text-xl mb-4">Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="block w-full mb-3 p-2 border" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="block w-full mb-3 p-2 border" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Login</button>
    </form>
  );
};

export default Login;
