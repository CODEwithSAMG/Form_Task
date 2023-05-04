import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TableData from './tableData';

const FetchingData = () => {
    const [gettingDatas, setgettingData] = useState("");
    const gettingData = useSelector((state) => { return state.todos });

    useEffect(() => {
        setgettingData(gettingData)
    }, [])

    return (
        <table>
            <tr>
                <th>Event Name</th>
                <th>Event Type</th>
                <th>Country</th>
                <th>Location</th>
            </tr>
            {/* <tr>
                <td>{gettingData}</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr> */}

            <tbody>
                <TableData showData={gettingDatas} />
            </tbody>
        </table>
    )
}

export default FetchingData;