const distribution = [
  { label: "Fast (≤5m)", value: "42%", className: "dist-bar fast", width: "42%" },
  { label: "Mid (5-10m)", value: "35%", className: "dist-bar medium", width: "35%" },
  { label: "Slow (≥10m)", value: "23%", className: "dist-bar slow", width: "23%" }
];

const channelTimes = [
  { label: "Mobile", value: "06m 12s", width: "68%" },
  { label: "Web", value: "08m 10s", width: "82%" },
  { label: "RM Assisted", value: "11m 38s", width: "100%" }
];

const AvgTime = () => (
  <section className="page">
    <div className="page-header">
      <div>
        <h1>Average Time to Complete Onboarding</h1>
        <p>Track speed to finish from link open to completion. Median shows true user experience.</p>
      </div>
      <div className="pill-group">
        <span className="pill">Avg: 08m 24s</span>
        <span className="pill">Median: 06m 10s</span>
      </div>
    </div>
    <div className="grid-2">
      <div className="panel">
        <div className="panel-header">
          <h3>Time Distribution</h3>
          <span className="note">Fast vs slow users</span>
        </div>
        <div className="distribution">
          {distribution.map((item) => (
            <div className={item.className} style={{ width: item.width }} key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="panel">
        <div className="panel-header">
          <h3>Channel-wise Avg Time</h3>
          <span className="note">Mobile should be fastest</span>
        </div>
        <div className="bar-chart">
          {channelTimes.map((item) => (
            <div className="bar-row" key={item.label}>
              <span>{item.label}</span>
              <div className="bar">
                <div style={{ width: item.width }}></div>
              </div>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AvgTime;
