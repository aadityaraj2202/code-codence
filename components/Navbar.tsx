"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { servicesData } from "@/data/services";
import { companyPages } from "@/data/company";
import { getDashboardPathForRole } from "@/services/roleRoutes";
import styles from "./Navbar.module.css";

type CategoryKey =
  | "software-dev"
  | "data-science"
  | "networking"
  | "cyber-security"
  | "design-creative"
  | "office-productivity"
  | "enterprise";

interface CourseItem {
  title: string;
  subtitle: string;
  duration: string;
  mode: string;
  icon: string;
  iconBg: string;
  href?: string;
}

const menuContent: Record<CategoryKey, { title: string; courses: CourseItem[] }> = {
  "software-dev": {
    title: "Software Development",
    courses: [
      { title: "Full Stack Development (Java)", subtitle: "FULL STACK DEVELOPMENT | JAVA", duration: "6 MONTHS", mode: "ONLINE/OFFLINE", icon: "☕", iconBg: "linear-gradient(135deg, #fb923c, #ea580c)", href: "/courses/full-stack-java" },
      { title: "Full Stack Development (Python)", subtitle: "FULL STACK DEVELOPMENT | PYTHON", duration: "6 MONTHS", mode: "ONLINE/OFFLINE", icon: "🐍", iconBg: "linear-gradient(135deg, #facc15, #eab308)", href: "/courses/full-stack-python" },
      { title: "M.E.R.N Stack", subtitle: "M.E.R.N STACK DEVELOPMENT", duration: "5 MONTHS", mode: "ONLINE/OFFLINE", icon: "⚛️", iconBg: "linear-gradient(135deg, #38bdf8, #0284c7)", href: "/courses/mern-stack" },
      { title: "Web Designing", subtitle: "WEB DESIGNING", duration: "3 MONTHS", mode: "ONLINE/OFFLINE", icon: "🎨", iconBg: "linear-gradient(135deg, #f472b6, #db2777)", href: "/courses/web-designing" },
      { title: "Python / C / C++ / R", subtitle: "BACKEND / PROGRAMMING LANGUAGES", duration: "3 MONTHS", mode: "ONLINE/OFFLINE", icon: "⚙️", iconBg: "linear-gradient(135deg, #94a3b8, #64748b)", href: "/courses/python-cpp" },
      { title: "DSA (C/C++/Python/Java)", subtitle: "DATA STRUCTURES & ALGORITHMS", duration: "3 MONTHS", mode: "ONLINE/OFFLINE", icon: "</>", iconBg: "linear-gradient(135deg, #a78bfa, #7c3aed)", href: "/courses/dsa" },
      { title: "DA Using Python", subtitle: "DATA ANALYSIS USING PYTHON", duration: "3 MONTHS", mode: "ONLINE/OFFLINE", icon: "📊", iconBg: "linear-gradient(135deg, #c084fc, #818cf8)", href: "/courses/da-python" },
    ],
  },
  "data-science": {
    title: "Data Science & Analytics",
    courses: [
      { title: "Data Science Using Python", subtitle: "DATA SCIENCE USING PYTHON", duration: "6 MONTHS", mode: "ONLINE/OFFLINE", icon: "</>", iconBg: "linear-gradient(135deg, #c084fc, #818cf8)", href: "/courses/data-science-python" },
      { title: "Data Science Using R", subtitle: "DATA SCIENCE USING R", duration: "6 MONTHS", mode: "ONLINE/OFFLINE", icon: "📉", iconBg: "linear-gradient(135deg, #34d399, #059669)", href: "/courses/data-science-r" },
      { title: "Data Science with Gen AI", subtitle: "DATA SCIENCE WITH GEN AI | 12 MONTHS", duration: "12 MONTHS", mode: "ONLINE/OFFLINE", icon: "🤖", iconBg: "linear-gradient(135deg, #a5c8ff, #7eb3f7)", href: "/courses/data-science-genai" },
      { title: "AI Using Python / R", subtitle: "ARTIFICIAL INTELLIGENCE USING PYTHON/R", duration: "8 MONTHS", mode: "ONLINE/OFFLINE", icon: "🧠", iconBg: "linear-gradient(135deg, #c084fc, #a78bfa)", href: "/courses/ai-python-r" },
      { title: "Machine Learning & Deep Learning", subtitle: "ML & DEEP LEARNING", duration: "6 MONTHS", mode: "ONLINE/OFFLINE", icon: "🔬", iconBg: "linear-gradient(135deg, #a5c8ff, #7eb3f7)", href: "/courses/ml-deep-learning" },
      { title: "Business Analyst", subtitle: "BUSINESS ANALYST", duration: "3 MONTHS", mode: "ONLINE/OFFLINE", icon: "📋", iconBg: "linear-gradient(135deg, #6ee7b7, #34d399)", href: "/courses/business-analyst" },
      { title: "Power BI", subtitle: "POWER BI | 2 MONTHS", duration: "2 MONTHS", mode: "ONLINE", icon: "📊", iconBg: "linear-gradient(135deg, #93c5fd, #60a5fa)", href: "/courses/power-bi" },
      { title: "Tableau", subtitle: "TABLEAU DATA VISUALIZATION", duration: "2 MONTHS", mode: "ONLINE/OFFLINE", icon: "📶", iconBg: "linear-gradient(135deg, #fb923c, #f97316)", href: "/courses/tableau" },
      { title: "Excel – Basic to Advance", subtitle: "EXCEL – BASIC TO ADVANCE", duration: "2 MONTHS", mode: "ONLINE/OFFLINE", icon: "📗", iconBg: "linear-gradient(135deg, #4ade80, #16a34a)", href: "/courses/excel" },
      { title: "SQL Database", subtitle: "SQL DATABASE", duration: "2 MONTHS", mode: "ONLINE/OFFLINE", icon: "🗄", iconBg: "linear-gradient(135deg, #60a5fa, #3b82f6)", href: "/courses/sql" },
    ],
  },
  networking: {
    title: "Networking & Infrastructure",
    courses: [
      { title: "CCNA", subtitle: "CISCO CERTIFIED NETWORK ASSOCIATE", duration: "3 MONTHS", mode: "ONLINE/OFFLINE", icon: "🌐", iconBg: "linear-gradient(135deg, #38bdf8, #0ea5e9)", href: "/courses/ccna" },
      { title: "CCNP", subtitle: "CISCO CERTIFIED NETWORK PROFESSIONAL", duration: "4 MONTHS", mode: "ONLINE/OFFLINE", icon: "🔗", iconBg: "linear-gradient(135deg, #60a5fa, #3b82f6)", href: "/courses/ccnp" },
      { title: "Linux", subtitle: "LINUX ADMINISTRATION", duration: "2 MONTHS", mode: "ONLINE/OFFLINE", icon: "🐧", iconBg: "linear-gradient(135deg, #fbbf24, #f59e0b)", href: "/courses/linux" },
    ],
  },
  "cyber-security": {
    title: "Cyber Security",
    courses: [
      { title: "Cyber Security", subtitle: "CYBER SECURITY", duration: "4 MONTHS", mode: "ONLINE/OFFLINE", icon: "🔐", iconBg: "linear-gradient(135deg, #f87171, #dc2626)", href: "/courses/cyber-security" },
      { title: "Ethical Hacking", subtitle: "ETHICAL HACKING", duration: "4 MONTHS", mode: "ONLINE/OFFLINE", icon: "🕵️", iconBg: "linear-gradient(135deg, #94a3b8, #475569)", href: "/courses/ethical-hacking" },
    ],
  },
  "design-creative": {
    title: "Design & Creative",
    courses: [
      { title: "Graphic Design", subtitle: "GRAPHIC DESIGN", duration: "3 MONTHS", mode: "ONLINE/OFFLINE", icon: "🎨", iconBg: "linear-gradient(135deg, #f472b6, #db2777)", href: "/courses/graphic-design" },
      { title: "Video Editing", subtitle: "VIDEO EDITING", duration: "2 MONTHS", mode: "ONLINE/OFFLINE", icon: "🎬", iconBg: "linear-gradient(135deg, #fb923c, #ea580c)", href: "/courses/video-editing" },
    ],
  },
  "office-productivity": {
    title: "Office & Productivity",
    courses: [
      { title: "WordPress Development", subtitle: "WORDPRESS DEVELOPMENT", duration: "2 MONTHS", mode: "ONLINE/OFFLINE", icon: "🌐", iconBg: "linear-gradient(135deg, #38bdf8, #0284c7)", href: "/courses/wordpress" },
      { title: "Advanced Excel", subtitle: "ADVANCED EXCEL", duration: "2 MONTHS", mode: "ONLINE/OFFLINE", icon: "📗", iconBg: "linear-gradient(135deg, #4ade80, #16a34a)", href: "/courses/advanced-excel" },
    ],
  },
  enterprise: {
    title: "Enterprise / Process",
    courses: [
      { title: "SEPD", subtitle: "SOFTWARE ENGINEERING & PROJECT DEVELOPMENT", duration: "6 MONTHS", mode: "ONLINE/OFFLINE", icon: "🏢", iconBg: "linear-gradient(135deg, #a78bfa, #7c3aed)", href: "/courses/sepd" },
    ],
  },
};

export default function Navbar() {
  const { isLoading, logout, role, token, user } = useAuth();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("software-dev");
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(
    servicesData[0]?.id || null
  );

  // ─── Company dropdown hover state with delayed close ───────────────────────
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const companyCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCompanyEnter = () => {
    // Cancel any pending close timeout
    if (companyCloseTimer.current) {
      clearTimeout(companyCloseTimer.current);
      companyCloseTimer.current = null;
    }
    setIsCompanyOpen(true);
  };

  const handleCompanyLeave = () => {
    // Delay close by 400ms — gives the cursor time to move into the dropdown
    companyCloseTimer.current = setTimeout(() => {
      setIsCompanyOpen(false);
    }, 400);
  };

  // Keyboard accessibility: close on Escape
  const handleCompanyKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setIsCompanyOpen(false);
  };

  const isAuthenticated = Boolean(token && role);
  const dashboardHref = getDashboardPathForRole(role);
  const rolePanelLabel =
    role === "admin" ? "Admin Panel" : role === "trainer" ? "Trainer Panel" : "Student Panel";
  const dashboardLabel = user?.name ? `Hi, ${user.name}` : rolePanelLabel;

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.leftNav}>
          <Link href="/" className={styles.logoWrap}>
            <img src="/Image/logo.png" alt="Code Codence" className={styles.logo} />
          </Link>

          <div className={styles.coursesBtn}>
            <button type="button" className={styles.linkButton}>
              All Courses
            </button>
            <div className={styles.megaMenu}>
              <div className={styles.megaLeft}>
                {Object.keys(menuContent).map((key) => {
                  const category = key as CategoryKey;
                  return (
                    <button
                      type="button"
                      key={category}
                      className={`${styles.menuItem} ${activeCategory === category ? styles.activeItem : ""}`}
                      onMouseEnter={() => setActiveCategory(category)}
                      onClick={() => setActiveCategory(category)}
                    >
                      {menuContent[category].title}
                    </button>
                  );
                })}
              </div>
              <div className={styles.megaRight}>
                <h3 className={styles.megaRightTitle}>{menuContent[activeCategory].title}</h3>
                <div className={styles.courseGrid}>
                  {menuContent[activeCategory].courses.map((course) => {
                    const inner = (
                      <div className={styles.courseCardInner}>
                        <div className={styles.courseIcon} style={{ background: course.iconBg }}>
                          {course.icon}
                        </div>
                        <div className={styles.courseInfo}>
                          <span className={styles.courseSubtitle}>{course.subtitle}</span>
                          <h4 className={styles.courseTitle}>{course.title}</h4>
                          <div className={styles.courseMeta}>
                            <span className={styles.courseDuration}>{course.duration}</span>
                            <span className={styles.courseMode}>{course.mode}</span>
                          </div>
                        </div>
                      </div>
                    );
                    return course.href ? (
                      <Link
                        key={course.title}
                        href={course.href}
                        className={styles.courseCard}
                        style={{ textDecoration: "none" }}
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div key={course.title} className={styles.courseCard}>
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightNav}>
          <Link href="/">Home</Link>

          {/* ─── Services Dropdown ──────────────────────────────────────── */}
          <div className={styles.servicesDropdown}>
            <Link href="/services" className={styles.servicesLink}>
              Services
            </Link>
            <div className={styles.servicesMegaMenu}>
              <div className={styles.serviceCategoriesColumn}>
                {servicesData.map((category) => (
                  <div
                    key={category.id}
                    className={`${styles.serviceCategoryItem} ${activeServiceCategory === category.id ? styles.activeServiceItem : ""
                      }`}
                    onMouseEnter={() => setActiveServiceCategory(category.id)}
                  >
                    <span className={styles.serviceCategoryIcon}>{category.icon}</span>
                    <span>{category.title}</span>
                  </div>
                ))}
              </div>
              <div className={styles.serviceComponentsColumn}>
                {activeServiceCategory && (
                  <>
                    <h3 className={styles.serviceColumnTitle}>
                      {servicesData.find((c) => c.id === activeServiceCategory)?.title}
                    </h3>
                    <div className={styles.serviceComponentsList}>
                      {servicesData
                        .find((c) => c.id === activeServiceCategory)
                        ?.components.map((component) => (
                          <Link
                            key={component.id}
                            href={`/services/${activeServiceCategory}/${component.id}`}
                            className={styles.serviceComponentLink}
                          >
                            <h4>{component.title}</h4>
                            <p>{component.summary}</p>
                          </Link>
                        ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ─── Company Dropdown ───────────────────────────────────────── */}
          <div
            className={styles.companyDropdown}
            onMouseEnter={handleCompanyEnter}
            onMouseLeave={handleCompanyLeave}
            onKeyDown={handleCompanyKeyDown}
          >
            {/* The label itself also navigates to /company on click */}
            <Link
              href="/company"
              className={styles.companyLink}
              aria-haspopup="true"
              aria-expanded={isCompanyOpen}
            >
              Company
              <svg
                className={`${styles.companyChevron} ${isCompanyOpen ? styles.companyChevronOpen : ""}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Dropdown panel */}
            <div
              className={`${styles.companyMenu} ${isCompanyOpen ? styles.companyMenuOpen : ""}`}
              role="menu"
              aria-label="Company pages"
            >
              {companyPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className={styles.companyMenuItem}
                  role="menuitem"
                  onClick={() => setIsCompanyOpen(false)}
                >
                  <span className={styles.companyMenuIcon} aria-hidden="true">
                    {page.icon}
                  </span>
                  <span className={styles.companyMenuText}>
                    <span className={styles.companyMenuLabel}>{page.label}</span>
                    <span className={styles.companyMenuDesc}>{page.description}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact">Contact</Link>

          {!isLoading && isAuthenticated ? (
            <>
              <Link href={dashboardHref}>
                {dashboardLabel}
              </Link>
              <button type="button" className={styles.loginBtn} onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className={styles.loginBtn}>
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
