import { useContext } from 'react';
import TalentLayerContext from '../../context/talentLayer';
import Back from '../../components/Back';
import Steps from '../../components/Steps';
import CreateOrganizationForm from '../../components/Form/CreateOrganizationForm';

function CreateOrganization() {
  const { account, user } = useContext(TalentLayerContext);

  return (
    <div className='max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0'>
      <Back />
      <p className='text-5xl font-medium tracking-wider mb-8'>
        Create <span className='text-indigo-600'>an organization</span>
      </p>

      <Steps targetTitle={'Create an organization'} />

      {account?.isConnected && user && <CreateOrganizationForm />}
    </div>
  );
}

export default CreateOrganization;
