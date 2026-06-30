export interface CompanyPage {
    /** Display label shown in the dropdown */
    label: string;
    /** Next.js href — matches the app/[folder]/page.tsx route */
    href: string;
    /** Short description shown below the label in the dropdown */
    description: string;
    /** Emoji icon */
    icon: string;
}

export const companyPages: CompanyPage[] = [
    {
        label: "About Us",
        href: "/company",
        description: "Our mission, policies, and operational standards",
        icon: "🏢",
    },
    {
        label: "Terms & Conditions",
        href: "/terms",
        description: "Rules, IP guidelines, and enrollment terms",
        icon: "📋",
    },
    {
        label: "Privacy Policy",
        href: "/privacy",
        description: "How we handle and protect your personal data",
        icon: "🔒",
    },
    {
        label: "Refund Policy",
        href: "/refund",
        description: "Refund eligibility, criteria, and process",
        icon: "💳",
    },
    {
        label: "Cancellation Policy",
        href: "/cancellation",
        description: "Procedures for canceling enrollments or services",
        icon: "🚫",
    },
];
