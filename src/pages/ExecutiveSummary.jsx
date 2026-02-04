const kpis = [
  {
    label: "Avg Time to Complete",
    value: "08m 24s",
    trend: "▲ 6% vs last week",
    trendClass: "trend up"
  },
  {
    label: "Total Journeys Started",
    value: "28,450",
    trend: "▲ 11% MoM",
    trendClass: "trend up"
  },
  {
    label: "Completion Rate",
    value: "71.8%",
    trend: "▼ 2.1% vs target",
    trendClass: "trend down"
  },
  {
    label: "Drop-Off Rate",
    value: "18.9%",
    trend: "▲ 1.3% WoW",
    trendClass: "trend down"
  },
  {
    label: "Best Performing Channel",
    value: "Mobile",
    tag: "Avg 06m 12s"
  },
  {
    label: "Worst Performing Stage",
    value: "KYC Upload",
    tag: "24% drop-off"
  }
];

const ExecutiveSummary = () => (
  <section className="page">
    <div className="page-header">
      <div>
        <h1>Executive Summary</h1>
        <p>Is onboarding healthy today? A clean view of conversion, friction, and risk signals.</p>
      </div>
      <div className="status-pill">
        <span>Health</span>
        <strong>Stable</strong>
      </div>
    </div>
    <div className="kpi-grid">
      {kpis.map((kpi) => (
        <div className="kpi-card" key={kpi.label}>
          <p>{kpi.label}</p>
          <h2>{kpi.value}</h2>
          {kpi.trend && <span className={kpi.trendClass}>{kpi.trend}</span>}
          {kpi.tag && <span className="tag">{kpi.tag}</span>}
        </div>
      ))}
    </div>
  </section>
);

export default ExecutiveSummary;
