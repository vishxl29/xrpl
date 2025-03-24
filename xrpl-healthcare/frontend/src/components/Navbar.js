import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Upload Record</Link></li>
        <li><Link to="/view">View Records</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
