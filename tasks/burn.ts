import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

task("burn")
    .addParam("tokenContractAddress", "tokenContractAddress")
    .addParam("toAccount", "toAccount")
    .addParam("amount", "amount")
  .setAction(async (args, hre) => {
    const zcoin = (await hre.ethers.getContractFactory("Zcoin"))
    .attach(args.tokenContractAddress);
    await zcoin.burn(args.toAccount, args.amount);
    const balance = await zcoin.balanceOf(args.toAccount);
    console.log(
      `balance are ${balance.toString()} zcoins for address ${args.toAccount}`
    );
  });