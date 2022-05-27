import {
  OverflowMenuVertical,
  LocationCompany,
  Result,
  Notification,
  Home,
  PageFirst,
  Help,
  PageLast,
  WifiController,
  DataBase,
  Earth,
  DeliveryParcel,
} from "@carbon/icons-react";

import React, { useEffect, useRef, useState } from "react";
export default function LeftNavbar({ isLeftBarOpen }) {
  const [isWide, setWide] = useState(true);
  const [overFlowMenu, setOverFlowMenu] = useState(false);
  const MenuElement = useRef();
  const handleToggle = () => {
    setWide(!isWide);
  };

  const toggleOverFlowMenu = () => {
    setOverFlowMenu(!overFlowMenu);
  };

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  useOnClickOutside(MenuElement, () => toggleOverFlowMenu(false));

  return (
    <div
      className={
        isWide
          ? `leftbar container__col ${isLeftBarOpen ? "" : "hidden-md-down"}`
          : `container_row leftbar-small leftbar ${
              isLeftBarOpen ? "" : "hidden-md-down"
            }`
      }
    >
      <div className="container__row" style={{ margin: "10px" }}>
        <div className="container__col-9">
          <img src="/RoambeeLogo.png" alt="logo" />
        </div>
        <small
          style={{ float: "right", marginRight: "12px", cursor: "pointer" }}
          onClick={handleToggle}
        >
          {isWide ? <PageFirst /> : <PageLast />}
        </small>
      </div>
      <div className="leftbar-body">
        <div className="body-top">
          <li style={{ color: "#fec048" }}>
            <Home />
            {isWide ? (
              <span style={{ paddingLeft: "15px" }}>Dashboard</span>
            ) : (
              ""
            )}
          </li>
          <li>
            <Notification />
            {isWide ? <span style={{ paddingLeft: "15px" }}>Alerts</span> : ""}
          </li>
          <li>
            <LocationCompany />
            {isWide ? (
              <span style={{ paddingLeft: "15px" }}>Realtime Map</span>
            ) : (
              ""
            )}
          </li>
          <li>
            {" "}
            <DeliveryParcel />
            {isWide ? (
              <span style={{ paddingLeft: "15px" }}>Shipment</span>
            ) : (
              ""
            )}
          </li>
          <li>
            <span>
              <Result />
            </span>
            {isWide ? <span style={{ paddingLeft: "15px" }}>Assets</span> : ""}
          </li>
          <li>
            <DataBase />
            {isWide ? (
              <span style={{ paddingLeft: "15px" }}>Container</span>
            ) : (
              ""
            )}
          </li>
          <li>
            <Earth />
            {isWide ? (
              <span style={{ paddingLeft: "15px" }}>Locations</span>
            ) : (
              ""
            )}
          </li>
          <li>
            <span>
              <WifiController />
            </span>
            {isWide ? <span style={{ paddingLeft: "15px" }}>Bees</span> : ""}
          </li>
        </div>
        <hr />
        <div className="body-bottom">
          {isWide ? (
            <ul>
              <li>Account setting</li>
              <li>User Management</li>
              <li>Workflows</li>
              <li>Reports</li>
              <li>Audit Log</li>
            </ul>
          ) : (
            <div style={{ cursor: "pointer" }}>
              <span className="menuIcon" onClick={toggleOverFlowMenu}>
                <OverflowMenuVertical />
              </span>
              {overFlowMenu ? (
                <menu className="overFlowMenu" ref={MenuElement}>
                  <li>Account setting</li>
                  <li>User Management</li>
                  <li>Workflows</li>
                  <li>Reports</li>
                  <li>Audit Log</li>
                </menu>
              ) : (
                ""
              )}
            </div>
          )}
        </div>

        <div className="body-footer">
          {isWide ? (
            <ul>
              <li>Support</li>
              <li>Terms</li>
              <li>Policies</li>
            </ul>
          ) : (
            <span className="helpIcon">
              <Help />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
