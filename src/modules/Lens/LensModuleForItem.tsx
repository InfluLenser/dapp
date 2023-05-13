import UserLensFeed from '../../modules/Lens/components/UserLensFeed';
import UserLensProfile from '../../modules/Lens/components/UserLensProfile';
import useLensUser from './hooks/useLensUsers';
import { IService } from '../../types';

interface IProps {
  address: string;
}

function LensModuleForItem({ service }: { service: IService }) {
  const address = service.buyer.address;
  const { lensUser } = useLensUser(address);

  if (!lensUser?.id) {
    return null;
  }

  return (
    <div>
      <b className="bg-clip-text text-transparent bg-gradient-to-r from-il-green-700 to-il-green-600">@{lensUser?.handle}</b> on Lens
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4">
            <b>{lensUser?.stats.totalFollowers}</b>
            <p>Followers</p>
          </div>
          <div className="p-4">
            <b>{lensUser?.stats.totalFollowing}</b>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LensModuleForItem;
