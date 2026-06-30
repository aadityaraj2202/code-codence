import type { Metadata } from "next";
import LegalSidebar from "@/components/LegalSidebar";
import styles from "../terms/page.module.css";

export const metadata: Metadata = {
    title: "Refund Policy — Code Codence",
    description:
        "Refund Policy of Code Codence Private Limited. Eligibility, criteria, non-refundable situations, and the refund request process.",
};

const sidebarLinks = [
    { href: "#eligibility", text: "1. Eligibility For Refund" },
    { href: "#non-refundable", text: "2. Non-Refundable Situations" },
    { href: "#criteria", text: "3. Refund Amount Criteria" },
    { href: "#process", text: "4. Refund Process" },
    { href: "#emi-vs-full", text: "5. EMI vs. Full Payment" },
    { href: "#transfers", text: "6. Service Transfers" },
    { href: "#exceptional", text: "7. Exceptional Circumstances" },
    { href: "#contact", text: "8. Contact For Refund" },
];

export default function RefundPage() {
    return (
        <div className={styles.legalPage}>
            <div className={styles.legalContainer}>
                <LegalSidebar links={sidebarLinks} />
                <main className={styles.legalContent}>
                    <header className={styles.contentHeader}>
                        <h1>Refund Policy of Code Codence Private Limited</h1>
                        <div className={styles.welcomeText}>
                            <h2>Welcome To <span className={styles.highlight}>CodeCodence</span></h2>
                            <p>
                                At Code Codence Private Limited, we are committed to delivering high-quality
                                education and professional services. This Refund Policy applies to all enrolled
                                courses, training programs, and service offerings including project development, AI
                                solutions, web development, digital marketing, and other customized services.
                            </p>
                        </div>
                    </header>

                    <section id="eligibility" className={styles.contentSection}>
                        <h3>1. Eligibility For Refund</h3>
                        <p>Refunds are eligible under the following conditions:</p>
                        <ul>
                            <li><strong>A. Student or Client-initiated Cancellation:</strong> If cancellation is requested 7 or more days before the start of a course, batch, or service engagement, a refund may be processed as per the refund amount criteria (see section 3).</li>
                            <li><strong>B. Institute-initiated Cancellation:</strong> If Code Codence is unable to start or continue a course or service due to unforeseen internal reasons, 100% refund will be processed.</li>
                        </ul>
                    </section>

                    <section id="non-refundable" className={styles.contentSection}>
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

                    <section id="criteria" className={styles.contentSection}>
                        <h3>3. Refund Amount Criteria</h3>
                        <ul>
                            <li><strong>Cancellation 7+ days before start:</strong> Up to 80% refund (after deducting administrative and transaction charges).</li>
                            <li><strong>Cancellation less than 7 days before start:</strong> Up to 50% refund.</li>
                            <li><strong>After start date:</strong> No refund regardless of participation level.</li>
                        </ul>
                    </section>

                    <section id="process" className={styles.contentSection}>
                        <h3>4. Refund Process</h3>
                        <ul>
                            <li>Submit a refund request via email to support@codecodence.com with your enrollment ID and reason.</li>
                            <li>Refund requests will be reviewed within 5–7 working days.</li>
                            <li>Approved refunds will be processed to the original payment method within 10–15 working days.</li>
                            <li>Transaction fees, GST, and any third-party charges are non-refundable.</li>
                        </ul>
                    </section>

                    <section id="emi-vs-full" className={styles.contentSection}>
                        <h3>5. EMI vs. Full Payment Refunds</h3>
                        <ul>
                            <li>For full payment users: Refunds are processed to the original payment source.</li>
                            <li>For EMI users: If the EMI has not been fully processed, the EMI plan may be canceled at the gateway level. If EMIs have already been paid, refund will be given for eligible paid EMIs after deducting processing charges.</li>
                        </ul>
                    </section>

                    <section id="transfers" className={styles.contentSection}>
                        <h3>6. Service Transfers</h3>
                        <p>Instead of a refund, students/clients may request a course or service transfer (to a different batch/program) within 7 days of enrollment. Transfer requests are subject to availability and approval.</p>
                    </section>

                    <section id="exceptional" className={styles.contentSection}>
                        <h3>7. Exceptional Circumstances</h3>
                        <p>In cases of medical emergencies or severe personal crises, Code Codence may, at its discretion, offer a partial refund or course deferral. Supporting documentation will be required.</p>
                    </section>

                    <section id="contact" className={`${styles.contentSection} ${styles.addressSection}`}>
                        <h3>8. Contact For Refund</h3>
                        <p>For refund-related queries, please contact:</p>
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
