import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:5000/upload", formData);
            setMessage(`File uploaded successfully! IPFS Hash: ${response.data.ipfsHash}`);
        } catch (error) {
            setMessage("Error uploading file.");
        }
    };

    return (
        <div>
            <h2>Upload Healthcare Data</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <p>{message}</p>
        </div>
    );
}

export default Upload;
