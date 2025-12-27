import React from 'react'
import Image5 from"./../assests/falls.jpg"
export const About = () => {
  return (
    <div>
      <div className="relative w-full min-h-screen">

  <div
    id="home"
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{ backgroundImage: `url(${Image5})` }}
  ></div>
      
  

   
    
  <div className="flex justify-center items-center py-20 px-4">
    
    <div className="max-w-3xl rounded-xl shadow-2xl bg-transparent p-10 text-black drop-shadow-lg">

      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
        About Us
      </h2>

      <p className="text-center text-white text-lg mb-10">
        Your trusted guide to the world’s most beautiful destinations.
      </p>
    
    <p className="text-black/100 font-semibold leading-relaxed text-lg">
      Welcome to our travel guide! Whether you're a thrill-seeker, nature lover,
      or planning a relaxing getaway, we bring you the most beautiful destinations
      across the world. From serene beaches to majestic hills, from hidden waterfalls 
      to popular city attractions — we share honest reviews, helpful tips, and practical 
      travel insights to make your journey unforgettable. Explore, discover, and create 
      memories with us!
    </p>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">

      <div className="p-6 rounded-xl shadow-lg  hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-2"> Curated Destinations</h3>
        <p className="text-gray-900">Handpicked locations for a unique and amazing travel experience.</p>
      </div>

      <div className="p-6 rounded-xl shadow-lg  hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-2"> Honest Reviews</h3>
        <p className="text-gray-900">Real information and feedback from real travelers.</p>
      </div>

      <div className="p-6 rounded-xl shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-2"> Travel Tips</h3>
        <p className="text-gray-900">Packing tips, safety advice, local guides, and more.</p>
      </div>

      <div className="p-6 rounded-xl shadow-lg  hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-2"> Inspiring Visuals</h3>
        <p className="text-gray-900">Stunning images that bring each destination to life.</p>
      </div>
      </div>

    </div>
</div>
   </div> 
    </div>
  
  
 




  )
}
