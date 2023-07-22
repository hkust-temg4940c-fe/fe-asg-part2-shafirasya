import React, { useState } from "react";
import EDApic from "./picture/EDA_plots.png";
import MEpic from "./picture/ME_plots.png";
import MIGpic from "./picture/MIG_plots.png";

const Dashboard1 = () => {
  return (
    <div>
      <h1>Exploratory Data Analysis</h1>
      <div />
      <img src={EDApic} alt="EDA" width="100%" height="100%" />
    </div>
  );
};

const Dashboard2 = () => {
  return (
    <div>
      <h1>Model Evaluation</h1>
      <div />
      <img src={MEpic} alt="ME" width="100%" height="100%" />
    </div>
  );
};

const Dashboard3 = () => {
  return (
    <div>
      <h1>Model Insight Generator</h1>
      <div />
      <img src={MIGpic} alt="MIG" width="100%" height="100%" />
    </div>
  );
};

const DashboardSelector = ({ onSelectDashboard }) => {
  return (
    <div>
      <h1>Dashboard of Machine Learning SVM Result</h1>
      <button onClick={() => onSelectDashboard(<Dashboard1 />)}>
        Exploratory Data Analysis
      </button>
      <button onClick={() => onSelectDashboard(<Dashboard2 />)}>
        Model Evaluation
      </button>
      <button onClick={() => onSelectDashboard(<Dashboard3 />)}>
        Model Generated Insight
      </button>
    </div>
  );
};

const DashboardApp = () => {
  const [activeDashboard, setActiveDashboard] = useState(null);

  const handleSelectDashboard = (dashboard) => {
    setActiveDashboard(dashboard);
  };

  if (!activeDashboard) {
    return <DashboardSelector onSelectDashboard={handleSelectDashboard} />;
  }

  return (
    <div>
      {activeDashboard}
      <button onClick={() => setActiveDashboard(null)}>
        Back to Main Dashboard
      </button>
    </div>
  );
};

export default DashboardApp;
