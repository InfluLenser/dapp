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

interface IFormValues {
  title?: string;
  role?: string;
  image_url?: string;
  video_url?: string;
  name?: string;
  about?: string;
  skills?: string;
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

  if (!user?.id) {
    return <Loading />;
  }

  const initialValues: IFormValues = {
    title: userDescription?.title || '',
    role: userDescription?.role || '',
    image_url: userDescription?.image_url || '',
    video_url: userDescription?.video_url || '',
    name: userDescription?.name || '',
    about: userDescription?.about || '',
    skills: userDescription?.skills_raw || '',
  };

  const onSubmit = async (
    values: IFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    // if (user && provider && signer) {
    //   try {
    //     const cid = await postToIPFS(
    //       JSON.stringify({
    //         title: values.title,
    //         role: values.role,
    //         image_url: values.image_url,
    //         video_url: values.video_url,
    //         name: values.name,
    //         about: values.about,
    //         skills: values.skills,
    //       }),
    //     );
    //     const getUser = await getUserByAddress(user.address);
    //     const delegateAddresses = getUser.data?.data?.users[0].delegates;
    //     let tx;
    //     if (
    //       process.env.NEXT_PUBLIC_ACTIVE_DELEGATE &&
    //       delegateAddresses &&
    //       delegateAddresses.indexOf(config.delegation.address.toLowerCase()) != -1
    //     ) {
    //       const response = await delegateUpdateProfileData(user.id, user.address, cid);
    //       tx = response.data.transaction;
    //     } else {
    //       const contract = new ethers.Contract(
    //         config.contracts.talentLayerId,
    //         TalentLayerID.abi,
    //         signer,
    //       );
    //       tx = await contract.updateProfileData(user.id, cid);
    //     }
    //     await createMultiStepsTransactionToast(
    //       {
    //         pending: 'Updating profile...',
    //         success: 'Congrats! Your profile has been updated',
    //         error: 'An error occurred while updating your profile',
    //       },
    //       provider,
    //       tx,
    //       'user',
    //       cid,
    //     );
    //     if (callback) {
    //       callback();
    //     }
    //     setSubmitting(false);
    //   } catch (error) {
    //     showErrorTransactionToast(error);
    //   }
    // } else {
    //   openConnectModal();
    // }
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ isSubmitting }) => (
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
              <SubmitButton isSubmitting={isSubmitting} label='Post' />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PostForm;
