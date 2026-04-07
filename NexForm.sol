```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract NexForm {
    address public owner;

    struct Asset {
        string name;
        uint256 value;
        address owner;
    }

    Asset[] public assets;

    constructor() {
        owner = msg.sender;
    }

    function createAsset(string memory _name, uint256 _value) public {
        assets.push(Asset(_name, _value, msg.sender));
    }

    function getAssets() public view returns (Asset[] memory) {
        return assets;
    }
}
```
