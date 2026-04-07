
import { useState } from "react";

export default function WalletConnect() {
  const [account, setAccount] = useState("");

  async function connect() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  }

  return (
    <div>
      <button onClick={connect}>Connect Wallet</button>
      <p>{account}</p>
    </div>
  );
}
```
