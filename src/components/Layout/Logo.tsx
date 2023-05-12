import Link from 'next/link';

function Logo() {
  return (
    <h1 className='text-2xl text-il-green-600'>
      <Link href='/'>
        Influ<span className='text-il-green-900'>Lenser</span>
      </Link>
    </h1>
  );
}

export default Logo;
