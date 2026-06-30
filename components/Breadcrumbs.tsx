import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
                Home
            </Link>
            {items.map((item, index) => (
                <span key={index}>
                    <span className={styles.separator}>›</span>
                    {index === items.length - 1 ? (
                        <span className={styles.current}>{item.label}</span>
                    ) : (
                        <Link href={item.href} className={styles.breadcrumbLink}>
                            {item.label}
                        </Link>
                    )}
                </span>
            ))}
        </nav>
    );
}
