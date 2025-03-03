import logo from "./assets/logo.jpg";
import "./App.css";

function App() {
  const startDate = new Date("2025-02-19");
  const endDate = new Date("2025-04-02");
  const today = new Date();

  const percentHealed = Math.round(
    ((today - startDate) / (endDate - startDate)) * 100
  );

  return (
    <>
      <div>
        <a href="https://estats.nchl.com/team/8133/home">
          <img src={logo} className="logo react" alt="Wingin it" />
        </a>
      </div>
      <h1>Is Ryk Healed?</h1>
      <div className="card">
        {/* progress bar based on date from Mar 19th to 6 weeks after */}
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${Math.min(percentHealed, 100)}%` }}
          ></div>
        </div>
        <div>{percentHealed}% Healed</div>
      </div>
    </>
  );
}

export default App;
