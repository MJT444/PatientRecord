const Web3 = require("web3");
const HealthRecord = require("./build/HealthRecord.json");

const web3 = new Web3("HTTP://127.0.0.1:7545");

// let address;

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Deploying from account ", +accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(HealthRecord.interface))
    .deploy({ data: HealthRecord.bytecode })
    .send({ gas: "1285335", from: accounts[0] });
  address = result.options.address;
  console.log("Deployed to " + result.options.address);
};
deploy();
// console.log("here" + result.options.address);

// module.exports = {
//   address,
// };
