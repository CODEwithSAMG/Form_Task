import React, { useEffect, useState } from 'react';

const TableData = (props) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(props.showData.todos);
    }, [props])

    return (
        <>
            {/* {tableData.map((values) => {
                console.log(tableData)
                console.log(values)
                return (
                    <tr>
                        <td>   {values.id}   </td>
                        <td>   {values.description}  </td>
                        <td>   {values.emal}  </td>
                    </tr>
                )
            })} */}
        </>
    )
}

export default TableData;