import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import map from '../Images/map.jpg';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword } = formData;
    const newErrors = {};

    // Name validation (no empty or numeric names)
    if (!name) newErrors.name = 'Name is required';
    else if (!/^[a-zA-Z\s]+$/.test(name)) newErrors.name = 'Name must only contain letters and spaces';

    // Email validation (basic regex check for proper format)
    const emailRegex = /^(?=[a-zA-Z0-9._%+-]*[a-zA-Z])(?=[a-zA-Z0-9._%+-]*\d)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Please enter a valid email address';

    // Password validation (at least 8 characters, contains numbers and letters)
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    else if (!/(?=.*[0-9])/.test(password)) newErrors.password = 'Password must contain at least one number';
    else if (!/(?=.*[a-zA-Z])/.test(password)) newErrors.password = 'Password must contain at least one letter';

    // Confirm password validation
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    return newErrors;
  };

  const loginHandler = () => {
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success('Sign up successful! Redirecting to login...');
          navigate('/login');
        } else {
          const result = await response.json();
          if (result.error === 'User with this email already exists') {
            setErrors({ email: 'This email is already registered' });
          } else {
            setErrors({ server: result.error });
          }
        }
      } catch (error) {
        setErrors({ server: 'Server error' });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div
      className="signup-page flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${map})`,
      }}
    >
      <div className="signup-container bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-5 ">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-600">Create a new account to get started.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="example123@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="********"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="********"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {errors.server && <p className="text-red-500 text-sm mt-1">{errors.server}</p>}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <span className="text-lightbBlue cursor-pointer" onClick={loginHandler}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
