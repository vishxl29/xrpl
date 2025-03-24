const express = require("express");
const cors = require("cors");
const { createWallet } = require("./xrplWallet");
const { uploadToIPFS } = require("./ipfsStorage");
const { issueAccessToken } = require("./xrplToken");

const app = express();
app.use(cors());
app.use(express.json());

// API Endpoints
app.get("/", (req, res) => res.send("XRPL Healthcare API Running"));

// Create XRPL Wallet
app.get("/create-wallet", async (req, res) => {
    const wallet = await createWallet();
    res.json(wallet);
});

// Upload Medical Data to IPFS
app.post("/upload-ipfs", async (req, res) => {
    const { filePath } = req.body;
    const cid = await uploadToIPFS(filePath);
    res.json({ cid });
});

// Issue Access Token
app.post("/issue-token", async (req, res) => {
    const { providerAddress } = req.body;
    await issueAccessToken(providerAddress);
    res.json({ message: "Access Token Issued" });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
