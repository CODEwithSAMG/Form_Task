import React, { useEffect, useState } from "react";

const TableData = (props) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(props.showData.todos);
  }, [tableData]);

  return (
    <>
      {tableData &&
        tableData.map((values, key) => {
          return (
            <tr key={key}>
              <td> {values.id} </td>
              <td> {values.name} </td>
              <td> {values.category} </td>
              <td> {values.date} </td>
              <td> {values.location} </td>
              <td> {values.description} </td>
            </tr>
          );
        })}
    </>
  );
};

export default TableData;
