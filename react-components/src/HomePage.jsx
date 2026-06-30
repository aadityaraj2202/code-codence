import React from 'react';
import Navbar from './Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <main className="content">
                <section className="hero">
                    <h1>Experience Seamless Navigation</h1>
                    <p>A clean, professional dropdown menu designed for modern businesses.</p>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
