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
                <th>Id</th>
                <th>Event Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Location</th>
                <th>Description</th>
            </tr>

            <tbody>
                <TableData showData={gettingDatas} />
            </tbody>
        </table>
    )
}

export default FetchingData;