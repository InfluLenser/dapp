import { ethers } from 'ethers';
import { useContext, useEffect, useState } from 'react';
import { useProvider, useSigner } from 'wagmi';
import { toggleDelegation } from '../../contracts/toggleDelegation';
import TalentLayerContext from '../../context/talentLayer';
import { config } from '../../config';
import TalentLayerID from '../../contracts/ABI/TalentLayerID.json';
import { getUserByAddress } from '../../queries/users';
import { Field, Form, Formik } from 'formik';
import PostForm from '../Form/PostForm';

function PostModal() {
  const [show, setShow] = useState(false);
  const [hasPlatformAsDelegate, setHasPlatformAsDelegate] = useState(false);
  const { data: signer } = useSigner({
    chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string),
  });
  const provider = useProvider({ chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string) });
  const { user } = useContext(TalentLayerContext);
  const delegateAddress = config.delegation.address;

  if (!user) {
    return;
  }

  const checkDelegateState = async () => {
    const getUser = await getUserByAddress(user.address);
    const delegateAddresses = getUser.data?.data?.users[0].delegates;

    if (
      delegateAddresses &&
      delegateAddresses.indexOf(config.delegation.address.toLowerCase()) != -1
    ) {
      setHasPlatformAsDelegate(true);
    } else {
      setHasPlatformAsDelegate(false);
    }
  };

  useEffect(() => {
    checkDelegateState();
  }, [user, show]);

  const onSubmit = async (validateState: boolean) => {
    const contract = new ethers.Contract(
      config.contracts.talentLayerId,
      TalentLayerID.abi,
      signer!,
    );
    if (!signer || !provider || !user) {
      return;
    }
    await toggleDelegation(user.id, delegateAddress, provider, validateState, contract);

    setShow(false);
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className='flex-1 text-center border
        border-il-green-800
        text-il-green-800
        bg-il-lightgreen-200
        hover:bg-il-green-main
        duration-100 px-5 py-2 rounded-lg'
        type='button'
        data-modal-toggle='defaultModal'>
        Post
      </button>

      <div
        className={`${
          !show ? 'hidden' : ''
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-black/75 flex flex-col items-center justify-center`}>
        <div className='relative p-4 w-full max-w-2xl h-auto'>
          <div className='relative bg-white rounded-lg shadow '>
            <div className='flex justify-between items-start p-4 rounded-t border-b '>
              <h3 className='text-xl font-semibold text-gray-900 '>Post on Lens</h3>
              {/* close button */}
              <button
                onClick={() => setShow(false)}
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center '
                data-modal-toggle='defaultModal'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>

            <PostForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostModal;
