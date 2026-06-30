import Link from "next/link";
import styles from "./Footer.module.css";

// ─── Column data (keeps the JSX lean) ────────────────────────────────────────

const col1 = {
    heading: "In-demand Careers",
    links: [
        "Data Scientist",
        "Full Stack Developer",
        "Cloud Engineer",
        "Project Manager",
        "Game Developer",
    ],
};

const col2 = {
    heading: "Web Development",
    links: ["JavaScript", "React JS", "Angular", "Java"],
};

const col3 = {
    heading: "IT Certifications",
    links: ["AWS", "Azure Fundamentals", "Solutions Architect", "Kubernetes"],
};

const col4 = {
    heading: "Leadership",
    links: [
        "Management Skills",
        "Project Management",
        "Productivity",
        "Emotional Intelligence",
    ],
};

const col5 = {
    heading: "Career Resources",
    links: [
        "Career Aptitude Test",
        "High-Income Skills to Learn",
        "How Does Cryptocurrency Work?",
        "What Is Artificial Intelligence?",
        "Popular Cybersecurity Certifications",
    ],
};

const col6 = {
    heading: "Industries & Careers",
    links: [
        "Business",
        "Computer Science",
        "Data Science",
        "Education & Teaching",
        "Engineering",
    ],
};

const col7 = {
    heading: "Certificates & Programs",
    links: [
        "Machine Learning Certificate",
        "Microsoft Power BI Data Analyst Certificate",
        "IBM Data Analyst Certificate",
        "IBM Data Science Certificate",
        "Google Data Analytics Certificate",
    ],
};

const col8 = {
    heading: "Community",
    links: [
        "Learners",
        "Partners",
        "Blog",
        "The Code Codence Podcast",
        "Tech Blog",
    ],
};

const col9 = {
    heading: "Code Codence",
    links: ["About", "What We Offer", "Leadership", "Careers", "Free Courses"],
};

const col10 = {
    heading: "More",
    links: ["Press", "Investors", "Terms", "Privacy", "Help", "Contact"],
};

// ─── Helper component ─────────────────────────────────────────────────────────

function FooterColumn({
    heading,
    links,
}: {
    heading: string;
    links: string[];
}) {
    return (
        <div className={styles.linksSection}>
            <h4 className={styles.linkTitle}>{heading}</h4>
            <ul className={styles.linkList}>
                {links.map((label) => (
                    <li key={label}>
                        <Link href="#" className="footer-link">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.brandSection}>
                    <h2 className={styles.brandName}>Code Codence</h2>
                    <p className={styles.brandTagline}>Empower your future with practical coding and data science training.</p>
                </div>

                <FooterColumn {...col1} />
                <FooterColumn {...col2} />
                <FooterColumn {...col3} />
                <FooterColumn {...col4} />
            </div>

            <div className={styles.footerContent}>
                <FooterColumn {...col5} />
                <FooterColumn {...col6} />
                <FooterColumn {...col7} />
                <FooterColumn {...col8} />
            </div>

            <div className={styles.footerContent}>
                <FooterColumn {...col9} />
                <FooterColumn {...col10} />
            </div>

            <div className={styles.copyright}>
                © {new Date().getFullYear()} Code Codence. All rights reserved.
            </div>
        </footer>
    );
}


