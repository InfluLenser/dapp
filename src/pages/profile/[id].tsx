import { useRouter } from 'next/router';
import Back from '../../components/Back';
import Loading from '../../components/Loading';
import UserDetail from '../../components/UserDetail';
import useUserById from '../../hooks/useUserById';
import LensModule from '../../modules/Lens/LensModule';
import UserBounties from '../../components/UserBounties';

function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const user = useUserById(id as string);

  

  if (!user) {
    return <Loading />;
  }

  return (
    <div className='max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0'>
      <Back />
      {user && (
        <>
          <p className='text-5xl font-medium tracking-wider mb-8'>
            Profile{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-il-green-700 to-il-green-600'>
              {user.handle}
            </span>
          </p>
          <div>
            <div className='mb-6'>
              <UserDetail user={user} />
            </div>
            <div className='mb-6'>
              <UserBounties user={user} type='type1' />
            </div>
            <div className='mb-6'>
              <UserBounties user={user} type='posted' />
            </div>
            <div className='mb-6'>
              <LensModule address={user.address} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
