
const hre = require("hardhat");

async function main() {
  const NexForm = await hre.ethers.getContractFactory("NexForm");
  const nexform = await NexForm.deploy();

  await nexform.deployed();

  console.log("NexForm deployed to:", nexform.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```
