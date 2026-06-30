import type { Metadata } from "next";
import LegalSidebar from "@/components/LegalSidebar";
import styles from "../terms/page.module.css";

export const metadata: Metadata = {
    title: "Cancellation Policy — Code Codence",
    description:
        "Cancellation Policy of Code Codence Private Limited. Procedures for canceling enrollments, EMI plans, and customized business solutions.",
};

const sidebarLinks = [
    { href: "#client-initiated", text: "1. Client-Initiated Cancellation" },
    { href: "#institute-initiated", text: "2. Institute-Initiated Cancellation" },
    { href: "#customized-services", text: "3. Customized Services" },
    { href: "#emi-financing", text: "4. EMI and Financing" },
    { href: "#international", text: "5. International Cancellations" },
    { href: "#how-to-cancel", text: "6. How To Cancel" },
    { href: "#processing-time", text: "7. Processing Time" },
    { href: "#contact", text: "8. Cancellation Support" },
];

export default function CancellationPage() {
    return (
        <div className={styles.legalPage}>
            <div className={styles.legalContainer}>
                <LegalSidebar links={sidebarLinks} />
                <main className={styles.legalContent}>
                    <header className={styles.contentHeader}>
                        <h1>Cancellation Policy of Code Codence Private Limited</h1>
                        <div className={styles.welcomeText}>
                            <h2>Welcome To <span className={styles.highlight}>CodeCodence</span></h2>
                            <p>
                                At Code Codence Private Limited, we value your time and investment. Our cancellation
                                policy ensures fairness and clarity for both national and international
                                clients/students, across one-time payments and EMI plans. By enrolling in our
                                courses or services, you agree to abide by the following terms.
                            </p>
                        </div>
                    </header>

                    <section id="client-initiated" className={styles.contentSection}>
                        <h3>1. Course And Service Cancellation (Client/Student-Initiated)</h3>
                        <h4>A. Before Start Date</h4>
                        <ul>
                            <li><strong>Cancellation 7 or more days in advance:</strong> Eligible for 100% refund (excluding any third-party transaction or EMI processing charges).</li>
                            <li>
                                <strong>Cancellation less than 7 days in advance:</strong> Eligible for 50% refund.
                                <p><em>Note: For EMI users, refunds (if any) will be processed after deducting the amount already paid and any non-refundable financial/processing fees.</em></p>
                            </li>
                        </ul>
                        <h4>B. After Start Date</h4>
                        <ul>
                            <li>No cancellation or refund is allowed once the course or service has begun, regardless of participation level.</li>
                            <li>This applies to both one-time and EMI payment users.</li>
                        </ul>
                    </section>

                    <section id="institute-initiated" className={styles.contentSection}>
                        <h3>2. Course And Service Cancellation (Institute-Initiated)</h3>
                        <ul>
                            <li>If Code Codence cancels a course, batch, or project due to unforeseen reasons (e.g., faculty unavailability, technical issues, or insufficient enrollments), a 100% refund will be issued.</li>
                            <li>For EMI users, the EMI will be canceled at the payment gateway (if not fully processed), or refund will be given for paid EMIs.</li>
                        </ul>
                    </section>

                    <section id="customized-services" className={styles.contentSection}>
                        <h3>3. Customized Services (Web Development, AI, Marketing)</h3>
                        <ul>
                            <li><strong>Before Project Start:</strong> 100% refund if canceled before any work has begun.</li>
                            <li><strong>After Work Has Started:</strong> Refund is calculated based on the percentage of work completed. Any completed milestones are non-refundable.</li>
                            <li><strong>Fully Delivered Projects:</strong> No refund will be entertained once the final deliverable has been submitted and approved.</li>
                        </ul>
                    </section>

                    <section id="emi-financing" className={styles.contentSection}>
                        <h3>4. EMI and Financing Cancellations</h3>
                        <ul>
                            <li>If an EMI plan is active and the student/client wishes to cancel, they must notify us in writing at least 7 days before the next EMI due date.</li>
                            <li>Already-processed EMIs are non-refundable unless the cancellation falls under an Institute-initiated reason.</li>
                            <li>Any outstanding EMI amounts remain payable as per the original agreement even after cancellation of enrollment/service.</li>
                        </ul>
                    </section>

                    <section id="international" className={styles.contentSection}>
                        <h3>5. International Cancellations</h3>
                        <ul>
                            <li>International students/clients follow the same cancellation policy as domestic users.</li>
                            <li>Currency conversion differences, international transaction fees, or PayPal charges are non-refundable.</li>
                            <li>Refunds to international accounts may take 15–30 business days depending on the payment gateway.</li>
                        </ul>
                    </section>

                    <section id="how-to-cancel" className={styles.contentSection}>
                        <h3>6. How To Cancel</h3>
                        <p>To initiate a cancellation:</p>
                        <ul>
                            <li>Send an email to <strong>support@codecodence.com</strong> with subject: <em>&ldquo;Cancellation Request &ndash; [Your Name] &ndash; [Course/Service Name]&rdquo;</em>.</li>
                            <li>Include your enrollment ID, payment reference, and reason for cancellation.</li>
                            <li>Our team will respond within 2–3 business days with the next steps.</li>
                        </ul>
                    </section>

                    <section id="processing-time" className={styles.contentSection}>
                        <h3>7. Processing Time</h3>
                        <ul>
                            <li>Cancellation acknowledgment: Within 2–3 business days.</li>
                            <li>Refund processing (if eligible): 7–15 business days after approval.</li>
                            <li>Bank transfer time: Additional 3–7 business days depending on your bank.</li>
                        </ul>
                    </section>

                    <section id="contact" className={`${styles.contentSection} ${styles.addressSection}`}>
                        <h3>8. Cancellation Support</h3>
                        <p>For cancellation assistance, please contact:</p>
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
