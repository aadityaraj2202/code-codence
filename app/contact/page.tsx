"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";

/* ─── Animation variants ───────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.08 },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 },
  },
};

/* ─── Bullet list items ────────────────────────────────────────────── */

const helpItems = [
  {
    title: "Course Inquiries",
    desc: "Get detailed information about our courses, fees, and schedules.",
  },
  {
    title: "Enrollment Assistance",
    desc: "Need help with registration? We're here to guide you.",
  },
  {
    title: "Custom Training Solutions",
    desc: "Tailored programs for corporate or individual needs.",
  },
  {
    title: "Technical Support",
    desc: "Assistance with accessing course materials, the student portal, or payments.",
  },
  {
    title: "Feedback and Suggestions",
    desc: "Share your thoughts to help us improve our services.",
  },
  {
    title: "General Questions",
    desc: "Any other query? Just ask, and we'll assist you.",
  },
];

/* ─── Footer cards ─────────────────────────────────────────────────── */

const footerCards = [
  {
    icon: "📍",
    iconBg: "#5b8af5",
    title: "Address way",
    lines: [
      "117 A/8, Gali No.7 Laxmi Vihar, Dwarka Mor,",
      "New Delhi – 110059",
    ],
  },
  {
    icon: "💬",
    iconBg: "#3ecf8e",
    title: "Contact info",
    lines: ["Mobile: +91 – 9122-51256", "E-mail: contact@codecodence.com"],
  },
  {
    icon: "🕐",
    iconBg: "#f4a535",
    title: "Work timer",
    lines: ["Online Opening Hours:", "24/7 Available"],
  },
];

/* ─── Component ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    optIn: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Hero section">
        {/* Decorative curved lines */}
        <svg
          className={styles.heroBg}
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <ellipse cx="200" cy="160" rx="340" ry="180" className={styles.ellipse} />
          <ellipse cx="980" cy="140" rx="300" ry="160" className={styles.ellipse} />
          <path
            d="M0 200 Q300 80 600 200 Q900 320 1200 150"
            className={styles.curvePath}
          />
          <path
            d="M0 160 Q300 40 600 160 Q900 280 1200 110"
            className={styles.curvePath}
            style={{ opacity: 0.35 }}
          />
        </svg>

        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className={styles.heroHeading}>How can we help?</h1>
          <p className={styles.heroSub}>
            A member of our team would love to help you with your query.
          </p>
        </motion.div>
      </section>

      {/* ── 2. MAIN CONTENT ─────────────────────────────────────────── */}
      <section className={styles.main} aria-label="Contact content">
        <motion.h2
          className={styles.mainHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          so we can get to know you and
          <br />
          your needs better.
        </motion.h2>

        <div className={styles.columns}>
          {/* LEFT: bullet list */}
          <div className={styles.leftCol}>
            <motion.h3
              className={styles.helpTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Here&apos;s What We Can Help With:
            </motion.h3>

            <ul className={styles.helpList} aria-label="Help topics">
              {helpItems.map((item, i) => (
                <motion.li
                  key={item.title}
                  className={styles.helpItem}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <circle cx="9" cy="9" r="9" fill="#4f6ef7" />
                      <path
                        d="M5 9l3 3 5-5"
                        stroke="#fff"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className={styles.helpText}>
                    <strong>{item.title}:</strong> {item.desc}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className={styles.helpNote}>
              Run into a problem using Code Codence? Check out our{" "}
              <a href="#" className={styles.link}>
                Help Center
              </a>{" "}
              for set-up quizzes, course updates, and troubleshooting articles.
            </p>
          </div>

          {/* RIGHT: form */}
          <motion.div
            className={styles.rightCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            {submitted ? (
              <div className={styles.successBox} role="alert">
                <span className={styles.successIcon}>✅</span>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. A member of our team will get back
                  to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                {/* Row 1: Name + Email */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.srOnly}>
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={styles.input}
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.srOnly}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={styles.input}
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.srOnly}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                {/* Row 3: Message */}
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.srOnly}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea}`}
                  />
                </div>

                {/* Opt-in checkbox */}
                <div className={styles.checkRow}>
                  <label className={styles.checkLabel}>
                    <input
                      type="checkbox"
                      name="optIn"
                      checked={form.optIn}
                      onChange={handleChange}
                      className={styles.checkbox}
                    />
                    <span>
                      Opt in for the latest promotions and events. You may
                      unsubscribe at any time.
                    </span>
                  </label>
                </div>

                {/* Privacy note */}
                <p className={styles.privacyNote}>
                  By filling out this form and clicking Submit, you agree to our{" "}
                  <a href="/privacy" className={styles.link}>
                    privacy policy
                  </a>
                  .
                </p>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className={styles.submitBtn}
                  whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  transition={{ duration: 0.15 }}
                  aria-busy={loading}
                >
                  {loading ? (
                    <span className={styles.spinner} aria-label="Submitting…" />
                  ) : (
                    "Submit"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── 3. FOOTER INFO STRIP ────────────────────────────────────── */}
      <section className={styles.footerStrip} aria-label="Contact details">
        <div className={styles.footerCards}>
          {footerCards.map((card, i) => (
            <motion.div
              key={card.title}
              className={styles.footerCard}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <motion.span
                className={styles.footerIcon}
                style={{ background: card.iconBg }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
              >
                {card.icon}
              </motion.span>
              <h4 className={styles.footerCardTitle}>{card.title}</h4>
              {card.lines.map((line) => (
                <p key={line} className={styles.footerCardLine}>
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
