import Link from "next/link";

const capabilities = [
  {
    title: "Infrastructure",
    text: "We design the data foundation: sources, structures, KPI logic and reporting architecture."
  },
  {
    title: "Automation",
    text: "We connect systems, reduce manual processes and build reliable ETL and reporting workflows."
  },
  {
    title: "Visualization",
    text: "We create dashboards that make business performance visible, usable and easy to act on."
  },
  {
    title: "Analysis",
    text: "We identify trends, friction points and opportunities hidden in operational and commercial data."
  },
  {
    title: "Decision Support",
    text: "We translate information into practical business recommendations, not just charts."
  },
  {
    title: "Ongoing Operation",
    text: "We support monitoring, fixes, new users and continuous improvement after deployment."
  }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Data infrastructure + automation + insight</div>
            <h1>Turning data into clear decisions.</h1>
            <p className="lead">
              Alder Metrics helps companies organize data, automate reporting,
              build dashboards and generate the analytical clarity needed to
              make better decisions.
            </p>

            <div className="cta-row">
              <Link href="/services" className="btn btn-primary">
                Explore services
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Talk to us
              </Link>
            </div>

            <div className="mini-proof">
              <span className="mini-pill">BI dashboards</span>
              <span className="mini-pill">ETL & automation</span>
              <span className="mini-pill">Commercial analysis</span>
              <span className="mini-pill">Decision support</span>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-top">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>

            <div className="panel-body">
              <div className="metric-card">
                <div className="metric-label">Business visibility</div>
                <div className="metric-value">24/7</div>
                <div className="metric-note">
                  Dashboards and reporting systems that replace fragmented files
                  and manual follow-up.
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-label">What clients usually want</div>
                <div className="bars">
                  <div className="bar-row">
                    <span>Automation</span>
                    <div className="bar"><span style={{ width: "88%" }} /></div>
                    <strong>88</strong>
                  </div>
                  <div className="bar-row">
                    <span>Visibility</span>
                    <div className="bar"><span style={{ width: "81%" }} /></div>
                    <strong>81</strong>
                  </div>
                  <div className="bar-row">
                    <span>Clarity</span>
                    <div className="bar"><span style={{ width: "92%" }} /></div>
                    <strong>92</strong>
                  </div>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-label">Core promise</div>
                <div className="metric-note">
                  Less manual reporting. Better visibility. Stronger decisions.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>What we do</h2>
            </div>
            <div className="section-sub">
              We work across the full data workflow, from structure and
              integration to dashboards, analysis and continuous support.
            </div>
          </div>

          <div className="grid-3">
            {capabilities.map((item) => (
              <div className="card" key={item.title}>
                <span className="card-kicker">Capability</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="statement">
            <h3>Built for companies that want more than dashboards.</h3>
            <p>
              Our work combines data structure, automation, visibility and
              business interpretation. The goal is not to create more charts.
              The goal is to help teams understand what is happening and what to
              do next.
            </p>
          </div>

          <div className="stack">
            <div className="card">
              <h3>For commercial teams</h3>
              <p>
                Sales dashboards, supplier views, KPI tracking and clear
                performance visibility across channels, clients and categories.
              </p>
            </div>

            <div className="card">
              <h3>For operations</h3>
              <p>
                Automated reporting, process monitoring and reduced dependency on
                manual spreadsheets and repetitive analysis.
              </p>
            </div>

            <div className="card">
              <h3>For leadership</h3>
              <p>
                Better visibility, stronger reporting and analytical context that
                supports strategic decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
