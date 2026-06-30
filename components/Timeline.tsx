import styles from './Timeline.module.css';

interface TimelineStep {
    number: string;
    title: string;
    description: string;
    color: string;
}

interface TimelineProps {
    steps: TimelineStep[];
    title?: string;
}

export default function Timeline({ steps, title = "How It Works" }: TimelineProps) {
    return (
        <div className={styles.timelineContainer}>
            <h2 className={styles.timelineTitle}>{title}</h2>

            <div className={styles.timeline}>
                {/* SVG Serpentine Path */}
                <svg className={styles.timelinePath} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="33%" stopColor="#f97316" />
                            <stop offset="66%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                    {/* Curved S-path connecting all steps */}
                    <path
                        d="M 150 100 Q 350 100, 450 150 T 750 150 Q 950 150, 1050 250 T 1050 350 Q 1050 450, 850 500 T 450 500 Q 250 500, 150 450"
                        fill="none"
                        stroke="url(#pathGradient)"
                        strokeWidth="3"
                        className={styles.pathLine}
                    />
                </svg>

                {/* Start Marker */}
                <div className={styles.startMarker}>START</div>

                {/* Step 1 - Top Left */}
                <div className={styles.step1} style={{ '--step-color': steps[0]?.color } as React.CSSProperties}>
                    <div className={styles.stepCircle}>
                        <span className={styles.stepNumber}>{steps[0]?.number}</span>
                    </div>
                    <div className={styles.stepCard}>
                        <h3 className={styles.stepTitle}>{steps[0]?.title}</h3>
                        <p className={styles.stepDescription}>{steps[0]?.description}</p>
                    </div>
                </div>

                {/* Step 2 - Top Right */}
                <div className={styles.step2} style={{ '--step-color': steps[1]?.color } as React.CSSProperties}>
                    <div className={styles.stepCircle}>
                        <span className={styles.stepNumber}>{steps[1]?.number}</span>
                    </div>
                    <div className={styles.stepCard}>
                        <h3 className={styles.stepTitle}>{steps[1]?.title}</h3>
                        <p className={styles.stepDescription}>{steps[1]?.description}</p>
                    </div>
                </div>

                {/* Step 3 - Bottom Right */}
                <div className={styles.step3} style={{ '--step-color': steps[2]?.color } as React.CSSProperties}>
                    <div className={styles.stepCircle}>
                        <span className={styles.stepNumber}>{steps[2]?.number}</span>
                    </div>
                    <div className={styles.stepCard}>
                        <h3 className={styles.stepTitle}>{steps[2]?.title}</h3>
                        <p className={styles.stepDescription}>{steps[2]?.description}</p>
                    </div>
                </div>

                {/* Step 4 - Bottom Left */}
                <div className={styles.step4} style={{ '--step-color': steps[3]?.color } as React.CSSProperties}>
                    <div className={styles.stepCircle}>
                        <span className={styles.stepNumber}>{steps[3]?.number}</span>
                    </div>
                    <div className={styles.stepCard}>
                        <h3 className={styles.stepTitle}>{steps[3]?.title}</h3>
                        <p className={styles.stepDescription}>{steps[3]?.description}</p>
                    </div>
                </div>

                {/* End Marker */}
                <div className={styles.endMarker}>END</div>
            </div>
        </div>
    );
}
