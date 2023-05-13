import { useState, useEffect } from 'react';
import { getLensProfileInfo } from '../queries/lensProfileData';
import { IlensUser } from '../utils/types';

const useLensUser = (address: string): { lensUser: IlensUser | undefined } => {
  const [lensUser, setLensUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(address);
        const response = await getLensProfileInfo(address);
        console.log("Response", response);

        if (response?.data?.data?.defaultProfile) {
          setLensUser(response.data.data.defaultProfile);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [address]);

  return { lensUser };
};

export default useLensUser;
