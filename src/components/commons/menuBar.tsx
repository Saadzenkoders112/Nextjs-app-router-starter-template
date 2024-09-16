'use client';
import { SheetContent } from '@/components/ui/sheet';

import {
  ArrowRightLeft,
  BadgeHelp,
  Building,
  Building2,
  ChevronLeft,
  CircleUser,
  LayoutDashboard,
  MessageCircle,
  WalletCards,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';

const MenuBar = () => {
  const [active, setActive] = useState('dashboard');
  const [tradingAccordion, setAccordion] = useState(false);
  return (
    <SheetContent className='bg-white w-max'>
      <div className={`flex justify-center mb-5`}>
        <Image
          src='/assets/images/logo.png'
          alt=''
          width={80}
          height={80}
        />
      </div>
      <ul className='p-2 text-slate-500 mt-10'>
        <Link href={'/'}>
          <li
            className={`sidebar_li ${active == 'dashboard' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('dashboard')}
          >
            <LayoutDashboard className='h-4 w-4' />
            <p>Dashboard</p>
          </li>
        </Link>
        <li
          className={`sidebar_li ${active == 'e-wallet' ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => setActive('e-wallet')}
        >
          <WalletCards className='h-4 w-4' />
          <p>E-Wallet</p>
        </li>
        <Link href='transactions'>
          <li
            className={`sidebar_li ${active == 'transaction' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('transaction')}
          >
            <ArrowRightLeft className='h-4 w-4' />
            <p>Transactions</p>
          </li>
        </Link>
        <li
          className={`sidebar_li ${active == 'trading' ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => setActive('trading')}
        >
          <div className='flex justify-between w-full items-center'>
            <div className='flex gap-2 items-center'>
              <Building2 className='h-4 w-4' />
              <p>Trading</p>
            </div>
            <ChevronLeft
              onClick={() => setAccordion(!tradingAccordion)}
              className={`h-4 w-4 duration-200 z-10 ${tradingAccordion ? 'rotate-90' : '-rotate-90'}`}
            />
          </div>
        </li>
        <li
          className={`rounded-lg p-2 mb-1 items-center gap-1 cursor-pointer  ml-5 ${tradingAccordion ? 'flex duration-200' : 'hidden'}`}
        >
          <p className='cursor-pointer hover:bg-slate-200 duration-200 p-1 rounded-lg w-full'>
            P2P
          </p>
        </li>
        <li
          className={`sidebar_li ${active == 'tidal-pools' ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => setActive('tidal-pools')}
        >
          <Building className='h-4 w-4' />
          <p>Tidal Pools</p>
        </li>
        <li
          className={`sidebar_li ${active == 'market' ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => setActive('market')}
        >
          <Building className='h-4 w-4' />
          <p>Market Performance</p>
        </li>
        <li
          className={`sidebar_li ${active == 'contacts' ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => setActive('contacts')}
        >
          <CircleUser className='h-4 w-4' />
          <p>Contacts</p>
        </li>
        <li
          className={`sidebar_li ${active == 'messages' ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => setActive('messages')}
        >
          <MessageCircle className='h-4 w-4' />
          <p>Messages</p>
        </li>
        <Link href='/support'>
          <li
            className={`sidebar_li ${active == 'support' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('support')}
          >
            <BadgeHelp className='h-4 w-4' />
            <p>Support</p>
          </li>
        </Link>
      </ul>
    </SheetContent>
  );
};

export default MenuBar;
