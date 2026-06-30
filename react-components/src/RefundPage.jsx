import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const RefundPage = () => {
    const sidebarLinks = [
        { href: '#eligibility', text: '1. Eligibility For Refund' },
        { href: '#non-refundable', text: '2. Non-Refundable Situations' },
        { href: '#criteria', text: '3. Refund Amount Criteria' },
        { href: '#process', text: '4. Refund Process' },
        { href: '#emi-vs-full', text: '5. EMI vs. Full Payment' },
        { href: '#transfers', text: '6. Service Transfers' },
        { href: '#exceptional', text: '7. Exceptional Circumstances' },
        { href: '#contact', text: '8. Contact For Refund' }
    ];

    return (
        <div className="legal-page">
            <Navbar />
            <div className="legal-container">
                <Sidebar links={sidebarLinks} />
                <main className="legal-content">
                    <header className="content-header">
                        <h1>Refund Policy of Code Codence Private Limited</h1>
                        <div className="welcome-text">
                            <h2>Welcome To <span className="highlight">CodeCodence</span></h2>
                            <p>At Code Codence Private Limited, we are committed to delivering high-quality education and professional services. This Refund Policy applies to all enrolled courses, training programs, and service offerings including but not limited to project development, AI solutions, web development, digital marketing, and other customized services.</p>
                        </div>
                    </header>

                    <section id="eligibility" className="content-section">
                        <h3>1. Eligibility For Refund</h3>
                        <p>Refunds are eligible under the following conditions:</p>
                        <ul>
                            <li><strong>A. Student or Client-initiated Cancellation:</strong> If cancellation is requested 7 or more days before the start of a course, batch, or service engagement, a refund may be processed as per the refund amount criteria (see section 3).</li>
                            <li><strong>B. Institute-initiated Cancellation:</strong> If Code Codence is unable to start or continue a course or service due to unforeseen internal reasons, 100% refund will be processed.</li>
                        </ul>
                    </section>

                    <section id="non-refundable" className="content-section">
                        <h3>2. Non-Refundable Situations</h3>
                        <p>Refunds will not be granted in the following circumstances:</p>
                        <ul>
                            <li>Cancellation is requested after the course, project, or service has started.</li>
                            <li>The student or client has partially attended the course or consumed part of the service.</li>
                            <li>Course materials or digital assets have been accessed or downloaded.</li>
                            <li>Cancellation due to technical or personal reasons from the student/client side.</li>
                            <li>If the service has been fully or partially delivered as per the agreement or milestones.</li>
                            <li>In the case of EMI-based enrollments, once EMI is approved and processed, no refund will be entertained regardless of usage.</li>
                        </ul>
                    </section>

                    <section id="contact" className="content-section address-section">
                        <h3>8. Contact For Refund</h3>
                        <p>For refund-related queries, please contact:</p>
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

export default RefundPage;
