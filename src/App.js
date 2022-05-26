import { useState } from "react";
import Dashboard from "./components/Dashboard";
import LeftNavbar from "./components/LeftNavbar";
import Topbar from "./components/Topbar";

function App() {
  const [isLeftBarOpen, setLeftBarOpen] = useState(false);
  return (
    <div className="App">
      <Topbar isLeftBarOpen={isLeftBarOpen} setBar={(e) => setLeftBarOpen(e)} />
      <div className="container__row">
        <LeftNavbar isLeftBarOpen={isLeftBarOpen} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
