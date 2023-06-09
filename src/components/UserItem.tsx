import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';
import useUserById from '../hooks/useUserById';
import { IUser } from '../types';
import Loading from './Loading';
import Stars from './Stars';
import useLensUser from '../modules/Lens/hooks/useLensUsers';
import LensModuleForItem from '../modules/Lens/LensModuleForItem';

function UserItem({ user }: { user: IUser }) {
  const { user: currentUser } = useContext(TalentLayerContext);
  const userDescription = user?.id ? useUserById(user?.id)?.description : null;
  const { lensUser } = useLensUser(user.address);

  if (!user?.id) {
    return <Loading />;
  }

  return (
    <>
      {lensUser && (
        <div className='flex flex-row gap-2 rounded-xl p-4 border border-gray-200'>
          <div className='flex flex-col items-top justify-between w-full'>
            <div className='flex flex-col justify-start items-start gap-4'>
              <div className='flex items-center justify-start mb-4'>
                <Image
                  src={`/images/default-avatar-${Number(user?.id ? user.id : '1') % 11}.jpeg`}
                  className='w-10 mr-4 rounded-full'
                  width={50}
                  height={50}
                  alt='default avatar'
                />
                <div className='flex flex-col'>
                  <p className='text-gray-900 font-medium break-all'>
                    {lensUser.handle.substring(0, lensUser.handle.length - 4)}
                    lens
                  </p>
                  <p className='text-xs text-gray-500'>{userDescription?.title || '-'}</p>
                </div>
              </div>
            </div>
            <Stars rating={Number(user.rating)} numReviews={user.userStats.numReceivedReviews} />

            <div className='flex flex-row gap-4 justify-between items-center border-t border-gray-100 pt-4'>
              <LensModuleForItem address={user.address} />
            </div>

            <div className='flex flex-row gap-4 justify-end items-center'>
              <Link
                className='border border-il-green-800 text-il-green-800 bg-il-lightgreen-200 hover:bg-il-green-main duration-100 px-5 py-2 rounded-lg'
                href={`/profile/${user.id}`}>
                View profile
              </Link>
              {currentUser?.id === user.id && (
                <Link
                  className='px-5 py-2 border border-il-green-600 rounded-lg hover:text-il-green-600 hover:bg-white text-white bg-il-green-700'
                  href={`/profile/edit`}>
                  Edit profile
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserItem;
