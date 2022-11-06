import useServices from '../hooks/useServices';
import { User } from '../types';
import UserServiceItem from './UserServiceItem';

interface IProps {
  user: User;
  type: 'buyer' | 'seller';
}

function UserServices({ user, type }: IProps) {
  const services = useServices(
    undefined,
    type == 'buyer' ? user.id : undefined,
    type == 'seller' ? user.id : undefined,
  );

  if (services.length === 0) {
    return null;
  }

  return (
    <>
      <h2 className='mb-6 pb-4 border-b border-gray-gray-200 text-gray-900 font-medium'>
        {type == 'buyer' ? 'Jobs you posted' : 'Jobs you applied'}
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {services.map((service, i) => {
          return <UserServiceItem service={service} key={i} />;
        })}
      </div>

      {services.length === 20 && (
        <a
          href='#'
          className='px-5 py-2  border border-indigo-600 rounded-full text-indigo-600 hover:text-white hover:bg-indigo-600'>
          Load More
        </a>
      )}
    </>
  );
}

export default UserServices;
