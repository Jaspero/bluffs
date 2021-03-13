pragma solidity >=0.4.22 <0.9.0;

contract Bluff {
	string public typeId;
	string public setId;

	string public src;
	string public description;

	struct Modifier {
		uint id;
		string description;
		string mType;
		int value;
	}

	Modifier[] public modifies;
}
