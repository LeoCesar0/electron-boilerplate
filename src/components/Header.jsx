import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div>
            <Link to="/">Electron React App</Link>
          </div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
