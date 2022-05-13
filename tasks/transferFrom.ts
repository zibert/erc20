import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

task("transferFrom")
    .addParam("tokenContractAddress", "tokenContractAddress")
    .addParam("from", "from")
    .addParam("to", "to")
    .addParam("amount", "amount")
  .setAction(async (args, hre) => {
    const zcoin = (await hre.ethers.getContractFactory("Zcoin"))
    .attach(args.tokenContractAddress);
    await zcoin.transferFrom(args.from, args.to, args.amount);
    let balance = await zcoin.balanceOf(args.from);
    console.log(
      `balance(sender) are ${balance.toString()} zcoins for address ${args.from}`
    );
    balance = await zcoin.balanceOf(args.to);
    console.log(
      `balance(recipient) are ${balance.toString()} zcoins for address ${args.to}`
    );
  });