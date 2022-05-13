import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

task("allowance")
    .addParam("tokenContractAddress", "tokenContractAddress")
    .addParam("tokenOwner", "tokenOwner")
    .addParam("spender", "spender")
  .setAction(async (args, hre) => {
    const zcoin = (await hre.ethers.getContractFactory("Zcoin"))
    .attach(args.tokenContractAddress);
    const allowance = await zcoin.allowance(args.tokenOwner, args.spender);
    console.log(
      `allowance are ${allowance.toString()} zcoins for tokenOwner ${args.tokenOwner} and spender ${args.spender}`
    );
  });