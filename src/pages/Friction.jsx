const frictionScores = [
  { label: "Long Forms", value: "24" },
  { label: "Repeated Attempts", value: "18" },
  { label: "Permission Issues", value: "12" },
  { label: "Session Timeouts", value: "8" }
];

const frictionSlices = [
  { label: "Long Forms", value: "40%" },
  { label: "Retries", value: "25%" },
  { label: "Permissions", value: "20%" },
  { label: "Timeouts", value: "15%" }
];

const Friction = () => (
  <section className="page">
    <div className="page-header">
      <div>
        <h1>Customer Friction Indicators</h1>
        <p>Surface UX and policy issues affecting conversion and customer sentiment.</p>
      </div>
      <div className="status-pill">
        <span>Friction Score</span>
        <strong>Moderate (62/100)</strong>
      </div>
    </div>
    <div className="grid-2">
      <div className="panel">
        <div className="panel-header">
          <h3>Top Friction Signals</h3>
          <span className="note">Weighted score by reason</span>
        </div>
        <div className="friction-score">
          {frictionScores.map((score) => (
            <div key={score.label}>
              <span>{score.label}</span>
              <strong>{score.value}</strong>
            </div>
          ))}
        </div>
        <div className="stacked-bar">
          <div style={{ width: "40%" }}>Long Forms</div>
          <div style={{ width: "30%" }}>Repeated Attempts</div>
          <div style={{ width: "20%" }}>Permission Issues</div>
          <div style={{ width: "10%" }}>Timeouts</div>
        </div>
      </div>
      <div className="panel">
        <div className="panel-header">
          <h3>Friction Breakdown</h3>
          <span className="note">Share of total friction</span>
        </div>
        <div className="pie">
          {frictionSlices.map((slice) => (
            <div className="slice" key={slice.label}>
              {slice.label} {slice.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Friction;
