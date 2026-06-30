import type { Metadata } from "next";
import Link from "next/link";
import { companyPages } from "@/data/company";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "About Us — Code Codence",
    description:
        "About Code Codence Private Limited. Our mission, operational policies, and commitment to transparency and professional growth.",
};

export default function CompanyPage() {
    const policies = [
        {
            stepNumber: "01",
            title: "Terms and Conditions",
            description:
                "The fundamental rules and intellectual property guidelines for our training programs and business services.",
            href: "/terms",
            position: "left",
        },
        {
            stepNumber: "02",
            title: "Privacy Policy",
            description:
                "Detailed information on how we handle, process, and protect your personal data in compliance with IT rules.",
            href: "/privacy",
            position: "right",
        },
        {
            stepNumber: "03",
            title: "Refund Policy",
            description:
                "Clear and transparent procedures regarding service cancellations, transfers, and refund eligibility criteria.",
            href: "/refund",
            position: "left",
        },
        {
            stepNumber: "04",
            title: "Cancellation Policy",
            description:
                "Procedures for terminating enrollments, EMI plans, and customized business solutions effectively.",
            href: "/cancellation",
            position: "right",
        },
    ];

    return (
        <div className={styles.page}>
            {/* Hero */}
            <main className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>About Code Codence</h1>
                    <p>
                        Empowering innovation through expert training and business solutions. We are committed to
                        transparency, excellence, and your professional growth.
                    </p>
                </div>
            </main>

            {/* Timeline Section */}
            <section className={styles.timelineSection}>
                <div className={styles.sectionHeader}>
                    <h2>Our Operational Policies</h2>
                    <p>A structured collection of our corporate guidelines and engagement standards.</p>
                </div>

                <div className={styles.timelineContainer}>
                    <div className={styles.timelineLine} />
                    <div className={styles.timelineItems}>
                        {policies.map((policy) => (
                            <div
                                key={policy.stepNumber}
                                className={`${styles.timelineItem} ${policy.position === "right" ? styles.right : styles.left
                                    }`}
                            >
                                {policy.position === "left" ? (
                                    <>
                                        <div className={styles.itemContent}>
                                            <div className={styles.policyCard}>
                                                <span className={styles.stepTag}>Step {policy.stepNumber}</span>
                                                <h3>{policy.title}</h3>
                                                <p>{policy.description}</p>
                                                <Link href={policy.href} className={styles.cta}>
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.itemNode}>{policy.stepNumber}</div>
                                        <div className={styles.itemEmpty} />
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.itemEmpty} />
                                        <div className={styles.itemNode}>{policy.stepNumber}</div>
                                        <div className={styles.itemContent}>
                                            <div className={styles.policyCard}>
                                                <span className={styles.stepTag}>Step {policy.stepNumber}</span>
                                                <h3>{policy.title}</h3>
                                                <p>{policy.description}</p>
                                                <Link href={policy.href} className={styles.cta}>
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.companyFooter}>
                <p>&copy; {new Date().getFullYear()} Code Codence Private Limited. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
