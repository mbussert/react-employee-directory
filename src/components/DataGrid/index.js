import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./style.css";
import API from "../../utils/API";

const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      field: "image",
      headerName: "Image",
      sortable: false,
      width: 500,
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "email", headerName: "Email", width: 280 },
    { field: "country", headerName: "Country", width: 150 },
  ];

  useEffect(() => {
    async function fetchData() {
      const request = await API.get("https://randomuser.me/api/?results=20");
      setTableData(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  let rows = [];

  tableData.map((user) =>
    rows.push({
      id: user.login.uuid,
      phone: user.phone,
      name: user.name.first + " " + user.name.last,
      email: user.email,
      country: user.location.country,
      image: user.picture.medium,
    })
  );

  console.log(rows);

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        autoHeight
        sortModel={[
          {
            field: "name",
            sort: "asc",
          },
        ]}
        sortingOrder={["desc", "asc"]}
        rows={rows}
        columns={columns}
        pageSize={25}
      />
    </div>
  );
};

export default DataTable;
