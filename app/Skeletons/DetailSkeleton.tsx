'use client';
import React from 'react';
const DetailSkeleton = () => {
    return (
        <div className='block bg-red-500 lg:flex lg:gap-10 mx-5 my-20 w-[calc(100%-2.5rem-10px)] h-screen'>
            <div className='p-5 lg:w-1/2 flex justify-center'>
                <div className='w-[650px] h-[650px] bg-gray-300 animate-pulse'></div>
            </div>
            <div className='flex flex-col gap-5 py-10 lg:w-1/2'>
                <div className='h-16 bg-gray-300 rounded animate-pulse'></div>
                <div className='h-28 bg-gray-300 rounded animate-pulse'></div>
                <div className='h-20 bg-gray-300 rounded animate-pulse'></div>
                <div className='flex flex-col gap-7'>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className='flex gap-3 items-center'>
                            <div className='w-16 h-16 bg-gray-300 rounded-full animate-pulse'></div>
                            <div className='w-32 h-8 bg-gray-300 rounded animate-pulse'></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailSkeleton;