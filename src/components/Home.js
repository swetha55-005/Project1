import React from 'react'
import { About } from './About'
import { Explore } from './Explore'
import { Contact } from './Contact'
import Image from"./../assests/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg";
import Image1 from"./../assests/eiffel-tower.jpg"
import Image2 from"./../assests/beautiful-tropical-beach-sea-with-coconut-palm-tree.jpg"
import Image3 from"./../assests/set-cottages-ocean-blue-sky.jpg"

export const Home = () => {
  return (
    <div>
      <div className='text-center text-xl text-blue-600 p-6 shadow-xl font-bold'>
       <h3>Find Your Next Beautiful Place</h3>
      </div>
      <div>
        <img src={Image} alt='Image'
         className='w-full h-auto'>
        </img>
        </div>
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
      <div className='rounded-3xl p-5 shadow-xl transition hover:scale-105'>
        <img src={Image1} alt='tower' className='w-full h-96 object-cover  p-5 rounded-3xl shadow-xl bg-white'></img>
       
          <h2 className='font-bold text-xl mb-2'>Eiffel Tower</h2>
        <p className='text-gray-700 text-base'>Famous landmark in Paris, France. Must-visit place for tourists.</p>
    
      </div>
      <div className='rounded-3xl p-5 shadow-xl transition hover:scale-105'>
        <img src={Image2} alt='beach' className='w-full h-96 object-cover p-5 rounded-3xl shadow-xl bg-white'></img>
        <h2 className='font-bold text-xl mb-2'>Tropical Beach</h2>
        <p className='text-gray-700 text-base'>Relaxing beach with crystal clear water and coconut trees.</p>
      </div>
      <div className='rounded-3xl p-5 shadow-xl transition hover:scale-105'>
        <img src={Image3} alt='hill' className='w-full h-96 object-cover p-5 rounded-3xl shadow-xl bg-white'></img>
        <h2 className='font-bold text-xl mb-2'>Ocean Cottages</h2>
        <p className='text-gray-700 text-base'>Stay in cozy cottages by the ocean with beautiful views.</p>
      </div>
      </div>
<About/>
<Explore/>
<Contact/>
    
    </div>
    

    
  )
}
