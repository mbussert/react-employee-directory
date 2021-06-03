import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DataTable from "./components/DataGrid";

function App() {
  return (
    <Router>
      <div>
        <DataTable></DataTable>
      </div>
    </Router>
  );
}

export default App;
