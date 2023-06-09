import { useContext } from 'react';
import Back from '../../components/Back';
import Loading from '../../components/Loading';
import UserIncomes from '../../components/UserIncomes';
import TalentLayerContext from '../../context/talentLayer';

function Incomes() {
  const { user } = useContext(TalentLayerContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className='max-w-7xl mx-auto text-gray-900 sm:px-4 lg:px-0'>
      <Back />
      <p className='text-5xl font-medium tracking-wider mb-8'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-il-green-700 to-il-green-600'>{user?.handle}</span>'s incomes summary
      </p>
      <div>
        <div className='mb-6'>{user?.id && <UserIncomes id={user.id} />}</div>
      </div>
    </div>
  );
}

export default Incomes;
