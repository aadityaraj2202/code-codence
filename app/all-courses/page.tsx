"use client";

import { useState } from "react";
import Link from "next/link";
import { courseRoadmaps, CourseRoadmap } from "@/data/courseRoadmaps";
import styles from "./page.module.css";

// Extract unique categories from the course data
const allCategories = ["All Categories", ...Array.from(new Set(courseRoadmaps.map(c => c.category)))];

// We can derive "level" roughly from the phases for filtering if needed,
// but since the original requirement asked for Level & Duration, and courses
// have dynamic months, we'll implement simple category filtering first, 
// and add duration/level tags logic if requested, but keep it simple initially.

export default function AllCoursesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const filteredCourses = selectedCategory === "All Categories"
        ? courseRoadmaps
        : courseRoadmaps.filter(c => c.category === selectedCategory);

    return (
        <main className={styles.page}>
            {/* Section 1: Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Explore All Our Courses</h1>
                    <p className={styles.heroDesc}>
                        Master top-tier tech skills with industry-leading mentors. Find the perfect path for your career.
                    </p>
                </div>
            </section>

            {/* Section 3: Filter Options */}
            <section className={styles.filterSection}>
                <div className={styles.filterContainer}>
                    <div className={styles.filterGroup}>
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterActive : ""}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Course Grid Layout */}
            <section className={styles.gridSection}>
                <div className={styles.gridContainer}>
                    {filteredCourses.length === 0 ? (
                        <div className={styles.emptyState}>No courses found for this category.</div>
                    ) : (
                        filteredCourses.map((course: CourseRoadmap) => {
                            // Calculate total duration roughly from phases if not available
                            // Using the heroBadges to find duration/skills for display
                            const durationBadge = course.heroBadges.find(b => b.includes("Month")) || "Flexible Duration";
                            const skillBadge = course.heroBadges[0] || "Foundations";

                            return (
                                <article key={course.courseId} className={styles.card}>
                                    <div className={styles.cardHeader} style={{ background: `linear-gradient(135deg, ${course.accentColor}22, transparent)` }}>
                                        <div className={styles.categoryTag} style={{ color: course.accentColor }}>
                                            {course.category}
                                        </div>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <h3 className={styles.cardTitle}>{course.courseName}</h3>
                                        <p className={styles.cardTagline}>{course.tagline}</p>

                                        <div className={styles.cardMeta}>
                                            <div className={styles.metaItem}>
                                                <span className={styles.metaIcon}>⏳</span>
                                                <span className={styles.metaText}>{durationBadge}</span>
                                            </div>
                                            <div className={styles.metaItem}>
                                                <span className={styles.metaIcon}>🎯</span>
                                                <span className={styles.metaText}>{skillBadge}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <Link
                                            href={`/courses/${course.courseId}`}
                                            className={styles.viewBtn}
                                            style={{
                                                /* Use CSS variable to allow hover effects to inherit color easily */
                                                "--btn-color": course.accentColor,
                                                "--btn-color-dark": course.accentColorDark
                                            } as React.CSSProperties}
                                        >
                                            View Details →
                                        </Link>
                                    </div>
                                </article>
                            )
                        })
                    )}
                </div>
            </section>

            {/* Section 4: Call to Action */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaCard}>
                    <h2 className={styles.ctaTitle}>Not sure which course is right for you?</h2>
                    <p className={styles.ctaDesc}>Take the guesswork out of your career. Speak with our experts and get a personalized learning roadmap.</p>
                    <Link href="/contact" className={styles.ctaBtn}>
                        Talk to a Mentor
                    </Link>
                </div>
            </section>
        </main>
    );
}
