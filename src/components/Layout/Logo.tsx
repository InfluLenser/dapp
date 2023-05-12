import Link from 'next/link';

function Logo() {
  return (
    <h1 className='text-2xl text-il-green-600'>
      <Link href='/'>
<<<<<<< Updated upstream
        Influ<span className='text-il-green-900'>Lenser</span>
=======
      <img
          className=' rounded-full'
          alt=''
          src={'/images/logo-ln.webp'}      
        />
>>>>>>> Stashed changes
      </Link>
    </h1>
  );
}

export default Logo;


