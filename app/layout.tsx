import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alder Metrics",
  description: "Data infrastructure, automation, visualization and analytics for better business decisions."
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand" aria-label="Alder Metrics home">
              <span className="brand-mark">AM</span>
              <span className="brand-text">
                <strong>Alder</strong> Metrics
              </span>
            </Link>

            <nav className="main-nav" aria-label="Main navigation">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <div className="footer-brand">Alder Metrics</div>
              <p className="footer-copy">
                Turning raw data into clear decisions through infrastructure,
                automation, dashboards and analysis.
              </p>
            </div>
            <div>
              <div className="footer-title">Core capabilities</div>
              <ul className="footer-list">
                <li>Data infrastructure</li>
                <li>ETL & automation</li>
                <li>BI dashboards</li>
                <li>Decision support</li>
              </ul>
            </div>
            <div>
              <div className="footer-title">Contact</div>
              <ul className="footer-list">
                <li>contacto@aldermetrics.com</li>
                <li>Chile / Remote</li>
                <li>English & Spanish</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
