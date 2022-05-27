import { ArrowUpRight } from "@carbon/icons-react";
import { TaskLocation } from "@carbon/icons-react";
import { DeliveryAdd } from "@carbon/icons-react";
import React from "react";

export default function Card(props) {
  const { title, describtion } = props;
  return (
    <div className="card">
      <div className="card-header">
        {title === "shipment" ? (
          <span className="shipment">
            <DeliveryAdd />
          </span>
        ) : (
          <span className="tasklocation">
            <TaskLocation />
          </span>
        )}
        <div className="card-body" style={{ marginLeft: "8px" }}>
          <p>{describtion}</p>
        </div>
      </div>

      <div className="card-footer">
        <span className="arrow">
          <ArrowUpRight />
        </span>{" "}
      </div>
    </div>
  );
}
