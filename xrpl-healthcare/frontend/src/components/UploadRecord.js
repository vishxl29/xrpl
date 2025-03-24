import React, { useState } from "react";
import { uploadFile } from "../api";

function UploadRecord() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    try {
      const response = await uploadFile(file);
      setMessage(`Uploaded! IPFS Hash: ${response.data.ipfsHash}`);
    } catch (error) {
      setMessage("Error uploading file.");
    }
  };

  return (
    <div>
      <h2>Upload Medical Record</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}

export default UploadRecord;

