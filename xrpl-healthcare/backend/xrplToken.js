require("dotenv").config();

const xrpl = require("xrpl");

require("dotenv").config();

const XRPL_SERVER = "wss://s.altnet.rippletest.net:51233";
const ISSUER_SECRET = process.env.XRPL_ISSUER_SECRET;

async function issueAccessToken(providerAddress) {
    const client = new xrpl.Client(XRPL_SERVER);
    await client.connect();

    const issuerWallet = xrpl.Wallet.fromSeed(ISSUER_SECRET);
    const transaction = {
        TransactionType: "Payment",
        Account: issuerWallet.classicAddress,
        Amount: {
            currency: "HEALTH",
            value: "1",
            issuer: issuerWallet.classicAddress
        },
        Destination: providerAddress
    };

    const prepared = await client.autofill(transaction);
    const signed = issuerWallet.sign(prepared);
    const result = await client.submitAndWait(signed.tx_blob);
    console.log("Token Issued:", result);

    await client.disconnect();
}

module.exports = { issueAccessToken };
