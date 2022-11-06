import { useAccount, useNetwork, useProvider, useSigner } from '@web3modal/react';
import { ethers } from 'ethers';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { getUserByAddress } from '../services/queries';
import { Account, User } from '../types';

const TalentLayerContext = createContext<{
  user?: User;
  account?: Account;
  signer?: ethers.Signer;
  provider?: ethers.providers.Provider;
}>({
  user: undefined,
  account: undefined,
  signer: undefined,
});

const TalentLayerProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();
  const { account } = useAccount();
  const { data: signer, refetch: refetchSigner } = useSigner();
  const { provider, isReady: providerIsReady } = useProvider();
  const { network, isReady: networkIsReady } = useNetwork();

  useEffect(() => {
    (async () => {
      if (networkIsReady === true) {
        // refetch signer when network is ready else it will throw an error on each tx
        await refetchSigner();
      }
    })();
  }, [networkIsReady, providerIsReady, network?.chain?.id]);

  useEffect(() => {
    const fetchData = async () => {
      if (account.address === '' || account?.isConnected !== true) {
        return;
      }

      try {
        const response = await getUserByAddress(account.address);
        if (response?.data?.data?.users[0] !== null) {
          setUser(response.data.data.users[0]);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [account.address, account.isConnected]);

  const value = useMemo(() => {
    return {
      user,
      account,
      signer,
      provider,
    };
  }, [account.address, user?.id, signer]);

  return <TalentLayerContext.Provider value={value}>{children}</TalentLayerContext.Provider>;
};

export { TalentLayerProvider };

export default TalentLayerContext;
