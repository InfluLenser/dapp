import { useWeb3Modal } from '@web3modal/react';
import { ethers } from 'ethers';
import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { useProvider, useSigner } from 'wagmi';
import * as Yup from 'yup';
import { config } from '../../config';
import TalentLayerContext from '../../context/talentLayer';
import TalentLayerID from '../../contracts/ABI/TalentLayerID.json';
import { postToIPFS } from '../../utils/ipfs';
import { createMultiStepsTransactionToast, showErrorTransactionToast } from '../../utils/toast';
import Loading from '../Loading';
import SubmitButton from './SubmitButton';
import useUserById from '../../hooks/useUserById';
import { SkillsInput } from './skills-input';
import { getUserByAddress } from '../../queries/users';
import { delegateUpdateProfileData } from '../request';
import { ContentFocus, ProfileOwnedByMe, useCreatePost } from '@lens-protocol/react-web';
import { ShareToLens, Theme, Size } from '@lens-protocol/widgets-react';
import Link from 'next/link';
import { useFormikContext } from 'formik';

interface IFormValues {
  text?: string;
}

const validationSchema = Yup.object({
  title: Yup.string().required('title is required'),
});

function PostForm({ callback }: { callback?: () => void }) {
  const { open: openConnectModal } = useWeb3Modal();
  const { user } = useContext(TalentLayerContext);
  const provider = useProvider({ chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string) });
  const userDescription = user?.id ? useUserById(user?.id)?.description : null;
  const { data: signer } = useSigner({
    chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string),
  });

  // const { execute: create, error, isPending } = useCreatePost({ user, upload: uploadJson });

  if (!user?.id) {
    return <Loading />;
  }

  const initialValues: IFormValues = {
    text: '',
  };

  const onSubmit = (
    values: IFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {};

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ isSubmitting }) => {
          const { values } = useFormikContext();
          return (
            <Form>
              <div className='grid grid-cols-1 gap-6 border border-gray-200 rounded-md p-8'>
                <label className='block'>
                  <Field
                    as='textarea'
                    type='text'
                    id='text'
                    name='text'
                    className='mt-1 h-40 block w-full rounded-md border-gray-300 shadow-sm focus:border-il-green-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    placeholder='Write your post'
                  />
                </label>

                <div className='flex justify-end'>
                  <Link
                    className='text-center border
            border-il-green-800
            text-il-green-800
            bg-il-lightgreen-200
            hover:bg-il-green-main
            duration-100 px-5 py-2 rounded-lg'
                    href={`https://testnet.lenster.xyz/?text=${}&url=https://mycoolapp.xyz&via=MyCoolApp&hashtags=lens,web3`}
                    target='_blank'>
                    Post
                  </Link>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default PostForm;
