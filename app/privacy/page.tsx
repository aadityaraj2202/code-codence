import type { Metadata } from "next";
import LegalSidebar from "@/components/LegalSidebar";
import styles from "../terms/page.module.css";

export const metadata: Metadata = {
    title: "Privacy Policy — Code Codence",
    description:
        "Privacy Policy of Code Codence Private Limited. How we collect, use, store, and secure your personal information.",
};

const sidebarLinks = [
    { href: "#info-collect", text: "1. Information We Collect" },
    { href: "#how-use", text: "2. How We Use Information" },
    { href: "#data-sharing", text: "3. Data Sharing & Disclosure" },
    { href: "#data-security", text: "4. Data Security" },
    { href: "#your-rights", text: "5. Your Rights" },
    { href: "#cookies", text: "6. Cookies & Tracking Tools" },
    { href: "#third-party", text: "7. Third-Party Links" },
    { href: "#international", text: "8. International Users" },
    { href: "#policy-updates", text: "9. Policy Updates" },
    { href: "#contact", text: "10. Contact Us" },
];

export default function PrivacyPage() {
    return (
        <div className={styles.legalPage}>
            <div className={styles.legalContainer}>
                <LegalSidebar links={sidebarLinks} />
                <main className={styles.legalContent}>
                    <header className={styles.contentHeader}>
                        <h1>Privacy Policy of Code Codence Private Limited</h1>
                        <div className={styles.welcomeText}>
                            <h2>Welcome To <span className={styles.highlight}>CodeCodence</span></h2>
                            <p>
                                At Code Codence, your privacy is our priority. We are committed to protecting your
                                personal data. This Privacy Policy explains how we collect, use, store, and secure
                                your information when you interact with our website, enroll in our programs, or use
                                our digital services.
                            </p>
                        </div>
                    </header>

                    <section id="info-collect" className={styles.contentSection}>
                        <h3>1. Information We Collect</h3>
                        <p>We may collect and process the following types of information:</p>
                        <ul>
                            <li><strong>Personal Information:</strong> Full Name, Email ID, Contact Number, Address, Gender, Nationality, and Identity proofs (where applicable).</li>
                            <li><strong>Academic Information:</strong> Educational background, resumes, career goals, interests and experiences, and skill sets.</li>
                            <li><strong>Payment Information:</strong> Processed through secure third-party gateways. We do not store full credit card/UPI/bank credentials.</li>
                            <li><strong>Usage Data:</strong> IP address, browser type, device type, OS, geolocation, click behavior, and usage patterns through cookies/web beacons.</li>
                            <li><strong>Media Content:</strong> Project/internship/interview recordings, and screenshots generated during web development, courses, or events.</li>
                        </ul>
                    </section>

                    <section id="how-use" className={styles.contentSection}>
                        <h3>2. How We Use Your Information</h3>
                        <p>We use your data for the following purposes:</p>
                        <ul>
                            <li>Providing services, digital marketing, assistance, and consultations.</li>
                            <li>Account creation and management on our platform.</li>
                            <li>Payment processing (invoices and EMI verification if opted).</li>
                            <li>Communicating updates (SMS, Email, Phone, WhatsApp).</li>
                            <li>Platform improvement (user experience, performance optimization).</li>
                            <li>Marketing &amp; promotions (you may opt-out at any time).</li>
                            <li>Legal compliance and record keeping.</li>
                        </ul>
                    </section>

                    <section id="data-sharing" className={styles.contentSection}>
                        <h3>3. Data Sharing &amp; Disclosure</h3>
                        <p>We do not sell or rent your personal information. We may share data with:</p>
                        <ul>
                            <li>Service providers (payment gateways, cloud platforms) under strict NDAs.</li>
                            <li>Legal authorities if required by law or court order.</li>
                            <li>Business partners only with your explicit consent.</li>
                        </ul>
                    </section>

                    <section id="data-security" className={styles.contentSection}>
                        <h3>4. Data Security</h3>
                        <p>We implement industry-standard security measures including SSL encryption, secure servers, and access controls to protect your data from unauthorized access, alteration, or disclosure.</p>
                    </section>

                    <section id="your-rights" className={styles.contentSection}>
                        <h3>5. Your Rights</h3>
                        <ul>
                            <li>Access your personal data we hold.</li>
                            <li>Request correction of inaccurate data.</li>
                            <li>Request deletion of your data (subject to legal obligations).</li>
                            <li>Opt-out of marketing communications at any time.</li>
                            <li>Lodge a complaint with the relevant data protection authority.</li>
                        </ul>
                    </section>

                    <section id="cookies" className={styles.contentSection}>
                        <h3>6. Cookies &amp; Tracking Tools</h3>
                        <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You may disable cookies in your browser settings, though this may affect some site features.</p>
                    </section>

                    <section id="third-party" className={styles.contentSection}>
                        <h3>7. Third-Party Links</h3>
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies separately.</p>
                    </section>

                    <section id="international" className={styles.contentSection}>
                        <h3>8. International Users</h3>
                        <p>If you access our services from outside India, please be aware that your data may be transferred to and processed in India. By using our services, you consent to this transfer.</p>
                    </section>

                    <section id="policy-updates" className={styles.contentSection}>
                        <h3>9. Policy Updates</h3>
                        <p>This Privacy Policy may be updated periodically. We will notify you of significant changes via email or a prominent notice on our website. Continued use of our services after changes implies acceptance.</p>
                    </section>

                    <section id="contact" className={`${styles.contentSection} ${styles.addressSection}`}>
                        <h3>10. Contact Us</h3>
                        <p>For privacy-related questions, please contact:</p>
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
