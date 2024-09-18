'use client';

import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { MessageCircleMore } from 'lucide-react';
import Chat from '@/components/modal/chatModal';
import SupportSkeleton from '@/components/Loading Skeleton/supportSkeleton';

const Support = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <SupportSkeleton />
      ) : (
        <div className='grid grid-cols-3 gap-4 p-4 bg-slate-100 h-full relative'>
          {/* FAQ DIV */}
          <div className='p-4 border border-slate-300 rounded-lg bg-white xl:col-span-2 col-span-3'>
            <p className='text-3xl'>FAQ</p>
            <Accordion
              type='single'
              collapsible
              className='w-full'
            >
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  How do i signup for Evntide?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda quidem, consequatur nesciunt voluptatem eligendi
                  nisi maiores repellat! Laborum, a eaque.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>
                  How do i navigate the Evntide dashboard?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat, odit? Veniam, voluptatum. Nobis molestiae tenetur
                  nam velit earum libero ratione?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>
                  How do add my crypto exchanges to Evntide?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minus dolore earum rerum qui impedit repellat perspiciatis
                  iste veniam in fugiat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger>
                  Does Evntide allow me to trade cryptocurrencies directly?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minus dolore earum rerum qui impedit repellat perspiciatis
                  iste veniam in fugiat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-5'>
                <AccordionTrigger>
                  Can i see my order history on Evntide?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minus dolore earum rerum qui impedit repellat perspiciatis
                  iste veniam in fugiat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-6'>
                <AccordionTrigger>
                  How do i analyze my trading performance on Evntide?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minus dolore earum rerum qui impedit repellat perspiciatis
                  iste veniam in fugiat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-7'>
                <AccordionTrigger>
                  How does Evntide protect my account?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minus dolore earum rerum qui impedit repellat perspiciatis
                  iste veniam in fugiat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* CHAT DIV */}
          <div className='xl:hidden block'>
            <Dialog>
              <DialogTrigger
                className='fixed bottom-10 right-10'
                asChild
              >
                <div className='border border-slate-300 shadow-2xl p-2 bg-white text-blue-900 rounded-full z-10'>
                  <MessageCircleMore className='h-6 w-6 cursor-pointer' />
                </div>
              </DialogTrigger>
              <DialogContent className='bg-white h-4/5'>
                <Chat />
              </DialogContent>
            </Dialog>
          </div>
          <div className='xl:flex hidden'>
            <Chat />
          </div>
        </div>
      )}
    </>
  );
};

export default Support;
