"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { getEventById } from '@/app/components/Dummy';




const EventDetailPage = (ctx:any) => {
  

  // const eventId = useParams();
 const event = getEventById(ctx.params.id)
  console.log(ctx.params.id)

  return (
    <div className='bg-gray-100 '>
      <div className='w-[100%] h-[150px] bg-gradient-to-l from-[#24d6dc] to-[#34c8b5] absolute'>
      <h2 className='text-white text-[28px] text-center py-6'>{event?.title}</h2>
      <div className='w-[650px] h-[270px] bg-slate-800 relative rounded-lg mx-auto pt-2 '>
        <div className='flex'>
        <img src={event?.image} alt={event?.title} className='border border-white rounded-full w-44 h-44 object-cover rounded-t-full my-6 mx-7'/>
         <div className='mt-12'>
          <p className='text-[#1abfc6] font-semibold py-2'>Location:<br></br> {event?.location}</p>
           <br></br>
      
          <p className='text-[#1abfc6]  font-semibold'>Date:<br></br> {event?.dates}</p>

          </div>
      </div>
    
      </div>
      <p className='my-6 text-center w-[200]'>{event?.description}</p>
      </div>
      
      
      
      
      
    </div>
  );
};

export default EventDetailPage;
