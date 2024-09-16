'use client';

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

const Sidebar = () => {
  const [active, setActive] = useState('/');
  const [collapse, setCollapse] = useState(false);
  const [tradingAccordion, setAccordion] = useState(false);

  console.log(tradingAccordion);
  return (
    <div
      className={`duration-300 md:block hidden h-screen ${collapse ? 'w-max' : 'w-[300px]'} relative`}
    >
      <div className={`flex justify-center mb-5 ${collapse ? 'hidden' : ''}`}>
        <Image
          src='/assets/images/logo.png'
          alt=''
          width={80}
          height={80}
        />
      </div>
      <ul className={`p-2 text-slate-500 ${collapse ? 'mt-20' : ''}`}>
        <Link href={'/'}>
          <li
            className={`sidebar_li ${active == 'dashboard' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('dashboard')}
          >
            <LayoutDashboard className='h-4 w-4' />
            <p className={collapse ? 'hidden' : ''}>Dashboard</p>
          </li>
        </Link>
        <Link href={'/e-wallet'}>
          <li
            className={`sidebar_li ${active == 'e-wallet' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('e-wallet')}
          >
            <WalletCards className='h-4 w-4' />
            <p className={collapse ? 'hidden' : ''}>E-Wallet</p>
          </li>
        </Link>
        <Link href={'/transactions'}>
          <li
            className={`sidebar_li ${active == 'transaction' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('transaction')}
          >
            <ArrowRightLeft className='h-4 w-4' />
            <p className={collapse ? 'hidden' : ''}>Transactions</p>
          </li>
        </Link>

        <li
          className={`sidebar_li ${active == 'trading' ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => setActive('trading')}
        >
          <div className='flex justify-between w-full items-center'>
            <div className='flex gap-2 items-center'>
              <Building2 className='h-4 w-4' />
              <p className={collapse ? 'hidden' : ''}>Trading</p>
            </div>
            <ChevronLeft
              onClick={() => setAccordion(!tradingAccordion)}
              className={`h-4 w-4 duration-200 ${collapse ? 'hidden' : ''} z-10 ${tradingAccordion ? 'rotate-90' : '-rotate-90'}`}
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
        <Link href={'tidap-pools'}>
          <li
            className={`sidebar_li ${active == 'tidal-pools' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('tidal-pools')}
          >
            <Building className='h-4 w-4' />
            <p className={collapse ? 'hidden' : ''}>Tidal Pools</p>
          </li>
        </Link>
        <Link href={'market'}>
          <li
            className={`sidebar_li ${active == 'market' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('market')}
          >
            <Building className='h-4 w-4' />
            <p className={collapse ? 'hidden' : ''}>Market Performance</p>
          </li>
        </Link>
        <Link href={'contacts'}>
          <li
            className={`sidebar_li ${active == 'contacts' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('contacts')}
          >
            <CircleUser className='h-4 w-4' />
            <p className={collapse ? 'hidden' : ''}>Contacts</p>
          </li>
        </Link>
        <Link href={'messages'}>
          <li
            className={`sidebar_li ${active == 'messages' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('messages')}
          >
            <MessageCircle className='h-4 w-4' />
            <p className={collapse ? 'hidden' : ''}>Messages</p>
          </li>
        </Link>
        <Link href={'support'}>
          <li
            className={`sidebar_li ${active == 'support' ? 'bg-blue-900 text-white' : ''}`}
            onClick={() => setActive('support')}
          >
            <BadgeHelp className='h-4 w-4' />
            <p className={collapse ? 'hidden' : ''}>Support</p>
          </li>
        </Link>
      </ul>
      <div
        onClick={() => setCollapse(!collapse)}
        className={`p-1 rounded-full border boder-slate-700 absolute bottom-10 -right-4 bg-white z-10 text-gray-700 cursor-pointer ${collapse ? 'rotate-180 duration-500' : 'rotate-0 duration-500'}`}
      >
        <ChevronLeft className='h-6 w-6' />
      </div>
    </div>
  );
};

export default Sidebar;
