import Image from 'next/image';
import Link from 'next/link';
import { IService, IUser, ServiceStatusEnum } from '../types';
import { formatDate } from '../utils/dates';
import ServiceStatus from './ServiceStatus';
import { useState } from 'react';
import PostModal from './Modal/PostModal';

function UserServiceItem({ user, service }: { user: IUser; service: IService }) {
  const isBuyer = user?.id === service.buyer.id;

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className='flex flex-row gap-2 rounded-xl p-4 border border-gray-200'>
        <div className='flex flex-col items-top justify-between gap-4 w-full'>
          <div className='flex flex-col justify-start items-start gap-4 relative'>
            <div className='flex items-center justify-start'>
              <Image
                src={`/images/default-avatar-${Number(service.buyer.id) % 11}.jpeg`}
                className='w-10 mr-4 rounded-full'
                width={50}
                height={50}
                alt='default avatar'
              />
              <div className='flex flex-col'>
                <p className='text-gray-900 font-medium break-all'>{service.description?.title}</p>
                <p className='text-xs text-gray-500'>
                  created by {service.buyer.handle} the{' '}
                  {formatDate(Number(service.createdAt) * 1000)}
                </p>
              </div>
              <span className='absolute right-0 inline-flex items-center'>
                <ServiceStatus status={service.status} />
              </span>
            </div>

            <div className=' border-t border-gray-100 pt-4'>
              <p className='text-sm text-gray-500 line-clamp-1'>
                <strong>About:</strong> {service.description?.about}
              </p>
            </div>
          </div>

          <div className='flex flex-row gap-6 justify-between items-center border-t border-gray-100 pt-4'>
            <Link
              className='flex-1 text-center border
            border-il-green-800
            text-il-green-800
            bg-il-lightgreen-200
            hover:bg-il-green-main
            duration-100 px-5 py-2 rounded-lg'
              href={`/services/${service.id}`}>
              Show details
              {isBuyer && service.status == ServiceStatusEnum.Opened && (
                <div className='inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-indigo-700 rounded-full border-2 border-white'>
                  {service.proposals.length}
                </div>
              )}
            </Link>

            <PostModal />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserServiceItem;
