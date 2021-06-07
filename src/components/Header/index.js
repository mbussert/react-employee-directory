import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="head-top">
      <h1 className="header-h1">Employee Directory</h1>
      <h3 className="header-h2">
        Click the menu on each column to sort, filter, or hide data to narrow
        your results.
      </h3>
    </div>
  );
}

export default Header;
