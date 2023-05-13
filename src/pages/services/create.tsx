import { useContext } from 'react';
import ServiceForm from '../../components/Form/ServiceForm';
import Steps from '../../components/Steps';
import TalentLayerContext from '../../context/talentLayer';
import ConnectButton from '../../modules/Messaging/components/ConnectButton';
import MessagingContext from '../../modules/Messaging/context/messging';

function CreateService() {
  const { account, user } = useContext(TalentLayerContext);
  const { userExists } = useContext(MessagingContext);

  return (
    <div className='max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0'>
      <p className='text-5xl font-medium tracking-wider mb-8'>
        Post <span className='text-il-green-600'>a Sponsorship Opportunity</span>
      </p>
      <p className='text-2xl font-medium tracking-wider mb-8'>
      Ready to find the next social media star ⭐ to help spread the word about your awesome product 😎? Post a sponsorship opportunity for influLENSers to apply for.
      </p>

      <Steps targetTitle={'Fill the job form'} />

      {!userExists() && account?.isConnected && user && (
        <div className='border border-gray-200 rounded-md p-8'>
          <p className='text-gray-600 py-4'>
            In order to create a sponsorship opportunity, you need to set up your direct message inbox. 
          </p>
          <ConnectButton />
        </div>
      )}

      {account?.isConnected && user && userExists() && <ServiceForm />}
    </div>
  );
}

export default CreateService;
