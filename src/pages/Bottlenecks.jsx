const stageTimes = [
  { label: "Profile Details", value: "2.3m", width: "54%" },
  { label: "KYC Upload", value: "4.8m", width: "100%" },
  { label: "Video Verification", value: "3.8m", width: "79%" },
  { label: "Account Setup", value: "2.0m", width: "44%" }
];

const heatmap = [
  {
    label: "Profile Details",
    values: [
      { level: "low", value: "6%" },
      { level: "medium", value: "11%" },
      { level: "high", value: "14%" }
    ]
  },
  {
    label: "KYC Upload",
    values: [
      { level: "medium", value: "12%" },
      { level: "high", value: "18%" },
      { level: "high", value: "22%" }
    ]
  },
  {
    label: "Video Verification",
    values: [
      { level: "low", value: "5%" },
      { level: "medium", value: "9%" },
      { level: "high", value: "16%" }
    ]
  },
  {
    label: "Account Setup",
    values: [
      { level: "low", value: "4%" },
      { level: "medium", value: "7%" },
      { level: "medium", value: "10%" }
    ]
  }
];

const Bottlenecks = () => (
  <section className="page">
    <div className="page-header">
      <div>
        <h1>Time Bottleneck Analysis</h1>
        <p>Pinpoint stages causing the biggest delays and SLA risks.</p>
      </div>
      <div className="pill-group">
        <span className="pill">Longest Stage: KYC Upload</span>
        <span className="pill">SLA Breach: 18%</span>
      </div>
    </div>
    <div className="grid-2">
      <div className="panel">
        <div className="panel-header">
          <h3>Avg Time by Stage</h3>
          <span className="note">Minutes spent per stage</span>
        </div>
        <div className="bar-chart horizontal">
          {stageTimes.map((stage) => (
            <div className="bar-row" key={stage.label}>
              <span>{stage.label}</span>
              <div className="bar">
                <div style={{ width: stage.width }}></div>
              </div>
              <strong>{stage.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="panel">
        <div className="panel-header">
          <h3>Stage × SLA Heatmap</h3>
          <span className="note">% users beyond SLA</span>
        </div>
        <div className="heatmap">
          {heatmap.map((row) => (
            <div className="heatmap-row" key={row.label}>
              <span>{row.label}</span>
              {row.values.map((cell, index) => (
                <div className="heat" data-level={cell.level} key={`${row.label}-${index}`}>
                  {cell.value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Bottlenecks;
