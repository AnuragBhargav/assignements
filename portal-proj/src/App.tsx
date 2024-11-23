import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import UploadPage from './UploadPage';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './styles.css'

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const loginHandler = () => {
    setIsAuthenticated(true);
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Toggle sidebar state
  };

  return (
    <Router>
      <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar">
          <div className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </div>
          <div className="sidebar-links">
            <Link to="/">Home</Link>
            <Link to="/upload">Upload</Link>
          </div>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={loginHandler} />} />
            <Route
              path="/upload"
              element={isAuthenticated ? <UploadPage /> : <Login onLogin={loginHandler} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
