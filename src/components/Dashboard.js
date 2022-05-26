import { Search } from "@carbon/icons-react";
import { Apps } from "@carbon/icons-react";
import { Settings } from "@carbon/icons-react";
import { Share } from "@carbon/icons-react";
import { Notification } from "@carbon/icons-react";
import React from "react";
import Card from "./Card";

export default function Dashboard() {
  return (
    <div className="container__row">
      <div className="dashboard">
        <div className="dashboard-header hidden-sm-down">
          <h2>Dashboard</h2>
          <ul className="container__row">
            <li>
              <Search />
            </li>
            <li>
              <Notification />
            </li>
            <li>IEO Ltd Global</li>
            <li>
              <span class="numberCircle">
                <span>A</span>
              </span>
            </li>
            <li>
              <Apps />
            </li>
          </ul>
        </div>
        <div className="navbar-dashboard container">
          <ul>
            <li>Overview</li>
            <li>Waypoints & Stoppage</li>
            <li>Driver & Transporter</li>
            <li>Lanes</li>
          </ul>
          <ul>
            <li>
              <Share />
            </li>
            <li>
              <Settings />
            </li>
          </ul>
        </div>
        <div className="cards container__row">
          <Card
            className="container__col-3"
            title="randomName"
            describtion="deneme12"
            linkText="rererre"
          />

          <Card title="randomName" describtion="deneme12" linkText="rererre" />
        </div>
      </div>
      <div className="container__col-2 rightbar hidden-md-down">RightBar</div>
    </div>
  );
}
