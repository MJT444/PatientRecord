import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
  console.log("if");
} else {
  const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
  web3 = new Web3(provider);
  console.log("else");
}

export default web3;
