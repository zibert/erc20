# ERC20

# Install package

npm i

# Test

npx hardhat coverage<br />

# Deploy

## local

npx hardhat run --network localhost scripts/deploy.ts

## rinkeby

npx hardhat run --network rinkeby scripts/deploy.ts<br />

# Verify

## rinkeby

npx hardhat verify --network rinkeby 0x5209023930B9C6A06Ce65707DFaCba146c60b8d5<br />

https://rinkeby.etherscan.io/address/0x5209023930B9C6A06Ce65707DFaCba146c60b8d5#code

# Tasks 

## mint example: 

npx hardhat mint --network rinkeby --token-contract-address 0x5209023930B9C6A06Ce65707DFaCba146c60b8d5 --to-account 0x624c31357a67344f6d0278a6ef1F839E2136D735 --amount 42

npx hardhat mint --network localhost --token-contract-address 0x5FbDB2315678afecb367f032d93F642f64180aa3 --to-account 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 --amount 42

## burn example: 

npx hardhat burn --network rinkeby --token-contract-address 0x5209023930B9C6A06Ce65707DFaCba146c60b8d5 --to-account 0x624c31357a67344f6d0278a6ef1F839E2136D735 --amount 42

npx hardhat burn --network localhost --token-contract-address 0x5FbDB2315678afecb367f032d93F642f64180aa3 --to-account 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 --amount 42

## totalSupply example: 

npx hardhat totalSupply --network rinkeby --token-contract-address 0x5209023930B9C6A06Ce65707DFaCba146c60b8d5

npx hardhat totalSupply --network localhost --token-contract-address 0x5FbDB2315678afecb367f032d93F642f64180aa3 

## balanceOf example: 

npx hardhat balanceOf --network rinkeby --token-contract-address 0x5209023930B9C6A06Ce65707DFaCba146c60b8d5 --address 0x624c31357a67344f6d0278a6ef1F839E2136D735

npx hardhat balanceOf --network localhost --token-contract-address 0x5FbDB2315678afecb367f032d93F642f64180aa3 --address 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266

## allowance example: 

npx hardhat allowance --network rinkeby --token-contract-address 0x5209023930B9C6A06Ce65707DFaCba146c60b8d5 --token-owner 0x624c31357a67344f6d0278a6ef1F839E2136D735 --spender 0xC413AeD1E837F528670f8bf27C4Eed9AFCDB7bB5

npx hardhat allowance --network localhost --token-contract-address 0x5FbDB2315678afecb367f032d93F642f64180aa3 --token-owner 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 --spender 0x70997970c51812dc3a010c7d01b50e0d17dc79c8

## transfer example: 

npx hardhat allowance --network rinkeby --token-contract-address 0x5209023930B9C6A06Ce65707DFaCba146c60b8d5 --to-account 0xC413AeD1E837F528670f8bf27C4Eed9AFCDB7bB5 --amount 42

npx hardhat allowance --network localhost --token-contract-address 0x5FbDB2315678afecb367f032d93F642f64180aa3 --to-account 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 --amount 42

## transferFrom example: 

npx hardhat transferFrom --network rinkeby --token-contract-address 0x5209023930B9C6A06Ce65707DFaCba146c60b8d5 --from 0x624c31357a67344f6d0278a6ef1F839E2136D735 --to 0xC413AeD1E837F528670f8bf27C4Eed9AFCDB7bB5 --amount 42

npx hardhat transferFrom --network localhost --token-contract-address 0x5FbDB2315678afecb367f032d93F642f64180aa3 --from 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 --to 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 --amount 42

## approve example: 

npx hardhat approve --network rinkeby --token-contract-address 0x5209023930B9C6A06Ce65707DFaCba146c60b8d5 --spender 0xC413AeD1E837F528670f8bf27C4Eed9AFCDB7bB5 --amount 42

npx hardhat approve --network localhost --token-contract-address 0x5FbDB2315678afecb367f032d93F642f64180aa3 --spender 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 --amount 42