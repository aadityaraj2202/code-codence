import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PrivacyPage = () => {
    const sidebarLinks = [
        { href: '#info-collect', text: '1. Information We Collect' },
        { href: '#how-use', text: '2. How We Use Information' },
        { href: '#data-sharing', text: '3. Data Sharing & Disclosure' },
        { href: '#data-security', text: '4. Data Security' },
        { href: '#your-rights', text: '5. Your Rights' },
        { href: '#cookies', text: '6. Cookies & Tracking Tools' },
        { href: '#third-party', text: '7. Third-Party Links' },
        { href: '#international', text: '8. International Users' },
        { href: '#policy-updates', text: '9. Policy Updates' },
        { href: '#contact', text: '10. Contact Us' }
    ];

    return (
        <div className="legal-page">
            <Navbar />
            <div className="legal-container">
                <Sidebar links={sidebarLinks} />
                <main className="legal-content">
                    <header className="content-header">
                        <h1>Privacy Policy of Code Codence Private Limited</h1>
                        <div className="welcome-text">
                            <h2>Welcome To <span className="highlight">CodeCodence</span></h2>
                            <p>At Code Codence, your privacy is our priority. We are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and secure your information when you interact with our website, enroll in our programs, or use our digital services.</p>
                        </div>
                    </header>

                    <section id="info-collect" className="content-section">
                        <h3>1. Information We Collect</h3>
                        <p>We may collect and process the following types of information:</p>
                        <ul>
                            <li><strong>Personal Information:</strong> Full Name, Email ID, Contact Number, Address, Gender, Nationality, and Identity proofs (where applicable).</li>
                            <li><strong>Academic Information:</strong> Educational background, resumes, career goals, interests and experiences, and skill sets.</li>
                            <li><strong>Payment Information:</strong> Processed through secure third-party gateways. We do not store full credit card/UPI/bank credentials.</li>
                            <li><strong>Usage Data:</strong> IP address, browser type, device type, OS, geolocation, click behavior, and usage patterns through cookies/web beacons.</li>
                            <li><strong>Media Content:</strong> Project/internship/interview recordings, and screenshots generated during web development, courses, or events etc.</li>
                        </ul>
                    </section>

                    <section id="how-use" className="content-section">
                        <h3>2. How We Use Your Information</h3>
                        <p>We use your data for the following purposes:</p>
                        <ul>
                            <li>Providing services, digital marketing, assistance, and consultations.</li>
                            <li>Account creation and management on our platform.</li>
                            <li>Payment processing (invoices and EMI verification if opted).</li>
                            <li>Communicating updates (SMS, Email, Phone, WhatsApp).</li>
                            <li>Platform improvement (user experience, performance optimization).</li>
                            <li>Marketing & promotions (you may opt-out at any time).</li>
                            <li>Legal compliance and record keeping.</li>
                        </ul>
                    </section>

                    <section id="contact" className="content-section address-section">
                        <h3>10. Contact Us</h3>
                        <p>For privacy-related questions, please contact:</p>
                        <ul className="contact-list">
                            <li><span className="icon">📍</span> Code Codence Private Limited, Uttam Nagar, Delhi</li>
                            <li><span className="icon">📞</span> +91-9122499926</li>
                            <li><span className="icon">📧</span> support@codecodence.com | contact@codecodence.com</li>
                            <li><span className="icon">🌐</span> www.codecodence.com</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default PrivacyPage;
