// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract CounterV2 is Initializable, OwnableUpgradeable {
    uint256 public count;

    function initialize(uint256 _count) public initializer {
        __Ownable_init(msg.sender);
        count = _count;
    }

    function increment() public {
        count += 1;
    }

    function decrement() public {
        require(count > 0, "Counter: underflow");
        count -= 1;
    }

    uint256[50] private __gap;
}
