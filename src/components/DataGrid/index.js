import React, { useState, useEffect } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@material-ui/data-grid";
import "./style.css";
import API from "../../utils/API";
import axios from "axios";

// const rows: GridRowsProp = [
//   { id: 1, col1: "Hello", col2: "World" },
//   { id: 2, col1: "XGrid", col2: "is Awesome" },
//   { id: 3, col1: "Material-UI", col2: "is Amazing" },
// ];

// const columns: GridColDef[] = [
//   { field: "col1", headerName: "Image", width: 150, sortable: false },
//   { field: "col2", headerName: "Name", width: 150 },
//   { field: "col3", headerName: "Phone", width: 150 },
//   { field: "col4", headerName: "Email", width: 150 },
//   { field: "col5", headerName: "DOB", width: 150 },
// ];

const columns = [
  { field: "image", headerName: "Image", sortable: false, width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "phone", headerName: "Phone", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "dob", headerName: "DOB", width: 200 },
];

const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://randomuser.me/api/?results=25")
  //       .then((data) => data.json())
  //       .then((data) => setTableData(data.results));
  //   }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await API.get("https://randomuser.me/api/?results=25");
      setTableData(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  console.log("TD", tableData);

  let rows = [];
  tableData.map((user) =>
    rows.push({
      phone: user.phone,
      name: user.name.first + " " + user.name.last,
      email: user.email,
      dob: user.dob.date,
      image: user.picture.medium,
    })
  );

  console.log(rows);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={25} />
    </div>
  );
};

export default DataTable;

// export default function DataTable() {
//   return (
//     <div style={{ height: 300, width: "60%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         autoPageSize
//         sortingOrder={["desc", "asc"]}
//         sortModel={[{ field: "col2", sort: "asc" }]}
//       />
//     </div>
//   );
// }
