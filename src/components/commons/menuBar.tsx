'use client';
import { SheetContent } from '@/components/ui/sheet';

import {
  ArrowRightLeft,
  BadgeHelp,
  Building,
  Building2,
  CircleUser,
  LayoutDashboard,
  MessageCircle,
  WalletCards,
} from 'lucide-react';
import Link from 'next/link';

import React, { useState } from 'react';

const MenuBar = () => {
  const [active, setActive] = useState('dashboard');
  return (
    <SheetContent className='bg-white'>
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
          <Building2 className='h-4 w-4' />
          <p>Trading</p>
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
        <li
          className={`sidebar_li ${active == 'support' ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => setActive('support')}
        >
          <BadgeHelp className='h-4 w-4' />
          <p>Support</p>
        </li>
      </ul>
    </SheetContent>
  );
};

export default MenuBar;
