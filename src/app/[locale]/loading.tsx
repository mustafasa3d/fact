import React from 'react';

import Image from 'next/image';

const Loading = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-[#FFF0F4]'>
      <Image src='/images/logo-loading.svg' alt='loading' width={290} height={230} />
    </div>
  );
};

export default Loading;
