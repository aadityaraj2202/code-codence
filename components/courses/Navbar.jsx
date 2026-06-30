import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">📚 CourseDash</Link>
      </div>

      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>

        {user ? (
          <>
            {user.role === "trainer" || user.role === "admin" ? (
              <li>
                <Link to="/courses/new" onClick={() => setMenuOpen(false)}>
                  + New Course
                </Link>
              </li>
            ) : null}
            <li>
              <Link to="/my-courses" onClick={() => setMenuOpen(false)}>
                My Courses
              </Link>
            </li>
            <li className="navbar-user">
              <span className="user-avatar">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} />
                ) : (
                  <span className="avatar-placeholder">{user.name[0].toUpperCase()}</span>
                )}
              </span>
              <span className="user-name">{user.name}</span>
              <span className="user-role badge">{user.role}</span>
            </li>
            <li>
              <button className="btn btn-outline" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            <li>
              <Link to="/register" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
