const funnelSteps = [
  { label: "Link Opened", value: "100%", width: "100%" },
  { label: "Profile Details", value: "82%", width: "82%" },
  { label: "KYC Upload", value: "69%", width: "69%" },
  { label: "Video Verification", value: "62%", width: "62%" },
  { label: "Account Setup", value: "55%", width: "55%" }
];

const dropoffs = [
  { label: "KYC Upload", value: "24% drop-off" },
  { label: "Video Verification", value: "13% drop-off" },
  { label: "Profile Details", value: "11% drop-off" },
  { label: "Account Setup", value: "7% drop-off" }
];

const Funnel = () => (
  <section className="page">
    <div className="page-header">
      <div>
        <h1>Overall Onboarding Funnel</h1>
        <p>Understand where customers leave and which steps need urgent fixes.</p>
      </div>
      <div className="pill-group">
        <span className="pill">Started: 28,450</span>
        <span className="pill">Completed: 20,430</span>
        <span className="pill">Drop-offs: 5,370</span>
      </div>
    </div>
    <div className="grid-2">
      <div className="panel">
        <div className="panel-header">
          <h3>Funnel Conversion</h3>
          <span className="note">% completed at each stage</span>
        </div>
        <div className="funnel">
          {funnelSteps.map((step) => (
            <div className="funnel-step" style={{ width: step.width }} key={step.label}>
              {step.label} <strong>{step.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="panel">
        <div className="panel-header">
          <h3>Drop-off Hotspots</h3>
          <span className="note">Largest exits by stage</span>
        </div>
        <ul className="dropoff-list">
          {dropoffs.map((drop) => (
            <li key={drop.label}>
              <span>{drop.label}</span>
              <strong>{drop.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Funnel;
