import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

task("balanceOf")
    .addParam("tokenContractAddress", "tokenContractAddress")
    .addParam("address", "address")
  .setAction(async (args, hre) => {
    const zcoin = (await hre.ethers.getContractFactory("Zcoin"))
    .attach(args.tokenContractAddress);
    const balance = await zcoin.balanceOf(args.address);
    console.log(
      `balance are ${balance.toString()} zcoins for address ${args.address}`
    );
  });