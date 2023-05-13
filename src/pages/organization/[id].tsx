import { useContext } from 'react';
import TalentLayerContext from '../../context/talentLayer';
import Loading from '../../components/Loading';
import Back from '../../components/Back';
import Steps from '../../components/Steps';
import useUserById from '../../hooks/useUserById';
import { router } from 'next/client';
import EditOrganizationForm from '../../components/Form/EditOrganizationForm';

function EditOrganization() {
  const { account, user } = useContext(TalentLayerContext);
  const { id } = router.query;
  const organization = useUserById(id as string);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className='max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0'>
      <Back />
      <p className='text-5xl font-medium tracking-wider mb-8'>
        Edit <span className='text-indigo-600'>your organization</span>
      </p>

      <Steps targetTitle={'Create an organization'} />

      {account?.isConnected && user && organization && <EditOrganizationForm />}
    </div>
  );
}

export default EditOrganization;
