const trendsLegend = [
  { label: "Started", className: "dot started" },
  { label: "Completed", className: "dot completed" },
  { label: "Drop-offs", className: "dot dropoffs" }
];

const performanceLegend = [
  { label: "Avg Time", className: "dot avgtime" },
  { label: "Error Rate", className: "dot errors" }
];

const Trends = () => (
  <section className="page">
    <div className="page-header">
      <div>
        <h1>Trend Analysis</h1>
        <p>Monitor growth, drop-offs, and performance shifts over time.</p>
      </div>
      <div className="pill-group">
        {[
          "Daily",
          "Weekly",
          "Monthly",
          "Yearly"
        ].map((item) => (
          <span className={item === "Weekly" ? "pill active" : "pill"} key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
    <div className="grid-2">
      <div className="panel">
        <div className="panel-header">
          <h3>Journeys & Completion Trend</h3>
          <span className="note">Last 8 weeks</span>
        </div>
        <div className="line-chart">
          <div className="line started"></div>
          <div className="line completed"></div>
          <div className="line dropoffs"></div>
        </div>
        <div className="legend">
          {trendsLegend.map((item) => (
            <span className="legend-item" key={item.label}>
              <span className={item.className}></span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
      <div className="panel">
        <div className="panel-header">
          <h3>Avg Time & Error Rate</h3>
          <span className="note">Seasonality comparison</span>
        </div>
        <div className="line-chart">
          <div className="line avgtime"></div>
          <div className="line errors"></div>
        </div>
        <div className="legend">
          {performanceLegend.map((item) => (
            <span className="legend-item" key={item.label}>
              <span className={item.className}></span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Trends;
