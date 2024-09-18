import React from 'react';
import { Skeleton } from '../ui/skeleton';

const SupportSkeleton = () => {
  return (
    <div className='p-4 bg-slate-100 h-screen'>
      <div className=' h-full p-4 grid grid-cols-3 gap-2'>
        <div className='w-full bg-white rounded-lg flex flex-col p-2 gap-2 col-span-2'>
          <Skeleton className='w-20 h-12 bg-gray-100' />
          <div className='flex flex-col gap-2'>
            <Skeleton className='w-full h-12 bg-gray-100' />
            <Skeleton className='w-full h-12 bg-gray-100' />
            <Skeleton className='w-full h-12 bg-gray-100' />
          </div>
        </div>
        <div className=' bg-white rounded-lg flex flex-col h-full'>
          <div className='p-2'>
            <Skeleton className='h-12 w-full pb-2 bg-gray-100' />
          </div>
          <hr />
          <div className='h-full flex flex-col justify-end'>
            <div className='flex flex-col gap-2 p-2'>
              <Skeleton className='h-8 w-full bg-gray-100' />
              <Skeleton className='h-8 w-full bg-gray-100' />
              <Skeleton className='h-8 w-full bg-gray-100' />
            </div>
            <div className='p-2 flex gap-2'>
              <Skeleton className='w-full h-12 bg-gray-100' />
              <Skeleton className='h-12 bg-gray-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSkeleton;
