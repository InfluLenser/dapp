import { ConnectButton } from '@web3modal/react';

function ConnectBlock() {
  return (
    <div className='border border-gray-200 rounded-md p-8'>
      <p className='text-gray-500 py-4'>
        You must connect your wallet to access features such as creating a profile, posting opportunities, messaging,...
      </p>
      <ConnectButton />
    </div>
  );
}

export default ConnectBlock;
