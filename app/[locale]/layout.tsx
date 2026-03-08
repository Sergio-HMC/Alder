import Link from "next/link";
import { content, type Locale } from "../../lib/content";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = content[(locale as Locale) || "en"] ?? content.en;

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href={`/${locale}`} className="brand">
            <span className="brand-mark">AM</span>
            <span><strong>Alder</strong> Metrics</span>
          </Link>

          <nav className="main-nav">
            <Link href={`/${locale}`}>{t.nav.home}</Link>
            <Link href={`/${locale}/services`}>{t.nav.services}</Link>
            <Link href={`/${locale}/solutions`}>{t.nav.solutions}</Link>
            <Link href={`/${locale}/contact`}>{t.nav.contact}</Link>
          </nav>

          <nav className="lang-nav">
            {["es","en","fr"].map((lang) => (
              <Link key={lang} href={`/${lang}`} className={`lang-pill ${locale === lang ? "active" : ""}`}>
                {lang.toUpperCase()}
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
            <p className="footer-copy">{t.lead}</p>
          </div>
          <div>
            <div className="footer-title">{t.nav.services}</div>
            <ul className="footer-list">
              <li>Data infrastructure</li>
              <li>ETL & automation</li>
              <li>BI dashboards</li>
              <li>Decision support</li>
            </ul>
          </div>
          <div>
            <div className="footer-title">{t.contactReach}</div>
            <ul className="footer-list">
              <li>contacto@aldermetrics.com</li>
              <li>{t.location}</li>
              <li>{t.languages}</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
