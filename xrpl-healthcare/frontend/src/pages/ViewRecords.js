import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewRecords() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function fetchRecords() {
            try {
                const response = await axios.get("http://localhost:5000/records");
                setRecords(response.data);
            } catch (error) {
                console.error("Error fetching records:", error);
            }
        }
        fetchRecords();
    }, []);

    return (
        <div>
            <h2>Stored Healthcare Records</h2>
            <ul>
                {records.map((record, index) => (
                    <li key={index}>
                        <a href={`https://ipfs.io/ipfs/${record.ipfsHash}`} target="_blank" rel="noopener noreferrer">
                            {record.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewRecords;
