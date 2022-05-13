import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

task("totalSupply")
    .addParam("tokenContractAddress", "tokenContractAddress")
    .setAction(async (args, hre) => {
    const zcoin = (await hre.ethers.getContractFactory("Zcoin"))
    .attach(args.tokenContractAddress);
    const total = await zcoin.totalSupply();
    console.log(
      `total zcoins are ${total.toString()}`
    );
  });