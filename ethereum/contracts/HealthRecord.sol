// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.2 <0.9.0;
pragma experimental ABIEncoderV2;

contract HealthRecord {
    struct Patient {
        address patId;
        string patName;
        string ailment;
        string bloodGroup;
        string phoneNumber;
    }

    struct Records {
        Patient patient;
        bool isViewable;
        uint num;
    }

    mapping(address => Records) RecordData;
    Records[] recordArray;
    uint256 recordNumber;

    function getPatient() public view returns (Patient memory) {
        return RecordData[msg.sender].patient;
    }

    function createRecord(
        string memory _patName,
        string memory _ailment,
        string memory _bloodGroup,
        string memory _phoneNumber,
        bool _isViewable
    ) public {
        Patient memory newP = Patient(
            msg.sender,
            _patName,
            _ailment,
            _bloodGroup,
            _phoneNumber
        );
        Records memory record = Records(newP, _isViewable, recordNumber);

        RecordData[msg.sender] = record;
        recordArray.push(record);
        recordNumber++;
    }

    function getRecord() public view returns (Records[] memory) {
        return recordArray;
    }

    function getOneRecord() public view returns (Records memory) {
        return RecordData[msg.sender];
    }

    function setViewableToTrue(bool val) public {
        uint recnum = RecordData[msg.sender].num;
        RecordData[msg.sender].isViewable = val;
        recordArray[recnum].isViewable = val;
    }

    function setViewableToFalse() public {
        uint recnum = RecordData[msg.sender].num;
        RecordData[msg.sender].isViewable = false;
        recordArray[recnum].isViewable = false;
    }
}
