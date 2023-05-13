import { Menu } from '@headlessui/react';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import TalentLayerContext from '../context/talentLayer';

function ProfileSubMenu({
  setData,
}: {
  setData: Dispatch<SetStateAction<{ handle: string; address: string; id: string }>>;
}) {
  const { user } = useContext(TalentLayerContext);

  const setBossProfileData = () => {
    setData({
      handle: 'TheBoss',
      address: '0x9F89836C22f250595DEA30327af026bA1c029f28',
      id: '1',
    });
  };
  const setNounsProfileData = () => {
    setData({
      handle: 'NounsDao',
      address: '0x1ea68C3A0e1F328343fFF5f16528B297DEa4E4dB',
      id: '2',
    });
  };
  return (
    <>
      <Menu.Item key='1'>
        {({ active }) => (
          <button
            onClick={() => setBossProfileData()}
            className={`block px-4 py-2 text-sm text-gray-700' ${active ? 'bg-gray-100' : ''}`}>
            Use the-boss profile
          </button>
        )}
      </Menu.Item>
      <Menu.Item key='2'>
        {({ active }) => (
          <button
            onClick={() => {
              setNounsProfileData();
            }}
            className={`block px-4 border-b border-gray-400 py-2 text-sm text-gray-700' ${
              active ? 'bg-gray-100' : ''
            }`}>
            Use NounsDao profile
          </button>
        )}
      </Menu.Item>
    </>
  );
}

export default ProfileSubMenu;
