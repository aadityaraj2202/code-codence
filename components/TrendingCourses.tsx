"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { courseRoadmaps, CourseRoadmap } from "@/data/courseRoadmaps";
import styles from "./TrendingCourses.module.css";

interface CourseVisual {
    type: "image" | "gradient";
    src?: string;
    gradient?: string;
    icon: string;
    label: string;
}

const getCourseVisual = (courseId: string): CourseVisual => {
    const map: Record<string, CourseVisual> = {
        "full-stack-java": { type: "image", src: "/Image/java.png", icon: "☕", label: "Java" },
        "full-stack-python": { type: "image", src: "/Image/course_python.png", icon: "🐍", label: "Python" },
        "mern-stack": { type: "image", src: "/Image/course_mern.png", icon: "⚛️", label: "MERN" },
        "web-designing": { type: "image", src: "/Image/course_webdesign.png", icon: "🎨", label: "UI/UX" },
        "python-cpp": { type: "image", src: "/Image/course_cpp.png", icon: "⚙️", label: "C / C++" },
        "dsa": { type: "image", src: "/Image/custom_dsa.jpg", icon: "🧠", label: "DSA" },
        "da-python": { type: "image", src: "/Image/custom_da_python.png", icon: "📊", label: "Data Analytics" },
        "data-science-python": { type: "image", src: "/Image/custom_ds.jpg", icon: "📊", label: "Data Science" },
        "power-bi": { type: "image", src: "/Image/course_data.png", icon: "📈", label: "Power BI" },
        "data-science-r": { type: "image", src: "/Image/course_ds_r.png", icon: "📉", label: "Data Science R" },
        "data-science-genai": { type: "image", src: "/Image/course_ds_genai.png", icon: "🤖", label: "Gen AI" },
    };
    return map[courseId] || { type: "image", src: "/Image/java.png", icon: "💻", label: "Tech Course" };
};

/** Extract up to 4 bullet highlights from the course phases data */
const getHighlights = (course: CourseRoadmap): string[] => {
    const bullets: string[] = [];
    for (const phase of course.phases) {
        if (!phase.sections) continue;
        for (const section of phase.sections) {
            if (section.points) {
                for (const pt of section.points) {
                    bullets.push(pt);
                    if (bullets.length >= 4) return bullets;
                }
            }
        }
    }
    return bullets;
};

export default function TrendingCourses() {
    const courseRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [previewSide, setPreviewSide] = useState<"right" | "left">("right");
    const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const trendingCourses = courseRoadmaps.slice(0, 10);

    const scrollCourses = (direction: "left" | "right") => {
        if (!courseRef.current) return;
        const scrollAmount = direction === "right" ? 320 : -320;
        courseRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    const checkScroll = useCallback(() => {
        if (!courseRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = courseRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }, []);

    useEffect(() => {
        const ref = courseRef.current;
        if (ref) {
            ref.addEventListener("scroll", checkScroll);
            checkScroll();
            window.addEventListener("resize", checkScroll);
        }
        return () => {
            if (ref) ref.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, [checkScroll]);

    const handleCardMouseEnter = (courseId: string, event: React.MouseEvent<HTMLDivElement>) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        // Determine if the card is too close to the right edge of the viewport
        const rect = event.currentTarget.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const previewWidth = 300; // preview panel width approximation
        const openOnRight = rect.right + previewWidth < viewportWidth;
        setPreviewSide(openOnRight ? "right" : "left");
        setHoveredId(courseId);
    };

    const handleCardMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setHoveredId(null);
        }, 120);
    };

    const handlePreviewMouseEnter = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };

    const handlePreviewMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setHoveredId(null);
        }, 120);
    };

    return (
        <section className={styles.section}>
            <div className={styles.inner}>

                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Trending Courses:</h2>
                    <div className={styles.marqueeContainer}>
                        <span className={styles.marqueeText}>
                            Top Rated &amp; Affordable Course: Data Science Using Python and R
                        </span>
                    </div>
                </div>

                {/* Carousel */}
                <div className={styles.carouselWrap}>

                    {/* Left Arrow */}
                    <button
                        className={`${styles.arrow} ${styles.left} ${!canScrollLeft ? styles.arrowHidden : ""}`}
                        onClick={() => scrollCourses("left")}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                    >
                        <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Horizontal Track */}
                    <div className={styles.cardTrack} ref={courseRef}>
                        {trendingCourses.map((course: CourseRoadmap) => {
                            const level = course.phases[0]?.level || "Beginner Level";
                            const defaultRating = "4.8";
                            const highlights = getHighlights(course);
                            const isHovered = hoveredId === course.courseId;

                            return (
                                <div
                                    key={course.courseId}
                                    className={`${styles.cardWrapper} ${isHovered ? styles.cardWrapperHovered : ""}`}
                                    onMouseEnter={(e) => handleCardMouseEnter(course.courseId, e)}
                                    onMouseLeave={handleCardMouseLeave}
                                >
                                    {/* --- The actual course card --- */}
                                    <Link href={`/courses/${course.courseId}`} className={styles.cardLink}>
                                        <article className={styles.card}>
                                            {/* Course Image / Gradient Banner */}
                                            <div className={styles.imageWrapper}>
                                                <div className={styles.badgeOverlay}>{course.phases.length} Phases</div>
                                                {(() => {
                                                    const visual = getCourseVisual(course.courseId);
                                                    if (visual.type === "image" && visual.src) {
                                                        return (
                                                            <Image
                                                                src={visual.src}
                                                                alt={course.courseName}
                                                                className={styles.image}
                                                                fill
                                                                sizes="280px"
                                                                priority={true}
                                                            />
                                                        );
                                                    }
                                                    return (
                                                        <div
                                                            className={styles.gradientBanner}
                                                            style={{ background: visual.gradient }}
                                                        >
                                                            <span className={styles.gradientIcon}>{visual.icon}</span>
                                                            <span className={styles.gradientLabel}>{visual.label}</span>
                                                        </div>
                                                    );
                                                })()}
                                            </div>

                                            {/* Course Details */}
                                            <div className={styles.cardBody}>
                                                <h3 className={styles.cardTitle}>{course.courseName}</h3>
                                                <p className={styles.cardDesc}>{course.tagline}</p>

                                                <div className={styles.cardMeta}>
                                                    <span className={styles.level}>{level}</span>
                                                    <span className={styles.rating}>
                                                        <span className={styles.ratingIcon}>★</span>
                                                        {defaultRating}
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>

                                    {/* --- Hover Preview Panel --- */}
                                    <div
                                        className={`${styles.previewPanel} ${previewSide === "left" ? styles.previewLeft : styles.previewRight} ${isHovered ? styles.previewVisible : ""}`}
                                        onMouseEnter={handlePreviewMouseEnter}
                                        onMouseLeave={handlePreviewMouseLeave}
                                    >
                                        {/* Arrow connector */}
                                        <div className={`${styles.previewArrow} ${previewSide === "left" ? styles.previewArrowLeft : styles.previewArrowRight}`} />

                                        {/* Preview Content */}
                                        <div className={styles.previewContent}>
                                            <p className={styles.previewUpdated}>Updated <strong>February 2026</strong></p>
                                            <h4 className={styles.previewTitle}>{course.courseName}</h4>
                                            <p className={styles.previewTagline}>{course.tagline}</p>

                                            {highlights.length > 0 && (
                                                <ul className={styles.previewHighlights}>
                                                    {highlights.slice(0, 4).map((pt, i) => (
                                                        <li key={i} className={styles.previewHighlightItem}>
                                                            <span className={styles.previewCheck}>✓</span>
                                                            <span>{pt}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <Link href={`/courses/${course.courseId}`} className={styles.previewBtn}>
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Arrow */}
                    <button
                        className={`${styles.arrow} ${styles.right} ${!canScrollRight ? styles.arrowHidden : ""}`}
                        onClick={() => scrollCourses("right")}
                        disabled={!canScrollRight}
                        aria-label="Scroll right"
                    >
                        <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>
            </div>
        </section>
    );
}
