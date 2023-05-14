import Link from 'next/link';

function Logo() {
  return (
    <h1 className='text-2xl text-white'>
      <Link href='/'>
      <img
          className='object-contain h-48 w-96'
          alt=''
          src={'/images/logo-sq.webp'}      
        />
      </Link>
    </h1>
  );
}

export default Logo;


