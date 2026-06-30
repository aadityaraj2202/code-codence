'use client';

import { useEffect, useRef, useState } from 'react';
import { ServiceComponent, ServiceCategory } from '@/data/services';
import ProfessionalBackground from '@/components/ProfessionalBackground';
import Breadcrumbs from '@/components/Breadcrumbs';
import Timeline from '@/components/Timeline';
import styles from './CyberpunkProjectPage.module.css';

interface CyberpunkProjectPageProps {
    component: ServiceComponent;
    category: ServiceCategory;
}

export default function CyberpunkProjectPage({ component, category }: CyberpunkProjectPageProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Track mouse position for parallax effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Scroll reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.revealed);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(`.${styles.scrollReveal}`);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [isMounted]);

    // 3D tilt effect handler
    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((centerX - x) / centerX) * 10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(1.05, 1.05, 1.05)
        `;
    };

    const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    // Ripple effect for CTA button
    const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.className = styles.ripple;

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    };

    if (!isMounted) return null;

    return (
        <div className={styles.cyberpunkPage}>
            <ProfessionalBackground />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <Breadcrumbs
                    items={[
                        { label: 'Services', href: '/services' },
                        { label: category.title, href: `/services/${category.id}` },
                        { label: component.title, href: `/services/${category.id}/${component.id}` }
                    ]}
                />

                {/* Animated Header Section */}
                <div className={styles.header} ref={headerRef}>
                    {/* Cyberpunk Brackets */}
                    <div className={styles.bracketTopLeft} />
                    <div className={styles.bracketTopRight} />
                    <div className={styles.bracketBottomLeft} />
                    <div className={styles.bracketBottomRight} />

                    {/* Category Badge */}
                    <div className={styles.badge}>{category.title}</div>

                    {/* Animated Title with Letter Reveal */}
                    <h1 className={styles.title}>
                        {component.title.split('').map((char, index) => (
                            <span
                                key={`${char}-${index}`}
                                className={styles.letter}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h1>

                    {/* Pulsing Subtitle */}
                    <p className={styles.subtitle}>{component.summary}</p>

                    {/* Decorative Lines */}
                    <div className={styles.decorativeLine} />
                </div>

                {/* Description */}
                <div className={`${styles.description} ${styles.scrollReveal}`}>
                    <p>{component.description}</p>
                </div>

                {/* Service Items - What We Offer */}
                <section className={`${styles.section} ${styles.scrollReveal}`}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.sectionTitleText}>What We Offer</span>
                        <span className={styles.terminalCursor} />
                    </h2>

                    <div className={styles.serviceItemsContainer}>
                        {component.useCases
                            .filter(useCase =>
                                !useCase.title.includes('How It Works') &&
                                !useCase.title.includes('Our Approach to Digital Marketing')
                            )
                            .map((useCase, index) => (
                                <div
                                    key={useCase.title}
                                    className={`${styles.serviceItem} ${styles.scrollReveal} ${index % 2 === 1 ? styles.serviceItemReverse : ''
                                        }`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    {/* Image Section */}
                                    <div className={styles.serviceImage}>
                                        <div className={styles.imageGlow} />
                                        {component.id === 'skill-career-support' ? (
                                            // Skill & Career Support: Use 4 specific images
                                            index === 0 ? (
                                                <img
                                                    src="/images/career-mentoring-roadmap.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 1 ? (
                                                <img
                                                    src="/images/ai-tools-automation.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 2 ? (
                                                <img
                                                    src="/images/portfolio-building.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 3 ? (
                                                <img
                                                    src="/images/linkedin-branding.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : (
                                                <div className={styles.imagePlaceholder}>
                                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            )
                                        ) : component.id === 'student-centric-design' ? (
                                            // Student-Centric Design: Use 4 specific images
                                            index === 0 ? (
                                                <img
                                                    src="/images/resume-cv-designing.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 1 ? (
                                                <img
                                                    src="/images/ppt-presentations.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 2 ? (
                                                <img
                                                    src="/images/portfolio-website-dev.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 3 ? (
                                                <img
                                                    src="/images/poster-report-designing.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : (
                                                <div className={styles.imagePlaceholder}>
                                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            )
                                        ) : component.id === 'strategic-content-automation' ? (
                                            // Content Automation
                                            index === 0 ? (
                                                <img
                                                    src="/images/services/content-marketing.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 1 ? (
                                                <img
                                                    src="/images/services/email-marketing.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 2 ? (
                                                <img
                                                    src="/images/services/youtube-strategy.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : (
                                                <div className={styles.imagePlaceholder}>
                                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                    </svg>
                                                </div>
                                            )
                                        ) : component.id === 'web-development' ? (
                                            // Web Development: User-provided images
                                            index === 0 ? (
                                                <img
                                                    src="/images/business-websites.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 1 ? (
                                                <img
                                                    src="/images/ecommerce-websites.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 2 ? (
                                                <img
                                                    src="/images/custom-apps.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 3 ? (
                                                <img
                                                    src="/images/landing-pages.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : (
                                                <div className={styles.imagePlaceholder}>
                                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            )
                                        ) : component.id === 'team-training' ? (
                                            // Team Training
                                            index === 0 ? (
                                                <img
                                                    src="/images/services/ai-tools.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 1 ? (
                                                <img
                                                    src="/images/services/predictive-analytics.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 2 ? (
                                                <img
                                                    src="/images/services/custom-solutions.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : (
                                                <div className={styles.imagePlaceholder}>
                                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            )
                                        ) : component.id === 'graphic-design-branding' ? (
                                            // Graphic Design & Branding
                                            index === 0 ? (
                                                <img
                                                    src="/images/logo-branding.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 1 ? (
                                                <img
                                                    src="/images/social-media-creatives.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 2 ? (
                                                <img
                                                    src="/images/flyers-brochures.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 3 ? (
                                                <img
                                                    src="/images/packaging-label-design.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 4 ? (
                                                <img
                                                    src="/images/digital-invitations.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : (
                                                <div className={styles.imagePlaceholder}>
                                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            )
                                        ) : component.id === 'integrated-add-on' ? (
                                            // Add-On Services & Business Process Automation
                                            index === 0 ? (
                                                <img
                                                    src="/images/services/website-social-management.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 1 ? (
                                                <img
                                                    src="/images/services/monthly-technical-support.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 2 ? (
                                                <img
                                                    src="/images/services/workflow-analysis.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 3 ? (
                                                <img
                                                    src="/images/services/automation-strategy.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 4 ? (
                                                <img
                                                    src="/images/services/integration-implementation.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 5 ? (
                                                <img
                                                    src="/images/services/automation-training.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : (
                                                <div className={styles.imagePlaceholder}>
                                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            )
                                        ) : component.id === 'performance-platform-marketing' ? (
                                            // Performance & Platform Marketing
                                            index === 0 ? (
                                                <img
                                                    src="/images/services/seo-optimization.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 1 ? (
                                                <img
                                                    src="/images/services/google-ads.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 2 ? (
                                                <img
                                                    src="/images/services/social-media-marketing.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : (
                                                <div className={styles.imagePlaceholder}>
                                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            )
                                        ) : component.id === 'business-consulting' ? (
                                            // Business Consulting
                                            index === 0 ? (
                                                <img
                                                    src="/images/services/whatsapp-bot.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 1 ? (
                                                <img
                                                    src="/images/services/ai-tools.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 2 ? (
                                                <img
                                                    src="/images/services/predictive-analytics.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 3 ? (
                                                <img
                                                    src="/images/services/custom-solutions.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : (
                                                <div className={styles.imagePlaceholder}>
                                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            )
                                        ) : (
                                            // Fallback for others
                                            index === 0 ? (
                                                <img
                                                    src="/images/comprehensive-project-support.jpg"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 1 ? (
                                                <img
                                                    src="/images/academic-projects-courses.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 2 ? (
                                                <img
                                                    src="/images/minor-major-projects.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 3 ? (
                                                <img
                                                    src="/images/ai-ml-data-science.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 4 ? (
                                                <img
                                                    src="/images/programming-languages.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : index === 5 ? (
                                                <img
                                                    src="/images/internship-certification.png"
                                                    alt={useCase.title}
                                                    className={styles.serviceImageActual}
                                                />
                                            ) : (
                                                <div className={styles.imagePlaceholder}>
                                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* Text Content Section */}
                                    <div className={styles.serviceContent}>
                                        <h3 className={styles.serviceTitle}>{useCase.title}</h3>
                                        <div className={styles.serviceDivider} />
                                        <p className={styles.serviceDescription}>{useCase.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>

                {/* Timeline - How It Works (for business-consulting and tech-solutions) */}
                {(component.id === 'business-consulting' ||
                    component.id === 'web-development' ||
                    component.id === 'graphic-design-branding' ||
                    component.id === 'performance-platform-marketing' ||
                    component.id === 'strategic-content-automation') && (
                        <Timeline
                            title={component.id === 'performance-platform-marketing' ? 'Our Approach to Digital Marketing' : 'How It Works'}
                            steps={component.useCases
                                .filter(useCase => useCase.title.includes('How It Works') || useCase.title.includes('Our Approach to Digital Marketing'))
                                .map((useCase, index) => ({
                                    number: `0${index + 1}`,
                                    title: useCase.title.replace('How It Works - ', '').replace('Our Approach to Digital Marketing - ', '').replace(/Step \d+: /, ''),
                                    description: useCase.description,
                                    color: index === 0 ? '#fbbf24' : index === 1 ? '#f97316' : index === 2 ? '#a855f7' : '#ec4899'
                                }))}
                        />
                    )}

                {/* Holographic Benefits Panel */}
                <section className={`${styles.section} ${styles.scrollReveal}`}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.sectionTitleText}>Benefits for Your Business</span>
                        <span className={styles.terminalCursor} />
                    </h2>

                    <div className={styles.benefitsPanel}>
                        {/* Hexagon Pattern Overlay */}
                        <div className={styles.hexagonPattern} />

                        {/* Rotating Glow */}
                        <div className={styles.rotatingGlow} />

                        <div className={styles.benefitsGrid}>
                            {component.benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className={`${styles.benefitItem} ${styles.scrollReveal}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Animated Check Mark */}
                                    <div className={styles.checkMark}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                            <path
                                                d="M8 12L11 15L16 9"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Grid - Industries We Serve */}
                <section className={`${styles.section} ${styles.scrollReveal}`}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.sectionTitleText}>Industries We Serve</span>
                        <span className={styles.terminalCursor} />
                    </h2>

                    <div className={styles.featureGrid}>
                        {component.features.map((feature, index) => {
                            // Industry-specific icons
                            const getIndustryIcon = (industry: string) => {
                                if (industry.includes('E-Commerce') || industry.includes('Retail')) {
                                    return (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="9" cy="21" r="1" />
                                            <circle cx="20" cy="21" r="1" />
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                        </svg>
                                    );
                                } else if (industry.includes('Healthcare')) {
                                    return (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                        </svg>
                                    );
                                } else if (industry.includes('EdTech') || industry.includes('Education')) {
                                    return (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                        </svg>
                                    );
                                } else if (industry.includes('Real Estate')) {
                                    return (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                    );
                                } else if (industry.includes('Finance') || industry.includes('Insurance')) {
                                    return (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="12" y1="1" x2="12" y2="23" />
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    );
                                } else if (industry.includes('Logistics')) {
                                    return (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="1" y="3" width="15" height="13" />
                                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                                            <circle cx="5.5" cy="18.5" r="2.5" />
                                            <circle cx="18.5" cy="18.5" r="2.5" />
                                        </svg>
                                    );
                                } else if (industry.includes('Corporate') || industry.includes('Small Business')) {
                                    return (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                        </svg>
                                    );
                                } else if (industry.includes('Startup') || industry.includes('Entrepreneur')) {
                                    return (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    );
                                }
                                // Default icon
                                return (
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                    </svg>
                                );
                            };

                            return (
                                <div
                                    key={index}
                                    className={`${styles.featureCard} ${styles.scrollReveal}`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                    onMouseMove={handleCardMouseMove}
                                    onMouseLeave={handleCardMouseLeave}
                                >
                                    {/* Glowing Border */}
                                    <div className={styles.featureGlow} />

                                    {/* Industry Icon */}
                                    <div className={styles.featureIcon}>
                                        {getIndustryIcon(feature)}
                                    </div>

                                    <p>{feature}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Success Stories - For business-consulting */}
                {component.id === 'business-consulting' && (
                    <section className={`${styles.section} ${styles.scrollReveal}`}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionTitleText}>Success Stories</span>
                            <span className={styles.terminalCursor} />
                        </h2>
                        <p className={styles.sectionSubtitle}>Real results from AI implementations</p>

                        <div className={styles.successStoriesGrid}>
                            {/* Case Study 1 */}
                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line x1="12" y1="22.08" x2="12" y2="12" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Retail AI Bot</h3>
                                <p className={styles.successDescription}>Automated customer support for e-commerce platform</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>70%</div>
                                    <div className={styles.metricLabel}>Reduced Query Time</div>
                                </div>
                                <div className={styles.successBadge}>E-Commerce</div>
                            </div>

                            {/* Case Study 2 */}
                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <polyline points="17 11 19 13 23 9" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>HR Automation Tool</h3>
                                <p className={styles.successDescription}>AI-powered resume screening and candidate matching</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>500</div>
                                    <div className={styles.metricLabel}>Resumes in 3 Minutes</div>
                                </div>
                                <div className={styles.successBadge}>HR Tech</div>
                            </div>

                            {/* Case Study 3 */}
                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.3s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="12" y1="20" x2="12" y2="10" />
                                        <line x1="18" y1="20" x2="18" y2="4" />
                                        <line x1="6" y1="20" x2="6" y2="16" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Sales Forecast Model</h3>
                                <p className={styles.successDescription}>Predictive analytics for revenue optimization</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>40%</div>
                                    <div className={styles.metricLabel}>Revenue Accuracy</div>
                                </div>
                                <div className={styles.successBadge}>Analytics</div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Success Stories - For graphic-design-branding */}
                {component.id === 'graphic-design-branding' && (
                    <section className={`${styles.section} ${styles.scrollReveal}`}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionTitleText}>Success Stories</span>
                            <span className={styles.terminalCursor} />
                        </h2>
                        <p className={styles.sectionSubtitle}>Impactful results from our design solutions</p>

                        <div className={styles.successStoriesGrid}>
                            {/* Case Study 1: Startup Brand Kit */}
                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                        <polyline points="2 17 12 22 22 17" />
                                        <polyline points="2 12 12 17 22 12" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Startup Brand Kit</h3>
                                <p className={styles.successDescription}>Helped a new brand gain instant recognition and customer trust</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>100%</div>
                                    <div className={styles.metricLabel}>Brand Consistency</div>
                                </div>
                                <div className={styles.successBadge}>Branding</div>
                            </div>

                            {/* Case Study 2: Social Media Creatives */}
                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Social Media Creatives</h3>
                                <p className={styles.successDescription}>Boosted engagement by 80% for a local business in 3 months</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>80%</div>
                                    <div className={styles.metricLabel}>Active Engagement</div>
                                </div>
                                <div className={styles.successBadge}>Social Media</div>
                            </div>

                            {/* Case Study 3: Packaging Design */}
                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.3s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line x1="12" y1="22.08" x2="12" y2="12" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Packaging Design</h3>
                                <p className={styles.successDescription}>Increased product shelf appeal, leading to 25% sales growth</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>25%</div>
                                    <div className={styles.metricLabel}>Sales Growth</div>
                                </div>
                                <div className={styles.successBadge}>Packaging</div>
                            </div>
                        </div>
                    </section>
                )}



                {/* Success Stories - For performance-platform-marketing */}
                {component.id === 'performance-platform-marketing' && (
                    <section className={`${styles.section} ${styles.scrollReveal}`}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionTitleText}>Success Stories</span>
                            <span className={styles.terminalCursor} />
                        </h2>
                        <p className={styles.sectionSubtitle}>Performance Results</p>

                        <div className={styles.successStoriesGrid}>
                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                        <polyline points="17 6 23 6 23 12" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>SEO Success</h3>
                                <p className={styles.successDescription}>Improved organic traffic by 120% in 4 months for an EdTech platform.</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>120%</div>
                                    <div className={styles.metricLabel}>Organic Boost</div>
                                </div>
                                <div className={styles.successBadge}>Search SEO</div>
                            </div>

                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Google Ads Result</h3>
                                <p className={styles.successDescription}>Generated 3,000+ leads with optimized CPL for a real estate agency.</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>3,000+</div>
                                    <div className={styles.metricLabel}>Qualified Leads</div>
                                </div>
                                <div className={styles.successBadge}>Ads Result</div>
                            </div>

                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.3s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 8A3 3 0 0 0 15 5a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3z" />
                                        <path d="M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Social Reach</h3>
                                <p className={styles.successDescription}>Boosted Instagram reach for a retail brand in 6 weeks.</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>350%</div>
                                    <div className={styles.metricLabel}>Reach Growth</div>
                                </div>
                                <div className={styles.successBadge}>Social Media</div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Success Stories - For strategic-content-automation */}
                {component.id === 'strategic-content-automation' && (
                    <section className={`${styles.section} ${styles.scrollReveal}`}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.sectionTitleText}>Success Stories</span>
                            <span className={styles.terminalCursor} />
                        </h2>
                        <p className={styles.sectionSubtitle}>AI & Automation at Scale</p>

                        <div className={styles.successStoriesGrid}>
                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                                        <path d="M2 17L12 22L22 17" />
                                        <path d="M2 12L12 17L22 12" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Content Scale</h3>
                                <p className={styles.successDescription}>3x increase in publication volume with 40% less manual effort.</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>3x</div>
                                    <div className={styles.metricLabel}>Volume Boost</div>
                                </div>
                                <div className={styles.successBadge}>AI Content</div>
                            </div>

                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Automation ROI</h3>
                                <p className={styles.successDescription}>50% higher lead-to-customer conversion via automated nurture flows.</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>50%</div>
                                    <div className={styles.metricLabel}>Conversion Uplift</div>
                                </div>
                                <div className={styles.successBadge}>Automation</div>
                            </div>

                            <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.3s' }}>
                                <div className={styles.successIcon}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Newsletter Engagement</h3>
                                <p className={styles.successDescription}>120% boost in open rates with AI-driven personalization.</p>
                                <div className={styles.successMetric}>
                                    <div className={styles.metricNumber}>120%</div>
                                    <div className={styles.metricLabel}>Open Rate Boost</div>
                                </div>
                                <div className={styles.successBadge}>Personalization</div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Success Stories - For integrated-add-on */}
                {
                    component.id === 'integrated-add-on' && (
                        <section className={`${styles.section} ${styles.scrollReveal}`}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionTitleText}>Success Stories</span>
                                <span className={styles.terminalCursor} />
                            </h2>
                            <p className={styles.sectionSubtitle}>Mini Case Studies of Automation Success</p>

                            <div className={styles.successStoriesGrid}>
                                {/* Case Study 1: Retail Automation */}
                                <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                    <div className={styles.successIcon}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                            <polyline points="10 9 9 9 8 9" />
                                        </svg>
                                    </div>
                                    <h3 className={styles.successTitle}>Retail Invoice Automation</h3>
                                    <p className={styles.successDescription}>Automated invoice processing for a retail chain, reducing manual entry.</p>
                                    <div className={styles.successMetric}>
                                        <div className={styles.metricNumber}>85%</div>
                                        <div className={styles.metricLabel}>Less Manual Work</div>
                                    </div>
                                    <div className={styles.successBadge}>Retail</div>
                                </div>

                                {/* Case Study 2: Real Estate Leads */}
                                <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                    <div className={styles.successIcon}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <h3 className={styles.successTitle}>Real Estate Lead Mgmt</h3>
                                    <p className={styles.successDescription}>Streamlined lead management, increasing follow-up efficiency.</p>
                                    <div className={styles.successMetric}>
                                        <div className={styles.metricNumber}>50%</div>
                                        <div className={styles.metricLabel}>More Efficiency</div>
                                    </div>
                                    <div className={styles.successBadge}>Real Estate</div>
                                </div>

                                {/* Case Study 3: Manufacturing ERP */}
                                <div className={`${styles.successCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.3s' }}>
                                    <div className={styles.successIcon}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                        </svg>
                                    </div>
                                    <h3 className={styles.successTitle}>Manufacturing CRM+ERP</h3>
                                    <p className={styles.successDescription}>Integrated CRM & ERP automation, cutting process time significantly.</p>
                                    <div className={styles.successMetric}>
                                        <div className={styles.metricNumber}>40%</div>
                                        <div className={styles.metricLabel}>Faster Processes</div>
                                    </div>
                                    <div className={styles.successBadge}>Manufacturing</div>
                                </div>
                            </div>
                        </section>
                    )
                }

                {/* Client Testimonials - For web-development */}
                {
                    component.id === 'web-development' && (
                        <section className={`${styles.section} ${styles.scrollReveal}`}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionTitleText}>Client Testimonials</span>
                                <span className={styles.terminalCursor} />
                            </h2>
                            <p className={styles.sectionSubtitle}>Stories of success and partnership</p>

                            <div className={styles.testimonialsGrid}>
                                {/* Testimonial 1 */}
                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Code Codence revamped our website and made it mobile-friendly. Traffic and sales doubled!"
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Rina M.</div>
                                            <div className={styles.authorRole}>Retail Business Owner</div>
                                        </div>
                                    </div>
                                    <div className={styles.testimonialDecor} />
                                </div>

                                {/* Testimonial 2 */}
                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Their custom inventory app helped us automate stock tracking perfectly."
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Sanjay P.</div>
                                            <div className={styles.authorRole}>SME Owner</div>
                                        </div>
                                    </div>
                                    <div className={styles.testimonialDecor} />
                                </div>
                            </div>
                        </section>
                    )
                }

                {/* Client Testimonials - For strategic-content-automation */}
                {
                    component.id === 'strategic-content-automation' && (
                        <section className={`${styles.section} ${styles.scrollReveal}`}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionTitleText}>Client Testimonials</span>
                                <span className={styles.terminalCursor} />
                            </h2>
                            <p className={styles.sectionSubtitle}>AI & Automation Feedback</p>

                            <div className={styles.testimonialsGrid}>

                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Our content finally has structure and purpose. Code Codence made us sound like pros."
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Rekha T.</div>
                                            <div className={styles.authorRole}>Coaching Center Director</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Their email automation helped us re-engage old leads and convert them into paying clients."
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Manish S.</div>
                                            <div className={styles.authorRole}>EduTech Owner</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }

                {/* Client Testimonials - For performance-platform-marketing */}
                {
                    component.id === 'performance-platform-marketing' && (
                        <section className={`${styles.section} ${styles.scrollReveal}`}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionTitleText}>Client Testimonials</span>
                                <span className={styles.terminalCursor} />
                            </h2>
                            <p className={styles.sectionSubtitle}>Performance Results</p>

                            <div className={styles.testimonialsGrid}>
                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Our website traffic has doubled and we're getting qualified leads every day."
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Anita R.</div>
                                            <div className={styles.authorRole}>Coaching Institute Founder</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Code Codence helped us launch our first ad campaign and we saw results in 48 hours."
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Rohit M.</div>
                                            <div className={styles.authorRole}>Clinic Owner</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }



                {/* Client Testimonials - Only for business-consulting */}
                {
                    component.id === 'business-consulting' && (
                        <section className={`${styles.section} ${styles.scrollReveal}`}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionTitleText}>Client Testimonials</span>
                                <span className={styles.terminalCursor} />
                            </h2>
                            <p className={styles.sectionSubtitle}>What our clients say about us</p>

                            <div className={styles.testimonialsGrid}>
                                {/* Testimonial 1 */}
                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Code Codence helped us automate 80% of our client interactions. Game-changer!"
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Priya S.</div>
                                            <div className={styles.authorRole}>EdTech Founder</div>
                                        </div>
                                    </div>
                                    <div className={styles.testimonialDecor} />
                                </div>

                                {/* Testimonial 2 */}
                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Their predictive model helped us restock smarter & reduce losses."
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Ankur T.</div>
                                            <div className={styles.authorRole}>FMCG Business Owner</div>
                                        </div>
                                    </div>
                                    <div className={styles.testimonialDecor} />
                                </div>
                            </div>
                        </section>
                    )
                }

                {/* Client Testimonials - For graphic-design-branding */}
                {
                    component.id === 'graphic-design-branding' && (
                        <section className={`${styles.section} ${styles.scrollReveal}`}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionTitleText}>Client Testimonials</span>
                                <span className={styles.terminalCursor} />
                            </h2>
                            <p className={styles.sectionSubtitle}>Words from our creative partners</p>

                            <div className={styles.testimonialsGrid}>
                                {/* Testimonial 1 */}
                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Code Codence transformed our brand visuals and helped us look professional across all channels."
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Nisha K.</div>
                                            <div className={styles.authorRole}>Startup Founder</div>
                                        </div>
                                    </div>
                                    <div className={styles.testimonialDecor} />
                                </div>

                                {/* Testimonial 2 */}
                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Their social media designs made our promotions more attractive and effective."
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Rajiv S.</div>
                                            <div className={styles.authorRole}>Marketing Manager</div>
                                        </div>
                                    </div>
                                    <div className={styles.testimonialDecor} />
                                </div>
                            </div>
                        </section>
                    )
                }



                {/* Client Testimonials - For integrated-add-on */}
                {
                    component.id === 'integrated-add-on' && (
                        <section className={`${styles.section} ${styles.scrollReveal}`}>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.sectionTitleText}>Client Testimonials</span>
                                <span className={styles.terminalCursor} />
                            </h2>
                            <p className={styles.sectionSubtitle}>Feedback from our partners</p>

                            <div className={styles.testimonialsGrid}>
                                {/* Testimonial 1 */}
                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.1s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Thanks to Code Codence, our operations run smoother and our team focuses on growth instead of repetitive tasks."
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Sonal M.</div>
                                            <div className={styles.authorRole}>Retail Business Owner</div>
                                        </div>
                                    </div>
                                    <div className={styles.testimonialDecor} />
                                </div>

                                {/* Testimonial 2 */}
                                <div className={`${styles.testimonialCard} ${styles.scrollReveal}`} style={{ animationDelay: '0.2s' }}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "Their automation consulting helped us reduce costs and improve accuracy significantly."
                                    </p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>Amit R.</div>
                                            <div className={styles.authorRole}>Manufacturing Manager</div>
                                        </div>
                                    </div>
                                    <div className={styles.testimonialDecor} />
                                </div>
                            </div>
                        </section>
                    )
                }

                {/* CTA Section - Hidden for graphic-design-branding and integrated-add-on as requested */}
                {
                    component.id !== 'graphic-design-branding' &&
                    component.id !== 'integrated-add-on' &&
                    component.id !== 'strategic-content-automation' && (
                        <section className={`${styles.ctaSection} ${styles.scrollReveal}`}>
                            <div className={styles.ctaContent}>
                                <h2 className={styles.ctaTitle}>Ready to get started?</h2>
                                <p className={styles.ctaSubtitle}>
                                    Join thousands of satisfied clients who have transformed their success with our services
                                </p>

                                <button className={styles.ctaButton} onClick={createRipple}>
                                    <span className={styles.buttonText}>{component.cta.text}</span>
                                    <svg
                                        className={styles.buttonArrow}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M5 12H19M19 12L12 5M19 12L12 19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>

                                {/* Decorative Elements */}
                                <div className={styles.ctaDecor1} />
                                <div className={styles.ctaDecor2} />
                            </div>
                        </section>
                    )
                }

                {/* Floating Holographic Elements */}
                <div className={styles.floatingElements}>
                    <div
                        className={styles.floatingData}
                        style={{
                            top: '15%',
                            left: '5%',
                            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                        }}
                    >
                        <div className={styles.dataLabel}>Success Rate</div>
                        <div className={styles.dataValue}>98.5%</div>
                    </div>

                    <div
                        className={styles.floatingData}
                        style={{
                            top: '60%',
                            right: '5%',
                            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
                        }}
                    >
                        <div className={styles.dataLabel}>Projects</div>
                        <div className={styles.dataValue}>1,247+</div>
                    </div>

                    <div
                        className={styles.floatingGraph}
                        style={{
                            top: '40%',
                            left: '8%',
                            transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * 12}px)`,
                        }}
                    />
                </div>
            </div >
        </div >
    );
}
