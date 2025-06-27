import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', formData);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      alert('Registration failed: ' + err.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h2 className="text-xl mb-4">Register</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="block w-full mb-3 p-2 border" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="block w-full mb-3 p-2 border" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="block w-full mb-3 p-2 border" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
  );
};

export default Register;
