"use client";

import styles from "@/app/courses/full-stack-java/page.module.css";
import Link from "next/link";

interface Section {
    title: string;
    points: string[];
}

interface Phase {
    id: string;
    flag: string;
    level: string;
    months: string;
    phaseName: string;
    color: string;
    icon: string;
    sections: Section[];
    outcome: string;
}

interface CourseRoadmap {
    courseId: string;
    courseName: string;
    tagline: string;
    category: string;
    accentColor: string;
    accentColorDark: string;
    heroBadges: string[];
    phases: Phase[];
    seoContent?: React.ReactNode;
}

export default function CoursePage({ roadmap }: { roadmap: CourseRoadmap }) {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroBadge}>{roadmap.category}</div>
                <h1 className={styles.heroTitle}>{roadmap.courseName}</h1>
                <p className={styles.heroSub}>{roadmap.tagline}</p>
                <div className={styles.heroMeta}>
                    {roadmap.heroBadges.map((b: string) => (
                        <span key={b} className={styles.metaBadge}>{b}</span>
                    ))}
                </div>
                <Link
                    href="/contact"
                    className={styles.enrollBtn}
                    style={{
                        background: `linear-gradient(135deg, ${roadmap.accentColor}, ${roadmap.accentColorDark})`,
                        boxShadow: `0 4px 24px ${roadmap.accentColor}55`,
                    }}
                >
                    Enroll Now →
                </Link>
            </section>

            {roadmap.seoContent && (
                <section className={styles.seoSection}>
                    <div
                        className={styles.seoContainer}
                        style={{ "--accent-color": roadmap.accentColor } as React.CSSProperties}
                    >
                        {roadmap.seoContent}
                    </div>
                </section>
            )}

            <section className={styles.roadmapSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.pill}>Learning Roadmap</span>
                    <h2 className={styles.sectionTitle}>What You&apos;ll Learn</h2>
                    <p className={styles.sectionSub}>
                        A milestone-by-milestone journey from first principles to production deployment.
                    </p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.road} aria-hidden="true" />

                    {roadmap.phases.map((phase: Phase, idx: number) => {
                        const isRight = idx % 2 === 1;
                        return (
                            <div
                                key={phase.id}
                                className={`${styles.milestone} ${isRight ? styles.right : styles.left}`}
                            >
                                <div className={styles.card}>
                                    <div
                                        className={styles.levelBadge}
                                        style={{
                                            background: `${phase.color}22`,
                                            color: phase.color,
                                            borderColor: `${phase.color}55`,
                                        }}
                                    >
                                        <span className={styles.flagLabel}>{phase.flag}</span>
                                        <span className={styles.levelLabel}>{phase.level}</span>
                                        <span className={styles.monthsLabel}>{phase.months}</span>
                                    </div>

                                    <h3 className={styles.phaseName}>{phase.phaseName}</h3>

                                    {phase.sections.map((section: Section) => (
                                        <div key={section.title} className={styles.subSection}>
                                            <h4 className={styles.subTitle}>
                                                <span className={styles.subDot} style={{ background: phase.color }} />
                                                {section.title}
                                            </h4>
                                            <ul className={styles.points}>
                                                {section.points.map((pt: string) => (
                                                    <li key={pt} className={styles.point}>
                                                        <span className={styles.check} style={{ color: phase.color }}>✓</span>
                                                        {pt}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                    <div
                                        className={styles.outcome}
                                        style={{
                                            borderColor: `${phase.color}44`,
                                            background: `${phase.color}0d`,
                                        }}
                                    >
                                        <span className={styles.outcomeIcon}>📌</span>
                                        <span>
                                            <strong style={{ color: phase.color }}>Outcome: </strong>
                                            {phase.outcome}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className={styles.node}
                                    style={{ background: phase.color, boxShadow: `0 0 24px ${phase.color}66` }}
                                    aria-hidden="true"
                                >
                                    <span className={styles.nodeIcon}>{phase.icon}</span>
                                </div>
                            </div>
                        );
                    })}

                    <div className={styles.flagStart}>🎯 START</div>
                    <div className={styles.flagEnd}>🏆 GOAL</div>
                </div>
            </section>
        </main>
    );
}
