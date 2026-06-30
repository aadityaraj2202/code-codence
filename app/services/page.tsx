import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import { servicesData } from '@/data/services';
import styles from './page.module.css';

export default function ServicesPage() {
    return (
        <div className={styles.servicesPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>
                        Our <span className="text-primary">Services</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Comprehensive solutions designed to empower students, businesses, and digital marketers with the tools and knowledge they need to succeed
                    </p>
                </div>
            </section>

            {/* Service Categories Grid */}
            <section className={styles.categoriesSection}>
                <AnimatedBackground />
                {/* Background overlay to reduce intensity */}
                <div className={styles.backgroundOverlay}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className={styles.grid}>
                        {servicesData.map((category) => (
                            <Link
                                key={category.id}
                                href={`/services/${category.id}`}
                                className={styles.cardLink}
                            >
                                <ServiceCard
                                    title={category.title}
                                    description={category.description}
                                    icon={category.icon}
                                    href={`/services/${category.id}`}
                                    buttonText="Explore Services"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Not sure which service is right for you?</h2>
                        <p>Our team is here to help you find the perfect solution for your needs</p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

