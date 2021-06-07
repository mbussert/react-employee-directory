import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./style.css";
import API from "../../utils/API";

const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 250,
      headerClassName: "table-head",
    },
    {
      field: "username",
      headerName: "Username",
      width: 250,
      headerClassName: "table-head",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      headerClassName: "table-head",
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
      headerClassName: "table-head",
    },
    {
      field: "country",
      headerName: "Country",
      width: 175,
      headerClassName: "table-head",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const request = await API.get("https://randomuser.me/api/?results=25");
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
      username: user.login.username,
    })
  );

  console.log(rows);

  return (
    <div style={{ width: "1177px", margin: "auto" }}>
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
