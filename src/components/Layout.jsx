import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Executive Summary", to: "/" },
  { label: "Avg Time to Complete", to: "/avg-time" },
  { label: "Onboarding Funnel", to: "/funnel" },
  { label: "Channel Performance", to: "/channel" },
  { label: "Time Bottlenecks", to: "/bottlenecks" },
  { label: "Friction Indicators", to: "/friction" },
  { label: "Trend Analysis", to: "/trends" },
  { label: "KPI Definitions", to: "/definitions" }
];

const Layout = ({ children }) => (
  <div className="app">
    <header className="topbar">
      <div className="brand">
        <div className="logo-block">HDFC</div>
        <div>
          <p className="brand-title">Digital Onboarding</p>
          <p className="brand-subtitle">Business Analytics Dashboard</p>
        </div>
      </div>
      <div className="topbar-actions">
        <button className="ghost-btn">Download Report</button>
        <button className="primary-btn">View Live</button>
      </div>
    </header>

    <aside className="sidebar">
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>

    <main className="content">{children}</main>
  </div>
);

export default Layout;
