import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const TableSkeleton = () => {

  return (
    <div className='p-4 bg-slate-100'>
      <div className='bg-white'>
        <div className='p-4 flex items-center justify-between'>
          <div className='ml-4 mt-2 h-12 rounded-xl flex gap-4 items-center'>
            <Skeleton className='w-[150px] bg-gray-100 h-12' />
            <Skeleton className='w-[170px] bg-gray-100 h-12' />
            <Skeleton className='w-[150px] bg-gray-100 h-12' />
          </div>
          <div className='flex mr-4'>
            <Skeleton className='w-[215px] bg-gray-100 h-12' />
          </div>
        </div>
        <div className='ml-4 mt-2 mr-4'>
          <div className=''>
            <Skeleton className='w-full h-10 flex gap-2 justify-center items-center'>
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[10%] bg-gray-100 h-8' />
            </Skeleton>
            <Skeleton className='w-full h-10 flex gap-2 justify-center items-center'>
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[15%] bg-gray-100 h-8' />
              <Skeleton className='w-[10%] bg-gray-100 h-8' />
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;