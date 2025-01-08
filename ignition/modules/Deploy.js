// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("PST", (m) => {
  // const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);
  const token = m.contract("PST");
  return { token };
});
