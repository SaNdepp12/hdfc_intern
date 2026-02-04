import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ExecutiveSummary from "./pages/ExecutiveSummary.jsx";
import AvgTime from "./pages/AvgTime.jsx";
import Funnel from "./pages/Funnel.jsx";
import ChannelPerformance from "./pages/ChannelPerformance.jsx";
import Bottlenecks from "./pages/Bottlenecks.jsx";
import Friction from "./pages/Friction.jsx";
import Trends from "./pages/Trends.jsx";
import Definitions from "./pages/Definitions.jsx";

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<ExecutiveSummary />} />
      <Route path="/avg-time" element={<AvgTime />} />
      <Route path="/funnel" element={<Funnel />} />
      <Route path="/channel" element={<ChannelPerformance />} />
      <Route path="/bottlenecks" element={<Bottlenecks />} />
      <Route path="/friction" element={<Friction />} />
      <Route path="/trends" element={<Trends />} />
      <Route path="/definitions" element={<Definitions />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Layout>
);

export default App;
