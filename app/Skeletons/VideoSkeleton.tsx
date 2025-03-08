'use client';

import React from 'react';

const VideoCardSkeleton = () => {
  return (
    <div className='mx-5 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch'>
      {[...Array(3)].map((_, index) => (
        <div key={index} className='flex flex-col gap-7 animate-pulse'>
          <div className='w-full h-[300px] bg-gray-300 rounded-tl-3xl'></div>
          <div className='flex flex-col gap-2'>
            <div className='h-6 bg-gray-300 rounded w-3/4'></div>
            <div className='h-4 bg-gray-300 rounded w-1/2'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCardSkeleton;
