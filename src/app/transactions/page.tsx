'use client';

import React, { useState } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Dialog, DialogTrigger } from '@/components/ui/dialog';

import { ChevronLeft, CircleUserRound, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import TransactionModal from '@/components/modal/transactionModal';
import Image from 'next/image';
import { Invoices } from '@/types/Interfaces/Transaction Interfaces/transaction.interface';

const INVOICES = [
  {
    TO: 'Hank',
    TRANSACTION: 3218,
    DATE: '2023-05-07',
    TIME: '10:32:41',
    COIN: {
      name: 'Cardano',
      img: '/assets/images/cardano.png',
    },
    AMOUNT: 1.8368,
    STATUS: 'Completed',
  },
  {
    TO: 'Grace',
    TRANSACTION: 3379,
    DATE: '2024-05-01',
    TIME: '14:53:25',
    COIN: {
      name: 'Etherium',
      img: '/assets/images/etherium.png',
    },
    AMOUNT: 2.1317,
    STATUS: 'Completed',
  },
  {
    TO: 'Jack',
    TRANSACTION: 6505,
    DATE: '2023-10-06',
    TIME: '15:15:57',
    COIN: {
      name: 'Ripple',
      img: '/assets/images/ripple.png',
    },
    AMOUNT: 2.5144,
    STATUS: 'Completed',
  },
  {
    TO: 'Charlie',
    TRANSACTION: 8922,
    DATE: '2023-10-11',
    TIME: '11:50:56',
    COIN: {
      name: 'Cardano',
      img: '/assets/images/cardano.png',
    },
    AMOUNT: 3.8668,
    STATUS: 'Completed',
  },
  {
    TO: 'Eve',
    TRANSACTION: 8493,
    DATE: '2024-02-08',
    TIME: '00:27:19',
    COIN: {
      name: 'Etherium',
      img: '/assets/images/etherium.png',
    },
    AMOUNT: 2.3663,
    STATUS: 'Completed',
  },
  {
    TO: 'Alice',
    TRANSACTION: 1973,
    DATE: '2023-03-17',
    TIME: '20:32:05',
    COIN: {
      name: 'Etherium',
      img: '/assets/images/etherium.png',
    },
    AMOUNT: 2.7583,
    STATUS: 'Completed',
  },
  {
    TO: 'Alice',
    TRANSACTION: 6580,
    DATE: '2024-05-02',
    TIME: '10:20:06',
    COIN: {
      name: 'Ripple',
      img: '/assets/images/ripple.png',
    },
    AMOUNT: 0.0743,
    STATUS: 'Cancelled',
  },
  {
    TO: 'Frank',
    TRANSACTION: 1605,
    DATE: '2023-08-31',
    TIME: '19:29:56',
    COIN: {
      name: 'Etherium',
      img: '/assets/images/etherium.png',
    },
    AMOUNT: 2.8605,
    STATUS: 'Cancelled',
  },
  {
    TO: 'Charlie',
    TRANSACTION: 7980,
    DATE: '2024-07-01',
    TIME: '03:04:15',
    COIN: {
      name: 'Ripple',
      img: '/assets/images/ripple.png',
    },
    AMOUNT: 2.7233,
    STATUS: 'Cancelled',
  },
  {
    TO: 'Hank',
    TRANSACTION: 4005,
    DATE: '2023-07-24',
    TIME: '16:05:08',
    COIN: {
      name: 'Ripple',
      img: '/assets/images/ripple.png',
    },
    AMOUNT: 1.5393,
    STATUS: 'Cancelled',
  },
];

const Transaction = () => {
  const [date, setDate] = useState<Date>();
  const [coin, setCoin] = useState<boolean>(true);
  const [status, setStatus] = useState<boolean>(true);
  const [invoices, setInvoices] = useState<Invoices[]>(INVOICES);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className='bg-slate-100 p-4'>
      <div className='bg-white border border-slate-300 rounded-lg relative'>
        {/* FILTER DIV */}
        <div className='flex justify-between flex-wrap items-center p-2 h-20'>
          <div className='flex items-center gap-4 text-slate-500'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[120px] flex gap-2 font-normal',
                    !date && 'text-muted-foreground',
                  )}
                >
                  {date ? format(date, 'PPP') : <span>Date</span>}
                  <CalendarIcon className='mr-2 h-4 w-4' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0 z-10 bg-white'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <div className='flex relative justify-center items-center gap-2 border border-slate-200 p-1 h-[40px] w-[120px] rounded-lg'>
              <p>Coin</p>
              <ChevronLeft
                onClick={() => setCoin(!coin)}
                className='h-4 w-4 -rotate-90 cursor-pointer'
              />
              <div
                className={`absolute ${coin ? 'hidden' : ''} text-sm top-10 border border-slate-200 bg-white p-1 z-10 w-[120px] shadow-2xl`}
              >
                <ul>
                  <li className='p-1 cursor-pointer hover:bg-slate-100 duration-200'>
                    Cardano
                  </li>
                  <li className='p-1 cursor-pointer hover:bg-slate-100 duration-200'>
                    Etherium
                  </li>
                  <li className='p-1 cursor-pointer hover:bg-slate-100 duration-200'>
                    Ripple
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex relative justify-center items-center gap-2 border border-slate-200 p-1 h-[40px] w-[120px] rounded-lg'>
              <p>Status</p>
              <ChevronLeft
                onClick={() => setStatus(!status)}
                className='h-4 w-4 -rotate-90 cursor-pointer'
              />
              <div
                className={`absolute ${status ? 'hidden' : ''} text-sm top-10 border border-slate-200 bg-white p-1 z-10 w-[120px] shadow-2xl`}
              >
                <ul>
                  <li className='p-1 cursor-pointer hover:bg-slate-100 duration-200'>
                    Completed
                  </li>
                  <li className='p-1 cursor-pointer hover:bg-slate-100 duration-200'>
                    Cancelled
                  </li>
                  <li className='p-1 cursor-pointer hover:bg-slate-100 duration-200'>
                    Pending
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger
              className='md:block hidden'
              asChild
            >
              <Button className=' p-1 rounded-lg text-white bg-blue-900 text-sm pr-2 pl-2 cursor-pointer'>
                Create Transaction
              </Button>
            </DialogTrigger>
            <DialogTrigger
              className='md:hidden block'
              asChild
            >
              <Button className='z-10 bottom-10 right-10 fixed p-2 shadow-2xl text-blue-900 border border-slate-300 rounded-full bg-white text-sm pr-2 pl-2 cursor-pointer'>
                <Plus className='h-6 w-6 cursor-pointer' />
              </Button>
            </DialogTrigger>
            <TransactionModal closeDialog={() => setIsDialogOpen(false)} setInvoices={setInvoices} />
          </Dialog>
        </div>
        <Table>
          <TableCaption>A list of your recent Tos.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>To</TableHead>
              <TableHead>TRANSACTION_ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Coin</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices?.map(To => (
              <TableRow key={To.TO}>
                <TableCell className='font-medium flex items-center gap-2'>
                  <span>
                    <CircleUserRound className='h-6 w-6 text-slate-400' />
                  </span>
                  <div>{To.TO}</div>
                </TableCell>
                <TableCell>{To.TRANSACTION}</TableCell>
                <TableCell>{To.DATE}</TableCell>
                <TableCell>{To.TIME}</TableCell>
                <TableCell className='flex items-center gap-2'>
                  <Image
                    src={To.COIN.img}
                    alt='coin_img'
                    height={20}
                    width={20}
                  />
                  <p>{To.COIN.name}</p>
                </TableCell>
                <TableCell>{To.AMOUNT}</TableCell>
                <TableCell>
                  <div
                    className={`border rounded-lg p-1 pt-2 pb-2 text-center font-semibold ${To.STATUS === 'Completed' ? 'border-green-500 text-green-500 bg-green-100' : To.STATUS === 'Cancelled' ? 'border-red-500 text-red-500 bg-red-100' : To.STATUS === 'Pending' ? 'border-yellow-500 text-yellow-500 bg-yellow-100' : ''}`}
                  >
                    {To.STATUS}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Transaction;
