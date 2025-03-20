import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '140px' }}>Ooooops....</h1>
      <h2 style={{ textAlign: 'center', marginTop: '80px' }}>That page cannot be found</h2>
      <p
        style={{ textAlign: 'center', marginTop: '50px', fontSize: '20px', marginBottom: '242px' }}
      >
        Go back to the{' '}
        <Link style={{ color: 'blue', textDecoration: 'none', fontSize: '20px' }} href="/">
          Homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
