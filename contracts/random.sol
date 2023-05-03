// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//0x5e4e4Eb54b0ffB8eEC694D14b50000700B30B058

contract random {
    uint8 public random_number;

    function Generate_Number() public returns (uint8) {
        bytes32 hash = blockhash(block.number);
        uint256 random_num = uint256(
            keccak256(abi.encodePacked(block.timestamp, hash))
        );
        random_number = uint8((random_num % 20) + 1);
        return random_number;
    }
}
