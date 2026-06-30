import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const CancellationPage = () => {
    const sidebarLinks = [
        { href: '#client-initiated', text: '1. Client-Initiated Cancellation' },
        { href: '#institute-initiated', text: '2. Institute-Initiated Cancellation' },
        { href: '#customized-services', text: '3. Customized Services' },
        { href: '#emi-financing', text: '4. EMI and Financing' },
        { href: '#international', text: '5. International Cancellations' },
        { href: '#how-to-cancel', text: '6. How To Cancel' },
        { href: '#processing-time', text: '7. Processing Time' },
        { href: '#contact', text: '8. Cancellation Support' }
    ];

    return (
        <div className="legal-page">
            <Navbar />
            <div className="legal-container">
                <Sidebar links={sidebarLinks} />
                <main className="legal-content">
                    <header className="content-header">
                        <h1>Cancellation Policy of Code Codence Private Limited</h1>
                        <div className="welcome-text">
                            <h2>Welcome To <span className="highlight">CodeCodence</span></h2>
                            <p>At Code Codence Private Limited, we value your time and investment. Our cancellation policy ensures fairness and clarity for both national and international clients/students, across one-time payments and EMI plans. By enrolling in our courses or services, you agree to abide by the following terms:</p>
                        </div>
                    </header>

                    <section id="client-initiated" className="content-section">
                        <h3>1. Course And Service Cancellation (Client/Student-Initiated)</h3>
                        <h4>A. Before Start Date</h4>
                        <ul>
                            <li><strong>Cancellation 7 or more days in advance:</strong> Eligible for 100% refund (excluding any third-party transaction or EMI processing charges).</li>
                            <li><strong>Cancellation less than 7 days in advance:</strong> Eligible for 50% refund.
                                <p><em>Note: For EMI users, refunds (if any) will be processed after deducting the amount already paid and any non-refundable financial/processing fees.</em></p>
                            </li>
                        </ul>
                        <h4>B. After Start Date</h4>
                        <ul>
                            <li>No cancellation or refund is allowed once the course or service has begun, regardless of participation level.</li>
                            <li>This applies to both one-time and EMI payment users.</li>
                        </ul>
                    </section>

                    <section id="institute-initiated" className="content-section">
                        <h3>2. Course And Service Cancellation (Institute-Initiated)</h3>
                        <ul>
                            <li>If Code Codence cancels a course, batch, or project due to unforeseen reasons (e.g., faculty unavailability, technical issues, or insufficient enrollments), a 100% refund will be issued.</li>
                            <li>For EMI users, the EMI will be canceled at the payment gateway (if not fully processed), or refund will be given for paid EMIs.</li>
                        </ul>
                    </section>

                    <section id="contact" className="content-section address-section">
                        <h3>8. Cancellation Support</h3>
                        <p>For cancellation assistance, please contact:</p>
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

export default CancellationPage;
