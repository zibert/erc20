import { ethers, waffle } from 'hardhat'
import chai from 'chai'
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address"

import ZcoinArtifacts from '../artifacts/contracts/Zcoin.sol/Zcoin.json'
import { Zcoin } from '../src/types/Zcoin'


const { deployContract } = waffle
const { expect } = chai

import { Contract, ContractReceipt } from "ethers";

const getEventData = (
    eventName: string,
    contract: Contract,
    txResult: ContractReceipt
  ): any => {
    if (!Array.isArray(txResult.logs)) return null;
    for (let log of txResult.logs) {
      try {
        const decoded = contract.interface.parseLog(log);
        if (decoded.name === eventName)
          return {
            ...decoded,
            ...decoded.args
          };
      } catch (error) {}
    }
    return null;
  };

describe('Zcoin event', () => {
  let zcoin: Zcoin
  let signers: SignerWithAddress[]
  let owner: SignerWithAddress;
  let acc1: SignerWithAddress;
  let acc2: SignerWithAddress;
  let acc3: SignerWithAddress;
  

  beforeEach(async () => {
    signers = await ethers.getSigners()
    owner = signers[0];
    acc1 = signers[1];
    acc2 = signers[2];
    acc3 = signers[3];
    zcoin = (await deployContract(signers[0], ZcoinArtifacts)) as Zcoin
  })

  describe('zcoin event function', async () => {
    it('zcoin transfer event is correct', async () => {
      await zcoin.mint(acc1.address, 42);
      await zcoin.connect(acc1).approve(acc2.address, 42);

      const receipt = await (await zcoin.connect(acc1).transfer(acc2.address, 42)).wait(1);
      const event = getEventData("Transfer", zcoin, receipt);
      expect(event.from).to.equal(acc1.address);
      expect(event.to).to.equal(acc2.address);
      expect(event.value).to.equal(42);
    })

    it('zcoin approve event is correct', async () => {
        const receipt = await (await zcoin.connect(acc1).approve(acc2.address, 42)).wait(1);
        const event = getEventData("Approval", zcoin, receipt);
        expect(event.owner).to.equal(acc1.address);
        expect(event.spender).to.equal(acc2.address);
        expect(event.value).to.equal(42);
    })

    it('zcoin transferFrom event is correct', async () => {
        await zcoin.mint(acc1.address, 42);
        await zcoin.connect(acc1).approve(acc2.address, 42);
  
        const receipt = await (await zcoin.connect(acc3).transferFrom(acc1.address, acc2.address, 42)).wait(1);

        const event = getEventData("Transfer", zcoin, receipt);
        expect(event.from).to.equal(acc1.address);
        expect(event.to).to.equal(acc2.address);
        expect(event.value).to.equal(42);
    })

    it('zcoin mint event is correct', async () => {
        const receipt = await (await zcoin.mint(acc1.address, 42)).wait(1);

        const event = getEventData("Transfer", zcoin, receipt);
        expect(event.from).to.equal("0x0000000000000000000000000000000000000000");
        expect(event.to).to.equal(acc1.address);
        expect(event.value).to.equal(42);
    })

    it('zcoin mint event is correct', async () => {
        await zcoin.mint(acc1.address, 42)
        const receipt = await (await zcoin.burn(acc1.address, 42)).wait(1);

        const event = getEventData("Transfer", zcoin, receipt);
        expect(event.to).to.equal("0x0000000000000000000000000000000000000000");
        expect(event.from).to.equal(acc1.address);
        expect(event.value).to.equal(42);
    })
  })

})