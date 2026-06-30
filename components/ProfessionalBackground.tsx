'use client';

import { useEffect, useRef } from 'react';
import styles from './ProfessionalBackground.module.css';

/**
 * Professional Background Component
 * 
 * Features:
 * - Soft mesh gradient with moving color orbs
 * - Subtle dot pattern for texture
 * - Gentle vignette effect
 * - Eye-friendly color palette
 * - Smooth 60fps animations
 */
export default function ProfessionalBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Create soft mesh gradient orbs
        const orbs = [
            {
                x: 0.15,
                y: 0.2,
                radius: 400,
                color: 'rgba(59, 130, 246, 0.12)',
                speedX: 0.0003,
                speedY: 0.0002
            },
            {
                x: 0.85,
                y: 0.8,
                radius: 450,
                color: 'rgba(139, 92, 246, 0.1)',
                speedX: -0.0002,
                speedY: 0.0003
            },
            {
                x: 0.5,
                y: 0.5,
                radius: 350,
                color: 'rgba(99, 102, 241, 0.08)',
                speedX: 0.00025,
                speedY: -0.00025
            },
            {
                x: 0.3,
                y: 0.7,
                radius: 300,
                color: 'rgba(147, 51, 234, 0.06)',
                speedX: -0.00015,
                speedY: -0.0002
            },
        ];

        let time = 0;
        let animationFrameId: number;

        const animate = () => {
            // Clear canvas
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw each orb
            orbs.forEach((orb, index) => {
                // Calculate position with slow, smooth movement
                const offsetX = Math.sin(time * orb.speedX + index * 2) * 80;
                const offsetY = Math.cos(time * orb.speedY + index * 2) * 80;

                const x = canvas.width * orb.x + offsetX;
                const y = canvas.height * orb.y + offsetY;

                // Create radial gradient
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.radius);
                gradient.addColorStop(0, orb.color);
                gradient.addColorStop(0.5, orb.color.replace(/[\d.]+\)/, '0.04)'));
                gradient.addColorStop(1, 'transparent');

                // Draw orb
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });

            time += 16;
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className={styles.background}>
            {/* Animated mesh gradient */}
            <canvas ref={canvasRef} className={styles.canvas} />

            {/* Subtle dot pattern */}
            <div className={styles.dotPattern} />

            {/* Soft vignette */}
            <div className={styles.vignette} />

            {/* Gradient overlay for depth */}
            <div className={styles.gradientOverlay} />
        </div>
    );
}
