import type { Metadata } from "next";
import LegalSidebar from "@/components/LegalSidebar";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Terms & Conditions — Code Codence",
    description:
        "Terms and Conditions of Code Codence Private Limited. Rules, enrollment guidelines, IP rights, payment terms, and governing law.",
};

const sidebarLinks = [
    { href: "#general-terms", text: "1. General Terms" },
    { href: "#services-scope", text: "2. Services Scope" },
    { href: "#content-certification", text: "3. Course Content and Certification" },
    { href: "#payments-refunds", text: "4. Payments, EMI, and Refunds" },
    { href: "#attendance", text: "5. Attendance and Participation" },
    { href: "#ip-rights", text: "6. Intellectual Property Rights" },
    { href: "#service-delivery", text: "7. Service Delivery and Support" },
    { href: "#privacy", text: "8. Privacy and Data Protection" },
    { href: "#termination", text: "9. Termination of Enrollment" },
    { href: "#modifications", text: "10. Modifications to Terms" },
    { href: "#governing-law", text: "11. Governing Law" },
    { href: "#contact-us", text: "12. Contact Us" },
];

export default function TermsPage() {
    return (
        <div className={styles.legalPage}>
            <div className={styles.legalContainer}>
                <LegalSidebar links={sidebarLinks} />
                <main className={styles.legalContent}>
                    <header className={styles.contentHeader}>
                        <h1>Terms and Conditions of Code Codence Private Limited</h1>
                        <div className={styles.welcomeText}>
                            <h2>
                                Welcome To <span className={styles.highlight}>CodeCodence</span>
                            </h2>
                            <p>
                                Welcome to Code Codence! These Terms and Conditions outline the rules and
                                regulations for enrolling in our courses, accessing our services, and using our
                                website. By enrolling or using our services, you agree to comply with these terms.
                            </p>
                        </div>
                    </header>

                    <section id="general-terms" className={styles.contentSection}>
                        <h3>1. General Terms</h3>
                        <p>1.1. Enrollment is open to individuals who meet the prerequisites (if any) for the selected course or service.</p>
                        <p>1.2. All information provided during registration or service booking must be accurate and current.</p>
                        <p>1.3. Code Codence reserves the right to update course content, service structure, trainers, or delivery mode at any time.</p>
                        <p>1.4. Misconduct, abuse, plagiarism, or disruptive behavior may lead to suspension or termination without refund.</p>
                    </section>

                    <section id="services-scope" className={styles.contentSection}>
                        <h3>2. Services Scope</h3>
                        <p>Code Codence Private Limited offers both Educational and Business Solutions, including but not limited to:</p>
                        <div className={styles.subList}>
                            <h4>A. For Students (Academic + Skill Building)</h4>
                            <ul>
                                <li>Course Enrollments &amp; Certifications</li>
                                <li>Project Support (Academic, Major/Minor, Internship)</li>
                                <li>Resume, CV &amp; Portfolio Design</li>
                                <li>AI Tool Guidance, LinkedIn Personal Branding</li>
                            </ul>
                            <h4>B. For Companies &amp; Startups</h4>
                            <ul>
                                <li>AI-based Automation Solutions</li>
                                <li>Custom Web Development (Business, E-commerce, ERP, CRM)</li>
                                <li>Branding &amp; Graphic Design</li>
                                <li>Digital Marketing Services</li>
                                <li>Generative AI Courses &amp; Consultation</li>
                            </ul>
                        </div>
                    </section>

                    <section id="content-certification" className={styles.contentSection}>
                        <h3>3. Course Content And Certification</h3>
                        <p>3.1. All learning materials are proprietary and must not be shared, copied, or resold.</p>
                        <p>3.2. Certifications are issued upon successful completion of all required modules, assessments, and projects.</p>
                        <p>3.3. While career assistance and job referrals may be provided, Code Codence does not guarantee job placement.</p>
                    </section>

                    <section id="payments-refunds" className={styles.contentSection}>
                        <h3>4. Payments, EMI, And Refunds</h3>
                        <h4>4.1. Payment Options</h4>
                        <ul>
                            <li><strong>One-time Full Payment:</strong> Available for all courses and services.</li>
                            <li>
                                <strong>EMI (Equated Monthly Installment):</strong>
                                <ul>
                                    <li>Available for select national and international students.</li>
                                    <li>EMI is processed via authorized financial partners, banks, or integrated payment gateways.</li>
                                    <li>Terms such as interest rate, tenure, and approval are governed solely by the lending institution.</li>
                                    <li>Once EMI is approved, students/clients are liable to honor the full schedule of installments.</li>
                                </ul>
                            </li>
                        </ul>
                        <h4>4.2. Payment Terms by Region</h4>
                        <ul>
                            <li><strong>Indian Students/Clients:</strong> Can pay via UPI, Net Banking, Cards, or EMI options supported by Indian banks.</li>
                            <li><strong>International Students/Clients:</strong> Can pay via International Credit/Debit Cards, PayPal, or international EMI options. Currency conversion charges may apply.</li>
                        </ul>
                        <h4>4.3. Refund Policy</h4>
                        <p>Refunds are handled as per our separate Refund Policy. Once services or courses have been accessed, refund eligibility may vary.</p>
                        <h4>4.4. Discounts and Offers</h4>
                        <p>Discounts, offers, or scholarships cannot be combined unless stated explicitly.</p>
                    </section>

                    <section id="attendance" className={styles.contentSection}>
                        <h3>5. Attendance And Participation</h3>
                        <p>5.1. Regular attendance and active participation are essential to get the best outcomes.</p>
                        <p>5.2. Students are responsible for timely submissions and attendance.</p>
                        <p>5.3. In case of emergencies, students must inform the institute to discuss alternate arrangements.</p>
                    </section>

                    <section id="ip-rights" className={styles.contentSection}>
                        <h3>6. Intellectual Property Rights</h3>
                        <p>6.1. All course content, software tools, documentation, and visuals are the intellectual property of Code Codence or its partners.</p>
                        <p>6.2. Unauthorized use, reproduction, or redistribution is strictly prohibited and subject to legal action.</p>
                    </section>

                    <section id="service-delivery" className={styles.contentSection}>
                        <h3>7. Service Delivery And Support</h3>
                        <p>7.1. While we strive to maintain consistent service quality, delays due to unforeseen technical or operational issues may occur.</p>
                        <p>7.2. Clients/students must cooperate and provide necessary inputs for timely delivery of services/projects.</p>
                        <p>7.3. All queries and issues will be resolved through our official support channels.</p>
                    </section>

                    <section id="privacy" className={styles.contentSection}>
                        <h3>8. Privacy And Data Protection</h3>
                        <p>8.1. All user information is collected, processed, and stored as per our separate Privacy Policy.</p>
                        <p>8.2. Data is not shared with third parties without consent unless required by law.</p>
                        <p>8.3. Students/clients have the right to request updates or deletion of their data.</p>
                    </section>

                    <section id="termination" className={styles.contentSection}>
                        <h3>9. Termination Of Enrollment Or Service</h3>
                        <p>9.1. Code Codence reserves the right to cancel services or course access in case of breach of terms or non-payment.</p>
                        <p>9.2. Clients or students may request cancellation, but refunds (if any) will be governed by our Refund Policy.</p>
                    </section>

                    <section id="modifications" className={styles.contentSection}>
                        <h3>10. Modifications To Terms</h3>
                        <p>10.1. Code Codence may update these Terms and Conditions at any time.</p>
                        <p>10.2. Updates will be posted on the website or communicated via official channels. Continued usage implies acceptance.</p>
                    </section>

                    <section id="governing-law" className={styles.contentSection}>
                        <h3>11. Governing Law</h3>
                        <p>These Terms and Conditions are governed by the laws of India. All disputes will fall under the exclusive jurisdiction of the courts in Delhi (Uttam Nagar).</p>
                    </section>

                    <section id="contact-us" className={`${styles.contentSection} ${styles.addressSection}`}>
                        <h3>12. Contact Us</h3>
                        <p>For any questions regarding these Terms and Conditions, please contact:</p>
                        <ul className={styles.contactList}>
                            <li><span className={styles.icon}>📍</span> Code Codence Private Limited, Uttam Nagar, Delhi</li>
                            <li><span className={styles.icon}>📞</span> +91-9122499926</li>
                            <li><span className={styles.icon}>📧</span> support@codecodence.com | contact@codecodence.com</li>
                            <li><span className={styles.icon}>🌐</span> www.codecodence.com</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
}
