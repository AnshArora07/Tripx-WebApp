import React, { useState, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './context/UserContext';
import sea from '../Images/sea.jpg';

const Login = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Redirect if already logged in
    if (user) {
        return <Navigate to="/" />;
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setUser(data.user);
                localStorage.setItem('user', JSON.stringify(data.user));

                toast.success('Logged in successfully!', { position: 'top-right', autoClose: 3000 });

                setTimeout(() => navigate('/'), 3000);
            } else {
                setError(data.error || 'Invalid credentials');
                toast.error(data.error || 'Invalid credentials', { position: 'top-right', autoClose: 3000 });
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Something went wrong.');
            toast.error('Something went wrong.', { position: 'top-right', autoClose: 3000 });
        }
    };

    const SignupHandler = () => navigate('/signup');

    return (
        <div
            className="flex justify-center items-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${sea})` }}
        >
            <form id="loginForm" onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Log In
                </button>

                {/* New Demo Login Button */}
                <button
                    type="button"
                    onClick={() => {
                        setEmail("demo1@tripx.com");   // demo email
                        setPassword("demo1234");       // demo password
                        setTimeout(() => {
                            document.getElementById("loginForm").requestSubmit();
                        }, 200);
                    }}
                    className="w-full mt-3 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Login as Demo User
                </button>

                <p className="text-center text-gray-600 mt-4">
                    New User?{' '}
                    <span className="text-lightbBlue500 cursor-pointer hover:text-lightbBlue300" onClick={SignupHandler}>
                        Sign Up
                    </span>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
