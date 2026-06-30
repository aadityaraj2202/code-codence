import React from 'react';

const Sidebar = ({ links }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-box">
                <nav className="sidebar-nav">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`sidebar-link ${index === 0 ? 'active' : ''}`}
                        >
                            {link.text}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
