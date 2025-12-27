import React from 'react'
import Hills from"./../assests/hill.jpg"
import Taj from"./../assests/taj mahal.jpg"
import Rome from"./../assests/roman.jpg"
import Falls from"./../assests/waterfall.jpg"
import  China  from"./../assests/china wall.jpg"
import Beach from"./../assests/beautiful-tropical-beach-sea-with-coconut-palm-tree.jpg"

export const Explore = () => {
  return (
    <div className='p-6 justify-around'>
      <h2 className='text-2xl front-semibold mb-4 text-center p-5'>
        Explore Moods
      </h2>
      <div >
    
      <div className='flex-1 w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full  '>
        <div className='hover:scale-105 transition  '>
          <img src={Hills} alt='hill' className='w-full h-96 rounded-xl shadow-xl bg-white object-cover hover:opacity-90  '/>
         
          <h2 className=' mt-6 text-xl font-bold p-4 '>Munnar, Kerala</h2>
          <p  className='font-mono text-lg p-2'>Famous for tea gardens and misty hills.</p>
        
        </div>
        <div  className='hover:scale-105 transition'>
        <img src={Taj} alt='taj' className='w-full h-96 rounded-3xl shadow-xl bg-white object-cover hover:opacity-90 '/> 
        <h2 className=' mt-6 text-xl font-bold'>Taj Mahal</h2>
        <p className='font-mono text-lg'>Iconic white marble mausoleum in Agra, India. A symbol of love.</p>
           </div>
        <div  className='hover:scale-105 transition'>
          < img src={Rome} className='w-full h-96 rounded-xl shadow-xl bg-white object-cover hover:opacity-90 '/>
        <h2  className=' mt-6 text-xl font-bold'>Colosseum</h2>
        <p className='font-mono text-lg'>Ancient Roman amphitheater, iconic for gladiator fights.</p>
       </div>
        
        
        <div  className='hover:scale-105 transition'>
          <img src={Falls} className='w-full h-96 rounded-xl shadow-xl bg-white object-cover hover:opacity-90 '/>
          <h2  className=' mt-6 text-xl font-bold'>Shillong, Meghalaya</h2>
          <p className='font-mono text-lg'>Scotland of the East, surrounded by rolling hills and waterfalls.</p>
        </div>
        <div className=' hover:scale-105 transition'>
          <img src={China}className='w-full h-96 rounded-xl shadow-xl bg-white object-cover hover:opacity-90 '/>
        <h2 className=' mt-6 text-xl font-bold'>Great Wall of China</h2>
        <p className='font-mono text-lg'>Historic fortification stretching over 13,000 miles</p>
        </div>
        <div className=' hover:scale-105 transition'>
          <img src={Beach}className='w-full h-96 rounded-xl shadow-xl bg-white object-cover hover:opacity-90'/>
          <h2 className=' mt-6 text-xl font-bold'>Radhanagar Beach, Andaman</h2>
          <p className='font-mono text-lg'>Pristine white sand beach with crystal clear waters</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        


      







    
  )
}
