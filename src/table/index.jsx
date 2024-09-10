import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { exportToExcel } from "./exportToExal";
import { getTableColumns } from "./getTableColimns";
import { getTableData } from "./getTableData";
import Cookies from "js-cookie";

const MainTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("access_token");
        const response = await fetch("http://213.230.71.82:4123/bid", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        });
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(tableData);

  return (
    <div>
      <button
        className='exportBtn'
        onClick={() => exportToExcel(tableData)}
      >
        Export to Excel
      </button>
      <Table
        columns={getTableColumns}
        dataSource={tableData}
      />
    </div>
  );
};

export default MainTable;
