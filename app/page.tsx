"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import ExpertModal from "@/components/ExpertModal";
import TrendingCourses from "@/components/TrendingCourses";
import styles from "./page.module.css";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Empower Your Future With{" "}
              <span className={styles.blue}>Code</span>{" "}
              <span className={styles.green}>Codence</span>
            </h1>
            <p className={styles.desc}>
              We offer industry-oriented training in Data Science, AI, Python,
              Web Development, UI/UX, and Digital Marketing with real-time
              projects.
            </p>
            <div className={styles.heroBtns}>
              <button className={styles.btnPrimary} onClick={() => setIsModalOpen(true)}>Talk to Expert</button>
              <Link href="/all-courses" className={styles.btnOutline} style={{ textDecoration: 'none' }}>
                Explore Courses
              </Link>
            </div>
          </div>
          <img
            src="/Image/image1.png"
            alt="Students learning"
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* ── Trending Courses ──────────────────────────────────── */}
      <TrendingCourses />

      <ExpertModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
