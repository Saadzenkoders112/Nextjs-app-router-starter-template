import { SendHorizontal, User } from 'lucide-react';
import React from 'react';

const conversation = [
    {
      sender: 'Alice',
      message: 'Hey, are you coming to the meeting later today?',
      timestamp: '2024-09-16 10:15 AM',
    },
    {
      sender: 'Bob',
      message: 'Yes, I’ll be there. What time does it start?',
      timestamp: '2024-09-16 10:17 AM',
    },
    {
      sender: 'Alice',
      message:
        'It’s scheduled for 3 PM. Don’t forget to bring the project report!',
      timestamp: '2024-09-16 10:18 AM',
    },
    {
      sender: 'Bob',
      message: 'Got it! I’ll make sure to bring everything.',
      timestamp: '2024-09-16 10:19 AM',
    },
    {
      sender: 'Alice',
      message: 'Great! See you there.',
      timestamp: '2024-09-16 10:20 AM',
    },
  ];

const Chat = () => {
  return (
    <div className='p-4 xl:border border-slate-300 rounded-lg bg-white flex flex-col justify-between'>
      <p className='text-xl font-semibold border-b border-b-slate-300 pb-2'>Ask anything</p>
      <div className='flex flex-col justify-end h-full'>
        {conversation?.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-2 items-center rounded-lg p-2 w-full ${index % 2 == 0 ? 'justify-start flex-row-reverse' : ''}`}
          >
            <div className='rounded-full border border-slate-300 p-2'>
              {' '}
              <User className='h-4 w-4' />
            </div>
            <p
              className={`border p-2 rounded-lg ${index % 2 == 0 ? 'bg-blue-900 text-white' : ''}`}
            >
              {msg.message}
            </p>
          </div>
        ))}
      </div>
      <form>
        <div className='p-2 border border-slate-300 rounded-lg flex items-center'>
          <input
            className='text-sm focus:outline-none w-full'
            type='text'
            placeholder='Write message...'
          />
          <SendHorizontal className='h-5 w-5 text-blue-500 cursor-pointer' />
        </div>
      </form>
    </div>
  );
};

export default Chat;
