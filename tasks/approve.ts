import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

task("approve")
    .addParam("tokenContractAddress", "tokenContractAddress")
    .addParam("spender", "spender")
    .addParam("amount", "amount")
  .setAction(async (args, hre) => {
    const zcoin = (await hre.ethers.getContractFactory("Zcoin"))
    .attach(args.tokenContractAddress);
    await zcoin.approve(args.spender, args.amount);
    const tokenOwner = (await hre.ethers.getSigners())[0].address
    const allowance = await zcoin.allowance(tokenOwner, args.spender);
    console.log(
      `allowance are ${allowance.toString()} zcoins for tokenOwner ${tokenOwner} and spender ${args.spender}`
    );
  });