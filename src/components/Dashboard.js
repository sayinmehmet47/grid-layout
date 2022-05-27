import { Search } from "@carbon/icons-react";
import { Apps } from "@carbon/icons-react";
import { Settings } from "@carbon/icons-react";
import { Share } from "@carbon/icons-react";
import { Notification } from "@carbon/icons-react";
import React from "react";
import Card from "./Card";
import SquareCard from "./SquareCard";

export default function Dashboard() {
  return (
    <section className="dashboard-container">
      <div className="dashboard-center"></div>
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
      <div>Box</div>
    </section>
  );
}

// export default function Dashboard() {
//   return (
//     <div className="container__row">
//       <div className="dashboard">
//         <div className="dashboard-header hidden-md-down">
//           <h2>Dashboard</h2>
//           <ul className="container__row">
//             <li>
//               <Search />
//             </li>
//             <li>
//               <Notification />
//             </li>
//             <li>IEO Ltd Global</li>
//             <li>
//               <span className="numberCircle">
//                 <span>A</span>
//               </span>
//             </li>
//             <li>
//               <Apps />
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-dashboard container__row hidden-md-down">
//           <ul>
//             <li>Overview</li>
//             <li>Waypoints & Stoppage</li>
//             <li>Driver & Transporter</li>
//             <li>Lanes</li>
//           </ul>
//           <ul>
//             <li>
//               <Share />
//             </li>
//             <li>
//               <Settings />
//             </li>
//           </ul>
//         </div>
//         <div className="cards">
//           <h4>Recommended Tasks</h4>
//           <div className="small-cards">
//             <Card title="shipment" describtion="Start bulk shipment" />
//             <Card title="map" describtion="Check realtime map" />
//           </div>
//           <div className="square-cards">
//             <SquareCard />
//             <SquareCard />
//           </div>
//         </div>
//       </div>
//       {/* <div className="container__col-2 rightbar hidden-md-down">RightBar</div> */}
//     </div>
//   );
// }
