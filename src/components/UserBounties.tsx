import useServices from '../hooks/useServices';
import { IUser } from '../types';
import UserBountyItem from './UserBountyItem';

interface IProps {
  user: IUser;
  type: 'type1' | 'posted';
}

function UserServices({ user, type }: IProps) {
  const { services } = useServices(
    undefined,
    type == 'type1' ? user.id : undefined,
    type == 'posted' ? user.id : undefined,
  );

  if (services.length === 0) {
    return null;
  }

  return (
    <>
      <h2 className='mb-6 pb-4 border-b border-gray-gray-200 text-gray-900 font-medium break-all'>
        {type == 'type1' ? 'Bounties' : 'Bounties Posted'}
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {services.map((service, i) => {
          return <UserBountyItem user={user} service={service} key={i} />;
        })}
      </div>

      {services.length === 20 && (
        <a
          href='#'
          className='px-5 py-2  border border-indigo-600 rounded-full text-indigo-600 hover:text-white hover:bg-indigo-700'>
          Load More
        </a>
      )}
    </>
  );
}

export default UserServices;
