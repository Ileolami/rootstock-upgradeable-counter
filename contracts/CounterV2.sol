// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract CounterV2 {
    uint256 public count;
    function increment() public {
        count += 1;
    }
    function decrement() public {
        count -= 1;
    }
    function store(uint256 _count) public {
        count = _count;
    }
}