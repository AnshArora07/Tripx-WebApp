// // src/components/Signup.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Tripx4 from '../Images/Tripx4.png'; // Assuming you have a logo or image

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState({});
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const { name, email, password, confirmPassword } = formData;
//     const newErrors = {};
    
//     if (!name) newErrors.name = 'Name is required';
//     if (!email) newErrors.email = 'Email is required';
//     if (!password) newErrors.password = 'Password is required';
//     if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       // Handle successful form submission
//       navigate('/'); // Redirect to home or another page
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   return (
//     <div className="signup-page bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="signup-container bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <div className="text-center mb-6">
//           <img src={Tripx4} alt="Tripx Logo" className="w-24 mx-auto mb-4" />
//           <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
//           <p className="text-gray-600">Create a new account to get started.</p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="John Doe"
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="example@example.com"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="********"
//             />
//             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="********"
//             />
//             {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-center text-gray-600 mt-4">
//           Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log In</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
