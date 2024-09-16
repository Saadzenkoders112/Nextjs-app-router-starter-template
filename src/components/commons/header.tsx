'use client';

import { Bell, Menu, Moon, Search, UserRound } from 'lucide-react';
import React from 'react';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import MenuBar from './menuBar';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname().split('/')[1].toUpperCase();

  return (
    <>
      <div className='flex justify-between items-center p-4'>
        <div className='text-2xl font-semibold'>{pathName}</div>
        <div className='flex justify-end w-full gap-3 items-center'>
          <div className='sm:flex hidden items-center border border-slate-300 bg-slate-100 rounded-xl p-1 w-[200px]'>
            <input
              className='focus:outline-none bg-slate-100 text-xs p-1 w-full'
              type='text'
              placeholder='Search here...'
            />
            <Search className='h-4 w-4 text-slate-500' />
          </div>
          <Moon className='h-5 w-5 text-slate-500' />
          <Bell className='h-5 w-5 text-slate-500' />
          <UserRound className='h-5 w-5 text-slate-500' />
        </div>
        <div className='sm:hidden block'>
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <Menu className='h-3 w-3' />
              </Button>
            </SheetTrigger>
            <MenuBar />
          </Sheet>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='sm:hidden flex items-center border border-slate-300 bg-slate-100 rounded-xl p-1 w-4/5'>
          <input
            className='focus:outline-none bg-slate-100 text-xs p-1 w-full'
            type='text'
            placeholder='Search here...'
          />
          <Search className='h-4 w-4 text-slate-500' />
        </div>
      </div>
    </>
  );
};

export default Header;
