import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import AnimatedBackground from '@/components/AnimatedBackground';
import CyberpunkProjectPage from '@/components/CyberpunkProjectPage';
import { servicesData } from '@/data/services';
import styles from './page.module.css';

interface ComponentPageProps {
    params: Promise<{
        category: string;
        component: string;
    }>;
}

export default async function ComponentPage({ params }: ComponentPageProps) {
    const { category: categoryId, component: componentId } = await params;

    const category = servicesData.find(c => c.id === categoryId);
    const component = category?.components.find(comp => comp.id === componentId);

    if (!category || !component) {
        notFound();
    }

    // Use cyberpunk page for Academic & Student, Corporate & Startup, and Digital Marketing categories
    if (category.id === 'academic-student' ||
        category.id === 'corporate-startup' ||
        category.id === 'digital-marketing') {
        return <CyberpunkProjectPage component={component} category={category} />;
    }

    return (
        <div className={styles.componentPage}>
            <AnimatedBackground />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <Breadcrumbs
                    items={[
                        { label: 'Services', href: '/services' },
                        { label: category.title, href: `/services/${category.id}` },
                        { label: component.title, href: `/services/${category.id}/${component.id}` }
                    ]}
                />

                {/* Hero Section */}
                <div className={styles.hero}>
                    <div className={styles.badge}>{category.title}</div>
                    <h1 className={styles.title}>{component.title}</h1>
                    <p className={styles.subtitle}>{component.summary}</p>
                </div>

                {/* Main Description */}
                <section className={styles.section}>
                    <div className={styles.description}>
                        <p>{component.description}</p>
                    </div>
                </section>

                {/* Use Cases */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Use Cases & Applications</h2>
                    <div className={styles.useCasesGrid}>
                        {component.useCases.map((useCase, index) => (
                            <div key={index} className={styles.useCaseCard}>
                                <div className={styles.useCaseNumber}>{String(index + 1).padStart(2, '0')}</div>
                                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                                <p className={styles.useCaseDescription}>{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits */}
                <section className={`${styles.section} ${styles.benefitsSection}`}>
                    <h2 className={styles.sectionTitle}>Key Benefits</h2>
                    <div className={styles.benefitsGrid}>
                        {component.benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitItem}>
                                <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" fill="var(--color-primary-green)" opacity="0.1" />
                                    <path d="M8 12L11 15L16 9" stroke="var(--color-primary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What's Included</h2>
                    <div className={styles.featuresGrid}>
                        {component.features.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
                                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p>{feature}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCard}>
                        <h2>Ready to get started?</h2>
                        <p>Join thousands of satisfied clients who have transformed their success with our services</p>
                        <div className={styles.ctaButtons}>
                            <a href={component.cta.link} className="btn btn-success btn-lg">
                                {component.cta.text}
                            </a>
                            <a href="/contact" className="btn btn-outline btn-lg">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

// Generate static params for all component pages
export async function generateStaticParams() {
    const params: { category: string; component: string }[] = [];

    servicesData.forEach((category) => {
        category.components.forEach((component) => {
            params.push({
                category: category.id,
                component: component.id,
            });
        });
    });

    return params;
}
