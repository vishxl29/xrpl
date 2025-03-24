const xrpl = require("xrpl");

async function createWallet() {
    try {
        const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
        console.log("Connecting to XRPL Testnet...");
        await client.connect();

        const wallet = xrpl.Wallet.generate();
        console.log("✅ New XRPL Wallet Created!");
        console.log("Wallet Address:", wallet.classicAddress);
        console.log("Secret Key:", wallet.seed);

        await client.disconnect();
        return wallet;
    } catch (error) {
        console.error("❌ Error Creating Wallet:", error);
    }
}

// Run the function when this script is executed
createWallet();
