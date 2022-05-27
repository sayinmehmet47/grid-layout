import { Menu } from "@carbon/icons-react";
import React from "react";

export default function Topbar({ setBar, isLeftBarOpen }) {
  const toggleLeftBar = () => {
    setBar(!isLeftBarOpen);
  };
  return (
    <nav className="topbar hidden-md-up">
      <div onClick={toggleLeftBar}>
        <Menu />
      </div>
      <div>Topbar</div>
    </nav>
  );
}
