import { create } from 'ipfs-http-client';

const fs = require("fs");

const ipfs = create({ url: 'http://127.0.0.1:5001' });


async function uploadToIPFS(filePath) {
    const file = fs.readFileSync(filePath);
    const { cid } = await ipfs.add(file);
    console.log("Uploaded to IPFS:", cid.toString());
    return cid.toString();
}

module.exports = { uploadToIPFS };
