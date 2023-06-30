import web3 from "./web3";
import HealthRecordCompiled from "./build/HealthRecord.json";
// import { address } from "./deploy";

const instance = new web3.eth.Contract(
  JSON.parse(HealthRecordCompiled.interface),
  "0x700247248Bf939E408420575DefAC39086425d5d"
);

export default instance;
