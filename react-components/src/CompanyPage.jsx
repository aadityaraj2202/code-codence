import React from 'react';
import Navbar from './Navbar';
import Timeline from './Timeline';
import './style.css'; // Import your existing CSS

const CompanyPage = () => {
    // Policy data - matches the exact content from your HTML
    const policies = [
        {
            stepNumber: '01',
            title: 'Terms and Conditions',
            description: 'The fundamental rules and intellectual property guidelines for our training programs and business services.',
            link: '/terms',
            position: 'left'
        },
        {
            stepNumber: '02',
            title: 'Privacy Policy',
            description: 'Detailed information on how we handle, process, and protect your personal data in compliance with IT rules.',
            link: '/privacy',
            position: 'right'
        },
        {
            stepNumber: '03',
            title: 'Refund Policy',
            description: 'Clear and transparent procedures regarding service cancellations, transfers, and refund eligibility criteria.',
            link: '/refund',
            position: 'left'
        },
        {
            stepNumber: '04',
            title: 'Cancellation Policy',
            description: 'Procedures for terminating enrollments, EMI plans, and customized business solutions effectively.',
            link: '/cancellation',
            position: 'right'
        }
    ];

    return (
        <div className="company-page">
            <Navbar />

            <main className="company-hero">
                <div className="hero-content">
                    <h1>About Code Codence</h1>
                    <p>Empowering innovation through expert training and business solutions. We are committed to transparency, excellence, and your professional growth.</p>
                </div>
            </main>

            <Timeline policies={policies} />

            <footer className="company-footer">
                <div className="footer-container">
                    <p>&copy; 2026 Code Codence Private Limited. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default CompanyPage;
