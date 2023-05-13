import { useContext } from 'react';
import MessagingContext from '../context/messging';

function ContactButton({ userAddress, userHandle }: { userAddress: string; userHandle: string }) {
  const { handleMessageUser } = useContext(MessagingContext);

  return (
    <button
      className='border border-il-green-800 text-il-green-800 bg-il-lightgreen-200 hover:bg-il-green-main duration-100 px-5 py-2 rounded-lg'
      onClick={() => {
        handleMessageUser(userAddress);
      }}>
      Contact {userHandle}
    </button>
  );
}

export default ContactButton;
