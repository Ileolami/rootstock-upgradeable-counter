// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
    
    uint256 public count;

    function increment() public {
        count += 1;
    }
    //the contract intialiser function
    function store(uint256 _count) public {
        count = _count;
    }
}
