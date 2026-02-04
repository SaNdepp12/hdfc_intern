const channelBars = [
  { label: "Mobile", value: "82%", width: "84%" },
  { label: "Web", value: "68%", width: "70%" },
  { label: "RM Assisted", value: "51%", width: "52%" }
];

const channelRows = [
  { channel: "Mobile", dropoff: "12%", time: "06m 12s", error: "1.8%" },
  { channel: "Web", dropoff: "19%", time: "08m 10s", error: "2.9%" },
  { channel: "RM Assisted", dropoff: "31%", time: "11m 38s", error: "4.5%" }
];

const ChannelPerformance = () => (
  <section className="page">
    <div className="page-header">
      <div>
        <h1>Channel Performance</h1>
        <p>Compare completion, time, and errors across Web, Mobile, and RM journeys.</p>
      </div>
      <div className="status-pill">
        <span>Best Channel</span>
        <strong>Mobile</strong>
      </div>
    </div>
    <div className="grid-2">
      <div className="panel">
        <div className="panel-header">
          <h3>Completion Rate by Channel</h3>
          <span className="note">Mobile leads, RM lags</span>
        </div>
        <div className="bar-chart">
          {channelBars.map((bar) => (
            <div className="bar-row" key={bar.label}>
              <span>{bar.label}</span>
              <div className="bar">
                <div style={{ width: bar.width }}></div>
              </div>
              <strong>{bar.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="panel">
        <div className="panel-header">
          <h3>Channel Scorecard</h3>
          <span className="note">Drop-off, time & errors</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Drop-off</th>
              <th>Avg Time</th>
              <th>Error Rate</th>
            </tr>
          </thead>
          <tbody>
            {channelRows.map((row) => (
              <tr key={row.channel}>
                <td>{row.channel}</td>
                <td>{row.dropoff}</td>
                <td>{row.time}</td>
                <td>{row.error}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ChannelPerformance;
