import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const TermsPage = () => {
    const sidebarLinks = [
        { href: '#general-terms', text: '1. General Terms' },
        { href: '#services-scope', text: '2. Services Scope' },
        { href: '#content-certification', text: '3. Course Content and Certification' },
        { href: '#payments-refunds', text: '4. Payments, EMI, and Refunds' },
        { href: '#attendance', text: '5. Attendance and Participation' },
        { href: '#ip-rights', text: '6. Intellectual Property Rights' },
        { href: '#service-delivery', text: '7. Service Delivery and Support' },
        { href: '#privacy', text: '8. Privacy and Data Protection' },
        { href: '#termination', text: '9. Termination of Enrollment' },
        { href: '#modifications', text: '10. Modifications to Terms' },
        { href: '#governing-law', text: '11. Governing Law' },
        { href: '#contact-us', text: '12. Contact Us' }
    ];

    return (
        <div className="legal-page">
            <Navbar />
            <div className="legal-container">
                <Sidebar links={sidebarLinks} />
                <main className="legal-content">
                    <header className="content-header">
                        <h1>Terms and Conditions of Code Codence Private Limited</h1>
                        <div className="welcome-text">
                            <h2>Welcome To <span className="highlight">CodeCodence</span></h2>
                            <p>Welcome to Code Codence! These Terms and Conditions outline the rules and regulations for enrolling in our courses, accessing our services, and using our website. By enrolling or using our services, you agree to comply with these terms.</p>
                        </div>
                    </header>

                    <section id="general-terms" className="content-section">
                        <h3>1. General Terms</h3>
                        <p>1.1. Enrollment is open to individuals who meet the prerequisites (if any) for the selected course or service.</p>
                        <p>1.2. All information provided during registration or service booking must be accurate and current.</p>
                        <p>1.3. Code Codence reserves the right to update course content, service structure, trainers, or delivery mode at any time.</p>
                        <p>1.4. Misconduct, abuse, plagiarism, or disruptive behavior may lead to suspension or termination without refund.</p>
                    </section>

                    <section id="services-scope" className="content-section">
                        <h3>2. Services Scope</h3>
                        <p>Code Codence Private Limited offers both Educational and Business Solutions, including but not limited to:</p>
                        <div className="sub-list">
                            <h4>A. For Students (Academic + Skill Building)</h4>
                            <ul>
                                <li>Course Enrollments & Certifications</li>
                                <li>Project Support (Academic, Major/Minor, Internship)</li>
                                <li>Resume, CV & Portfolio Design</li>
                                <li>AI Tool Guidance, LinkedIn Personal Branding</li>
                            </ul>
                            <h4>B. For Companies & Startups</h4>
                            <ul>
                                <li>AI-based Automation Solutions</li>
                                <li>Custom Web Development (Business, E-commerce, ERP, CRM)</li>
                                <li>Branding & Graphic Design</li>
                                <li>Digital Marketing Services</li>
                                <li>Generative AI Courses & Consultation</li>
                            </ul>
                        </div>
                    </section>

                    <section id="content-certification" className="content-section">
                        <h3>3. Course Content And Certification</h3>
                        <p>3.1. All learning materials are proprietary and must not be shared, copied, or resold.</p>
                        <p>3.2. Certifications are issued upon successful completion of all required modules, assessments, and projects.</p>
                        <p>3.3. While career assistance and job referrals may be provided, Code Codence does not guarantee job placement.</p>
                    </section>

                    <section id="payments-refunds" className="content-section">
                        <h3>4. Payments, EMI, And Refunds</h3>
                        <h4>4.1. Payment Options</h4>
                        <ul>
                            <li><strong>One-time Full Payment:</strong> Available for all courses and services. Students/clients may choose to pay the entire fee upfront before the course/service begins.</li>
                            <li><strong>EMI (Equated Monthly Installment):</strong>
                                <ul>
                                    <li>Available for select national and international students, depending on eligibility and course amount.</li>
                                    <li>EMI is processed via authorized financial partners, banks, or integrated payment gateways.</li>
                                    <li>Terms such as interest rate, tenure, and approval are governed solely by the lending institution.</li>
                                    <li>Once EMI is approved, students/clients are liable to honor the full schedule of installments. Failure to pay EMI on time may lead to suspension of services and/or additional late payment penalties.</li>
                                </ul>
                            </li>
                        </ul>
                        <h4>4.2. Payment Terms by Region</h4>
                        <ul>
                            <li><strong>Indian Students/Clients:</strong> Can pay via UPI, Net Banking, Cards, or EMI options supported by Indian banks.</li>
                            <li><strong>International Students/Clients:</strong> Can pay via International Credit/Debit Cards, PayPal, or international EMI options if supported by partner gateways. Currency conversion charges may apply.</li>
                        </ul>
                        <h4>4.3. Refund Policy</h4>
                        <p>Refunds are handled as per our separate Refund Policy, available on request or via our website. Once services or courses have been accessed (fully or partially), refund eligibility may vary.</p>
                        <h4>4.4. Discounts and Offers</h4>
                        <p>Discounts, offers, or scholarships cannot be combined unless stated explicitly.</p>
                    </section>

                    <section id="attendance" className="content-section">
                        <h3>5. Attendance And Participation</h3>
                        <p>5.1. Regular attendance and active participation are essential to get the best outcomes.</p>
                        <p>5.2. Students are responsible for timely submissions and attendance.</p>
                        <p>5.3. In case of emergencies, students must inform the institute to discuss alternate arrangements.</p>
                    </section>

                    <section id="ip-rights" className="content-section">
                        <h3>6. Intellectual Property Rights</h3>
                        <p>6.1. All course content, software tools, documentation, and visuals are the intellectual property of Code Codence or its partners.</p>
                        <p>6.2. Unauthorized use, reproduction, or redistribution is strictly prohibited and subject to legal action.</p>
                    </section>

                    <section id="service-delivery" className="content-section">
                        <h3>7. Service Delivery And Support</h3>
                        <p>7.1. While we strive to maintain consistent service quality, delays due to unforeseen technical or operational issues may occur.</p>
                        <p>7.2. Clients/students must cooperate and provide necessary inputs for timely delivery of services/projects.</p>
                        <p>7.3. All queries and issues will be resolved through our official support channels.</p>
                    </section>

                    <section id="privacy" className="content-section">
                        <h3>8. Privacy And Data Protection</h3>
                        <p>8.1. All user information is collected, processed, and stored as per our separate Privacy Policy.</p>
                        <p>8.2. Data is not shared with third parties without consent unless required by law.</p>
                        <p>8.3. Students/clients have the right to request updates or deletion of their data.</p>
                    </section>

                    <section id="termination" className="content-section">
                        <h3>9. Termination Of Enrollment Or Service</h3>
                        <p>9.1. Code Codence reserves the right to cancel services or course access in case of breach of terms or non-payment.</p>
                        <p>9.2. Clients or students may request cancellation, but refunds (if any) will be governed by our Refund Policy.</p>
                    </section>

                    <section id="modifications" className="content-section">
                        <h3>10. Modifications To Terms</h3>
                        <p>10.1. Code Codence may update these Terms and Conditions at any time.</p>
                        <p>10.2. Updates will be posted on the website or communicated via official channels. Continued usage implies acceptance.</p>
                    </section>

                    <section id="governing-law" className="content-section">
                        <h3>11. Governing Law</h3>
                        <p>These Terms and Conditions are governed by the laws of India. All disputes will fall under the exclusive jurisdiction of the courts in Delhi (Uttam Nagar).</p>
                    </section>

                    <section id="contact-us" className="content-section address-section">
                        <h3>12. Contact Us</h3>
                        <p>For any questions regarding these Terms and Conditions, please contact:</p>
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

export default TermsPage;
