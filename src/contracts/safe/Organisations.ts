import { EthersAdapter, SafeAccountConfig, SafeFactory } from '@safe-global/protocol-kit';
import { ethers } from 'ethers';

// This file can be used to play around with the Safe Core SDK

interface Config {
  RPC_URL: string;
  DEPLOYER_ADDRESS_PRIVATE_KEY: string;
  DEPLOY_SAFE: {
    OWNERS: string[];
    THRESHOLD: number;
    SALT_NONCE: string;
  };
}

const config: Config = {
  RPC_URL: 'https://goerli.infura.io/v3/<INFURA_KEY>',
  DEPLOYER_ADDRESS_PRIVATE_KEY: '<DEPLOYER_PRIVATE_KEY>',
  DEPLOY_SAFE: {
    OWNERS: ['<OWNER_ADDRESS_1>', '<OWNER_ADDRESS_2>'],
    THRESHOLD: 1, // <SAFE_THRESHOLD>
    SALT_NONCE: '<SALT_NONCE_NUMBER>',
  },
};

//TODO add default 1
export async function deploySafe(
  members: string[],
  signer: ethers.Signer,
  threshold = 1,
): Promise<string | undefined> {
  // const provider = new ethers.providers.JsonRpcProvider(config.RPC_URL);
  // const deployerSigner = new ethers.Wallet(config.DEPLOYER_ADDRESS_PRIVATE_KEY, provider);
  if (!signer) return;
  // Create EthAdapter instance
  const ethAdapter = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  });

  // Create SafeFactory instance
  const safeFactory = await SafeFactory.create({ ethAdapter });

  // Config of the deployed Safe
  const safeAccountConfig: SafeAccountConfig = {
    owners: members,
    threshold: threshold,
  };

  //TODO check if this is compulsory
  const saltNonce = '054584';
  // const saltNonce = config.DEPLOY_SAFE.SALT_NONCE;

  // Predict deployed address
  const predictedDeploySafeAddress = await safeFactory.predictSafeAddress(
    safeAccountConfig,
    saltNonce,
  );

  console.log('Predicted deployed Safe address:', predictedDeploySafeAddress);

  function callback(txHash: string) {
    console.log('Transaction hash:', txHash);
  }

  // Deploy Safe
  const safe = await safeFactory.deploySafe({
    safeAccountConfig,
    saltNonce,
    callback,
  });

  console.log('Deployed Safe:', safe.getAddress());
  return safe.getAddress();
}
