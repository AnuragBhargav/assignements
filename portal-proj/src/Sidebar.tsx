import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
      </ul>
      {isLoggedIn && <button onClick={onLogout}>Logout</button>}
    </div>
  );
};

export default Sidebar;
