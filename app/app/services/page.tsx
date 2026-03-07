const services = [
  {
    title: "Data Advisory",
    subtitle: "Entry point / diagnostic",
    text: "Needs assessment, source review, KPI definition and recommendations for how data should be structured."
  },
  {
    title: "Connectivity & ETL",
    subtitle: "Real automation",
    text: "Connection to ERP, CRM, Excel files and APIs, with automated loads, basic cleaning and validation."
  },
  {
    title: "Reports & Dashboards",
    subtitle: "What users actually see",
    text: "Business dashboards, filtered views, KPI layers and reporting interfaces that make the important visible."
  },
  {
    title: "Analytics",
    subtitle: "Differentiator",
    text: "Trend analysis, actionable insights, business recommendations and executive interpretation."
  },
  {
    title: "Monthly Maintenance",
    subtitle: "Stability",
    text: "Monitoring, support, small fixes, new users, small improvements and dashboard continuity."
  }
];

export default function ServicesPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <h1>Services</h1>
        <p>
          Alder Metrics provides end-to-end support across data infrastructure,
          automation, dashboards and business analysis. We focus on practical
          systems that make reporting simpler and decisions stronger.
        </p>
      </section>

      <section className="section">
        <div className="grid-3">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <span className="card-kicker">{service.subtitle}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
