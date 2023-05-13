import { useWeb3Modal } from '@web3modal/react';
import { ethers } from 'ethers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { useProvider, useSigner } from 'wagmi';
import * as Yup from 'yup';
import { config } from '../../config';
import TalentLayerContext from '../../context/talentLayer';
import TalentLayerID from '../../contracts/ABI/TalentLayerID.json';
import { createMultiStepsTransactionToast, showErrorTransactionToast } from '../../utils/toast';
import Loading from '../Loading';
import SubmitButton from './SubmitButton';
import { useRouter } from 'next/router';

interface IFormValues {
  handle?: string;
  members?: string;
}

const validationSchema = Yup.object({
  handle: Yup.string().required('Handle is required'),
});

function CreateOrganizationForm({ callback }: { callback?: () => void }) {
  const { open: openConnectModal } = useWeb3Modal();
  const { user } = useContext(TalentLayerContext);
  const provider = useProvider({ chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string) });
  const { data: signer } = useSigner({
    chainId: parseInt(process.env.NEXT_PUBLIC_NETWORK_ID as string),
  });
  const router = useRouter();

  if (!user?.id) {
    return <Loading />;
  }

  const initialValues: IFormValues = {
    handle: '',
    members: '',
  };

  const onSubmit = async (
    values: IFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    if (user && provider && signer) {
      try {
        const contract = new ethers.Contract(
          config.contracts.talentLayerId,
          TalentLayerID.abi,
          signer,
        );

        const handlePrice = await contract.getHandlePrice(values.handle);

        // TODO Insert here safe core address

        const tx = await contract.mintForAddress(
          //Safe address
          process.env.NEXT_PUBLIC_PLATFORM_ID,
          values.handle,
          {
            value: handlePrice,
          },
        );

        const newId = await createMultiStepsTransactionToast(
          {
            pending: 'Creating organization profile...',
            success: 'Congrats! Your organization has been created',
            error: 'An error occurred while creating your organization',
          },
          provider,
          tx,
          'user',
        );

        if (newId) {
          router.push('/organizations/edit' + newId);
        }

        setSubmitting(false);
      } catch (error) {
        showErrorTransactionToast(error);
      }
    } else {
      openConnectModal();
    }
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
              <span className='text-gray-700'>Handle</span>
              <Field
                type='text'
                id='handle'
                name='handle'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                placeholder=''
              />
              <span className='text-red-500'>
                <ErrorMessage name='about' />
              </span>
            </label>

            {/*Fields to be displayed conditionnally after organization created*/}
            {/*TODO Threshold after organization created*/}
            <label className='block hidden'>
              <span className='text-gray-700'>Threshhold</span>
              <Field
                as='select'
                id='threshhold'
                name='threshhold'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                placeholder=''>
                <option value=''></option>
                <option value=''></option>
                <option value=''></option>
              </Field>
            </label>
            {/*TODO Description after organization created*/}
            <label className='block'>
              <span className='text-gray-700'>About</span>
              <Field
                as='textarea'
                id='about'
                name='about'
                rows='4'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                placeholder=''
              />
            </label>

            <SubmitButton isSubmitting={isSubmitting} label='Update' />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CreateOrganizationForm;
