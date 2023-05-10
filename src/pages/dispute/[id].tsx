import { useContext, useState } from 'react';
import TalentLayerContext from '../../context/talentLayer';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import useProposalById from '../../hooks/useProposalById';
import EvidenceForm from '../../components/Form/EvidenceForm';
import { TransactionStatusEnum } from '../../types';
import { Evidence } from '../../modules/Kleros/utils/types';
import { generateEvidence } from '../../modules/Kleros/utils/generateMetaEvidence';
import { postToIPFS } from '../../utils/ipfs';
import { ethers } from 'ethers';
import { config } from '../../config';
import TalentLayerEscrow from '../../contracts/ABI/TalentLayerEscrow.json';
import { createMultiStepsTransactionToast, showErrorTransactionToast } from '../../utils/toast';
import { useWeb3Modal } from '@web3modal/react';
import { useProvider, useSigner } from 'wagmi';

function Dispute() {
  const router = useRouter();
  const { id: proposalId } = router.query;
  const { account, user } = useContext(TalentLayerContext);
  const proposal = useProposalById(proposalId as string);
  const transactionId = proposal?.service?.transaction?.id;
  //TODO query for evidences + conditional display

  if (
    user &&
    proposal &&
    user.id !== proposal?.service.buyer.id &&
    user.id !== proposal?.seller.id
  ) {
    //TODO ID wrong, need to substring before "-"
    router.push(`/services/${proposalId}`);
  }

  if (!proposal?.service?.transaction?.id) {
    return <Loading />;
  }

  return (
    <>
      {proposal?.service.transaction.status === TransactionStatusEnum.NoDispute && (
        <div className='max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0'>
          <p className='text-5xl font-medium tracking-wider mb-8'>
            Raise <span className='text-indigo-600'>a dispute</span>
          </p>
          <div className={'border border-gray-200 rounded-md p-8'}>
            <div className={'mb-4 pb-4 border-b border-b-gray-200'}>
              You are about to raise a dispute for the service{' '}
              {proposal?.service.description?.title}
            </div>
            <div className={'mb-4 pb-4 border-b border-b-gray-200'}>
              Here are the evidences you are about to submit:
            </div>
            {account?.isConnected && user && transactionId && (
              <EvidenceForm transactionId={transactionId} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Dispute;