import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Homepage from './Pages/HomePage';
import Welcome from './Pages/Welcome';
import ProtectRoutes from './components/ProtectRoutes';
import OpenRoutes from './components/OpenRoutes';
import { ToastProvider } from './context/ToastContext';
// import AuthenticatedLayout from './components/AuthenticatedLayout';
const App = () => {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route
            path="/"
            element={
              //required accessToken to get this page
              <ProtectRoutes>
                <Homepage/>
              </ProtectRoutes>
            }
          />

          <Route
            path="/login"
            element={
              <OpenRoutes>
                <Login />
              </OpenRoutes>
            }
          />

          <Route
            path="/register"
            element={
              <OpenRoutes>
                <Register />
              </OpenRoutes>
            }
          />
        </Routes>
      </Router>
    </ToastProvider>
  );
};

export default App;