import { useContext } from 'react';
import Steps from '../../components/Steps';
import UserBadges from '../../modules/Sismo/components/UserBadges';
import UserDetail from '../../components/UserDetail';
import UserGains from '../../components/UserGains';
import UserPayments from '../../components/UserPayments';
import UserProposals from '../../components/UserProposals';
import UserServices from '../../components/UserServices';
import TalentLayerContext from '../../context/talentLayer';
import UserLensFeed from '../../modules/Lens/components/UserLensFeed';
import UserLensProfile from '../../modules/Lens/components/UserLensProfile';
import useLensUser from '../../modules/Lens/hooks/useLensUsers';
import LensModule from '../../modules/Lens/LensModule';


function Dashboard() {
  const { account, user } = useContext(TalentLayerContext);

  if(!user) return
  const { lensUser } = useLensUser(user.address);
  //const { lensFeed } = UserLensFeed(user.address);

  return (
    <div className='max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0'>
      <p className='text-5xl font-medium tracking-wider mb-8'>
        Personal <span className='bg-clip-text text-transparent bg-gradient-to-r from-il-green-800 to-il-green-600'>dashboard</span>
      </p>

      <Steps targetTitle={'Access your dashboard'} />

      {account?.isConnected && user && (
        <div>
          <div className='mb-6'>
            <h2 className='mb-6 pb-4 border-b border-gray-gray-200 text-gray-900 font-medium break-all'>
              My Profile
            </h2>
            <UserDetail user={user} />
          </div>
          {lensUser && <div className='md:w-1/2 xl:w-1/3 mb-6'>
            <UserLensProfile lensUser={lensUser} />
          </div>}
          <div className='mb-6'>
            <UserPayments user={user} />
          </div>
          <div className='mb-6'>
            <UserGains user={user} />
          </div>
          <div className='mb-6'>
            <UserServices user={user} type='buyer' />
          </div>
          <div className='mb-6'>
            <UserServices user={user} type='seller' />
          </div>
          <div className='mb-6'>
            <UserProposals user={user} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
