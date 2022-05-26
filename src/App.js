import { useState } from "react";

function App() {
  const [isWide, setWide] = useState(true);
  const handleToggle = () => {
    setWide(!isWide);
  };
  return (
    <div className="App">
      <nav className="topbar hidden-sm-up">Topbar</nav>
      <div className="container__row">
        <div
          className={
            isWide
              ? "leftbar container__col hidden-sm-down"
              : "container_row leftbar-small leftbar"
          }
        >
          <div className="container__row">
            <div className="container__col-10">LeftSideBar</div>
            <small
              style={{ float: "right", color: "red", hover: "cursor" }}
              onClick={handleToggle}
            >
              X
            </small>
          </div>
        </div>
        <div className="dashboard container__col ">
          <div className="container__row">
            <div className="container__col-10 dashboard">Dashboard</div>
            <div className="container__col-2 rightbar hidden-md-down">
              RightBar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
