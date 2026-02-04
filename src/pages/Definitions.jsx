const definitions = [
  { metric: "Completion Rate", definition: "Completed / Started" },
  { metric: "Drop-Off Rate", definition: "Dropped / Started" },
  { metric: "Avg Time", definition: "Avg(sum of stage times)" },
  { metric: "Bottleneck Stage", definition: "Stage with max avg time" },
  { metric: "Friction Score", definition: "Weighted error + retry + time" }
];

const Definitions = () => (
  <section className="page">
    <div className="page-header">
      <div>
        <h1>KPI Definitions</h1>
        <p>Shared language for leadership, product, and operations reviews.</p>
      </div>
    </div>
    <div className="panel">
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          {definitions.map((row) => (
            <tr key={row.metric}>
              <td>{row.metric}</td>
              <td>{row.definition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default Definitions;
