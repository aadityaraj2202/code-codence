import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import { servicesData } from '@/data/services';
import styles from './page.module.css';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category: categoryId } = await params;

    const category = servicesData.find(c => c.id === categoryId);

    if (!category) {
        notFound();
    }

    return (
        <div className={styles.categoryPage}>
            <AnimatedBackground />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <Breadcrumbs
                    items={[
                        { label: 'Services', href: '/services' },
                        { label: category.title, href: `/services/${category.id}` }
                    ]}
                />

                {/* Category Header */}
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <span className={styles.categoryIcon}>{category.icon}</span>
                    </div>
                    <h1 className={styles.title}>{category.title}</h1>
                    <p className={styles.description}>{category.description}</p>
                </div>

                {/* Service Components Grid */}
                <div className={styles.componentsGrid}>
                    {category.components.map((component) => (
                        <Link
                            key={component.id}
                            href={`/services/${category.id}/${component.id}`}
                            style={{ textDecoration: 'none', display: 'block' }}
                        >
                            <ServiceCard
                                title={component.title}
                                description={component.summary}
                                href={`/services/${category.id}/${component.id}`}
                                buttonText="View Details"
                            />
                        </Link>
                    ))}
                </div>

                {/* Back to Services */}
                <div className={styles.backLink}>
                    <Link href="/services" className="btn btn-outline">
                        ← Back to All Services
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Generate static params for all categories 
export async function generateStaticParams() {
    return servicesData.map((category) => ({
        category: category.id,
    }));
}

