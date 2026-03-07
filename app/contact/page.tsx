export default function ContactPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <h1>Contact</h1>
        <p>
          If you need to organize data, automate reporting or build clearer
          dashboards and better decision systems, we would be glad to talk.
        </p>
      </section>

      <section className="section">
        <div className="contact-grid">
          <div className="contact-panel">
            <h3>How we usually help</h3>
            <ul className="contact-list">
              <li>Companies with fragmented reporting and manual files</li>
              <li>Teams that need dashboards people actually use</li>
              <li>Leadership teams that want insight, not just visualization</li>
              <li>Organizations that need ongoing BI support and stability</li>
            </ul>
          </div>

          <div className="contact-panel">
            <h3>Reach us</h3>
            <p><strong>Email:</strong> contacto@aldermetrics.com</p>
            <p><strong>Location:</strong> Chile / Remote</p>
            <p><strong>Languages:</strong> English and Spanish</p>
            <p><strong>Focus:</strong> Infrastructure, automation, dashboards and analysis.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
