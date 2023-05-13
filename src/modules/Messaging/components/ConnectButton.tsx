import { useContext } from 'react';
import MessagingContext from '../context/messging';

function ConnectButton() {
  const { handleRegisterToMessaging } = useContext(MessagingContext);

  return (
    <button
      type='submit'
      className='bg-il-green-600 hover:bg-il-green-700 text-white font-bold py-2 px-4 rounded duration-100'
      onClick={() => handleRegisterToMessaging()}>
      Connect to XMTP
    </button>
  );
}

export default ConnectButton;
