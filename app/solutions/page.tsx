const solutions = [
  {
    title: "Commercial Visibility",
    text: "Dashboards for sales, commercial performance, margins and revenue trends."
  },
  {
    title: "Supplier Portals",
    text: "Filtered dashboard access so each supplier can monitor only its own numbers."
  },
  {
    title: "Performance & HR Reporting",
    text: "Structured result delivery for assessments, evaluations and people analytics."
  },
  {
    title: "Executive Decision Support",
    text: "Decision-ready reporting layers that explain what is happening and where to act."
  },
  {
    title: "Operational Monitoring",
    text: "Automated reporting and process visibility for teams that need stability and control."
  },
  {
    title: "Custom BI Solutions",
    text: "Flexible architecture for companies with multiple sources, roles and reporting needs."
  }
];

export default function SolutionsPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <h1>Solutions</h1>
        <p>
          We adapt the same core capabilities to different business problems:
          commercial intelligence, supplier reporting, HR analytics and
          decision-support systems for leadership teams.
        </p>
      </section>

      <section className="section">
        <div className="grid-3">
          {solutions.map((solution) => (
            <div className="card" key={solution.title}>
              <span className="card-kicker">Use case</span>
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
