import { useContext } from 'react';
import TalentLayerContext from '../../context/talentLayer';
import SearchForm from '../Form/SearchForm';

function CreateId() {
  const { user } = useContext(TalentLayerContext);

  if (user) {
    return null;
  }

  return (
    <>
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0 py-20'>
          <div className='flex flex-col items-center justify-center gap-10'>
            <p className='text-5xl sm:text-5xl font-medium tracking-wider text-center'>
              Lorem <span className="bg-clip-text text-transparent bg-gradient-to-r from-il-green-700 to-il-green-600"> InfluLenser </span> ipsum...
            </p>

            <p className='text-gray-500 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <SearchForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateId;
