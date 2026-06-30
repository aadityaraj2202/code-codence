import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">CodeCodence</Link>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li
                        className={`dropdown ${isDropdownOpen ? 'active' : ''}`}
                        id="companyDropdown"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <Link
                            to="/company"
                            className="dropbtn"
                            onClick={(e) => {
                                // Allow link to work on mobile
                                if (window.innerWidth <= 768) {
                                    e.preventDefault();
                                    handleDropdownToggle();
                                }
                            }}
                        >
                            Company
                            <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd" />
                            </svg>
                        </Link>
                        <div className="dropdown-content">
                            <Link to="/terms">Terms and Conditions</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/refund">Refund Policy</Link>
                            <Link to="/cancellation">Cancellation Policy</Link>
                        </div>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
