import React, { createContext, useContext, useState } from 'react';

// Create Context for Authentication
const AuthContext = createContext();

// Custom Hook to use Authentication Context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap around the App component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 'null' means no user is logged in

  const login = (userData) => {
    setUser(userData); // Set user data after login
    localStorage.setItem('user', JSON.stringify(userData)); // Store user in localStorage
  };

  const logout = () => {
    setUser(null); // Remove user data
    localStorage.removeItem('user'); // Clear localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
