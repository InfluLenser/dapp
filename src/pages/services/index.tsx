import { useRouter } from 'next/router';
import SearchServiceButton from '../../components/Form/SearchServiceButton';
import Loading from '../../components/Loading';
import ServiceItem from '../../components/ServiceItem';
import useServices from '../../hooks/useServices';
import { IService, ServiceStatusEnum } from '../../types';

function Services() {
  const PAGE_SIZE = 30;
  const router = useRouter();
  const query = router.query;
  const searchQuery = query.search as string;
  const { hasMoreData, services, loading, loadMore } = useServices(
    ServiceStatusEnum.Opened,
    undefined,
    undefined,
    searchQuery?.toLocaleLowerCase(),
    PAGE_SIZE,
  );

  return (
    <div className='max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0'>
      <p className='text-5xl font-medium tracking-wider mb-8'>
        All <span className='bg-clip-text text-transparent bg-gradient-to-r from-il-green-700 to-il-green-600'>Sponsorship Opportunities </span>
      </p>
      <p className='text-2xl font-medium tracking-wider mb-8'>
      Ready for your next sponsored post gig? Earn money by posting about your favorite brands on Lens.
      </p>
      {searchQuery && services.length > 0 && (
        <p className='text-xl font-medium tracking-wider mb-8'>
          Search results for <span className='text-indigo-600'>{searchQuery}</span>
        </p>
      )}
      {searchQuery && services.length === 0 && (
        <p className='text-xl font-medium tracking-wider mb-8'>
          No search results for <span className='text-indigo-600'>{searchQuery}</span>
        </p>
      )}

      <div className='flex justify-center items-center gap-10 flex-col pb-5'>
        <SearchServiceButton value={searchQuery} />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {services.map((service: IService, i: number) => {
          return <ServiceItem service={service} key={i} />;
        })}
      </div>

      {services.length > 0 && hasMoreData && !loading && (
        <div className='flex justify-center items-center gap-10 flex-col pb-5'>
          <button
            type='submit'
            className={`px-5 py-2 mt-5 content-center border border-il-green-600 rounded-full text-il-green-700 hover:text-il-green-800 hover:bg-il-green-500 duration-100
            `}
            disabled={!hasMoreData}
            onClick={() => loadMore()}>
            Load More
          </button>
        </div>
      )}
      {loading && (
        <div className='flex justify-center items-center gap-10 flex-col pb-5 mt-5'>
          <Loading />
        </div>
      )}
      {!hasMoreData && !loading && (
        <div className='flex justify-center items-center gap-10 flex-col pb-5 mt-5'>
          <p>No more Services...</p>
        </div>
      )}
    </div>
  );
}

export default Services;
