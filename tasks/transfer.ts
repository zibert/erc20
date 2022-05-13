import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

task("transfer")
    .addParam("tokenContractAddress", "tokenContractAddress")
    .addParam("toAccount", "toAccount")
    .addParam("amount", "amount")
  .setAction(async (args, hre) => {
    const zcoin = (await hre.ethers.getContractFactory("Zcoin"))
    .attach(args.tokenContractAddress);
    await zcoin.transfer(args.toAccount, args.amount);
    let balance = await zcoin.balanceOf(args.toAccount);
    console.log(
      `balance(recepient) are ${balance.toString()} zcoins for address ${args.toAccount}`
    );
    const sender = (await hre.ethers.getSigners())[0].address
    balance = await zcoin.balanceOf(sender);
    console.log(
      `balance(sender) are ${balance.toString()} zcoins for address ${sender}`
    );
  });