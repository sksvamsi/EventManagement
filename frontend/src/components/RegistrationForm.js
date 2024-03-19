import React, { useState } from 'react';
import axios from 'axios';
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="registration-form">
    <form onSubmit={handleSubmit} className='form-style'>
      <input type="text" name="username" placeholder="Username" className='usrname' value={formData.username} onChange={handleChange} /><br/>
      <input type="email" name="email" placeholder="Email" className='usrname' value={formData.email} onChange={handleChange} /><br/>
      <input type="password" name="password" className='usrname' placeholder="Password" value={formData.password} onChange={handleChange} /><br/>
      <button type="submit" className='btn' >Register</button>
    </form>
    </div>
  );
};

export default RegistrationForm;
