'use client';

import { useEffect, useState } from 'react';
import styles from './AnimatedBackground.module.css';

/**
 * Futuristic Animated Background Component
 * 
 * Features:
 * - Animated perspective grid
 * - Floating geometric shapes (hexagons, triangles, circles)
 * - Particle network with connection lines
 * - Glowing orbs with pulse effects
 * - Scan line overlay
 * - Neon color palette (cyberpunk aesthetic)
 * 
 * Performance:
 * - Desktop: 60fps with all effects
 * - Tablet: 45fps with reduced particles
 * - Mobile: 30fps with minimal effects
 */
export default function AnimatedBackground() {
    const [isPaused, setIsPaused] = useState(false);

    // Pause animations when tab is not visible
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsPaused(document.hidden);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <div
            className={styles.futuristicBg}
            aria-hidden="true"
            style={{
                animationPlayState: isPaused ? 'paused' : 'running',
            }}
        >
            {/* Animated Grid Background */}
            <div className={styles.gridContainer}>
                <div className={styles.grid} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            </div>

            {/* Scan Lines Overlay */}
            <div className={styles.scanLines}>
                <div className={`${styles.scanLine} ${styles.scanLine1}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.scanLine} ${styles.scanLine2}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.scanLine} ${styles.scanLine3}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            </div>

            {/* Floating Geometric Shapes - Hexagons */}
            <div className={`${styles.shape} ${styles.hexagon} ${styles.hex1}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.hexagon} ${styles.hex2}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.hexagon} ${styles.hex3}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.hexagon} ${styles.hex4}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.hexagon} ${styles.hex5}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.hexagon} ${styles.hex6}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.hexagon} ${styles.hex7}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.hexagon} ${styles.hex8}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />

            {/* Floating Geometric Shapes - Triangles */}
            <div className={`${styles.shape} ${styles.triangle} ${styles.tri1}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.triangle} ${styles.tri2}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.triangle} ${styles.tri3}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.triangle} ${styles.tri4}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.triangle} ${styles.tri5}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.triangle} ${styles.tri6}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />

            {/* Floating Geometric Shapes - Circles */}
            <div className={`${styles.shape} ${styles.circle} ${styles.circ1}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.circle} ${styles.circ2}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.circle} ${styles.circ3}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.circle} ${styles.circ4}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.circle} ${styles.circ5}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.shape} ${styles.circle} ${styles.circ6}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />

            {/* Glowing Orbs with Pulse Effects */}
            <div className={`${styles.orb} ${styles.orb1}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.orb} ${styles.orb2}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.orb} ${styles.orb3}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.orb} ${styles.orb4}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <div className={`${styles.orb} ${styles.orb5}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />

            {/* Particle Network */}
            <div className={styles.particles}>
                {/* Top particles */}
                <div className={`${styles.particle} ${styles.p1}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p2}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p3}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p4}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p5}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p6}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p7}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p8}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p9}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p10}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />

                {/* Middle particles */}
                <div className={`${styles.particle} ${styles.p11}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p12}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p13}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p14}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p15}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p16}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p17}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p18}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p19}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p20}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />

                {/* Bottom particles */}
                <div className={`${styles.particle} ${styles.p21}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p22}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p23}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p24}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p25}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p26}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p27}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p28}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p29}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
                <div className={`${styles.particle} ${styles.p30}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            </div>

            {/* Gradient Overlay for depth */}
            <div className={styles.gradientOverlay} />
        </div>
    );
}