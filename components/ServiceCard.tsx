import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: string;
    href: string;
    buttonText?: string;
}

export default function ServiceCard({ title, description, icon, buttonText = 'Explore' }: ServiceCardProps) {
    return (
        <div className={styles.card}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <span className={styles.button}>
                {buttonText}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </div>
    );
}
