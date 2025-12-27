import React from 'react'

export const Header = () => {
  return (
    <div>
      <div className='flex gap-0 p-5 justify-around  text-3xl shadow-xl rounded-2xl  '>
       <a href='/' className='hover:text-blue-700 hover:scale-105 transition  '>Home</a>
       <a href='/About'  className='hover:text-blue-700 hover:scale-105 transition    '>About</a>
       <a href='/Explore'  className='hover:text-blue-700 hover:scale-105 transition  '>Explore</a>
       
       <a href='/Contact'  className='hover:text-blue-700 hover:scale-105 transition  '>Contact</a>
</div>


    </div>
  )
}
