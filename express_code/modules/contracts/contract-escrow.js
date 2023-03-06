//去mongodb中查询，而不是去区块链查询
var escrow_artifacts = require('../../../react_code/src/contracts/Escrow.json');
var contract = require('truffle-contract');
var Web3 = require('web3');

//HttpProvider is deprecated，HttpProvider不支持事件机制
// var provider = new Web3.providers.HttpProvider('http://localhost:8545');
//New ，WebsocketProvider支持事件机制
var provider = new Web3.providers.WebsocketProvider('http://localhost:8545');
// console.log("provider : ");
// console.dir(provider);

var Escrow = contract(escrow_artifacts);
Escrow.setProvider(provider);

module.exports = Escrow;