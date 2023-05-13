import Link from 'next/link';

function Logo() {
  return (
    <h1 className='text-2xl text-white'>
      <Link href='/'>
      <img
          className=' rounded-full'
          alt=''
          src={'/images/logo-ln.webp'}      
        />
      </Link>
    </h1>
  );
}

export default Logo;


