import React, { useState, useEffect } from "react";
import { fetchRecords } from "../api";

function ViewRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      try {
        const response = await fetchRecords();
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    getRecords();
  }, []);

  return (
    <div>
      <h2>View Medical Records</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            <a href={`https://ipfs.io/ipfs/${record.ipfsHash}`} target="_blank" rel="noopener noreferrer">
              View Record {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewRecords;
