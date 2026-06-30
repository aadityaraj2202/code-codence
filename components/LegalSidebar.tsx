"use client";

interface SidebarLink {
  href: string;
  text: string;
}

interface LegalSidebarProps {
  links: SidebarLink[];
}

export default function LegalSidebar({ links }: LegalSidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-box">
        <nav className="sidebar-nav">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`sidebar-link ${index === 0 ? "active" : ""}`}
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
