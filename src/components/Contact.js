import React, { useContext } from 'react'
import { DataContext } from '../Strore/DataProvider'

export const Contact = () => {
  const {products, array}=useContext(DataContext)

  console.log("Products" , products)
  console.log("array" , array)
  return (
    <div className='rounded-3xl  p-6 mt-5 bg-gradient-to-br from-teal-50 to-blue-50'>
       
      <div className='font-semibold text-xl text-center rounded-xl shadow-xl mt-5 px-10 py-10 hover:scale-105 transition bg-teal-100'>
      <h2>📩 Get in Touch</h2>
      <p className='font-thin text-base'>We’d love to hear from you! Whether you have questions about destinations, need travel advice, or want help planning your next adventure, we’re here to make your journey smoother and unforgettable.</p>
      </div>
     <div className='flex flex-shrink-0 x'>
        <div className='shadow-xl rounded-xl transition hover:scale-105 max-w-md mx-auto p-5 mt-10 text-center'>
      <h2 className='font-semibold p-5'>🌍 How Can We Help You?</h2>
      <ol>
        <li>Have a destination in mind but need more details?</li>
        <li>Want personalized travel recommendations?</li>
        <li>Need help with bookings or planning?</li>
        <li>Want to share feedback or suggestions?</li>
      </ol>
      <p>Just reach out — we respond quickly!</p>
      </div>
      <div className='shadow-xl rounded-xl transition hover:scale-105 mt-10 text-center  max-w-md mx-auto p-5 '>
     <h2 className='font-semibold p-5'>📞 Contact Information</h2>
     <p>Email: support@travelguide.com</p>
     <p>Phone: +91 98765 43210</p>
     <p>Location: Chennai, Tamil Nadu, India</p>
     </div>
     </div>
     <div className='flex flex-shrink-0 gap-2'>
     <div className='shadow-xl rounded-xl transition hover:scale-105 mt-10 text-center  max-w-md mx-auto p-5 '>
     <h2 className='font-semibold p-5'>💬 Send Us a Message</h2>
     <p>Drop your message anytime — our team will get back to you within 24 hours.</p>
     </div>
     <div className='shadow-xl rounded-xl transition hover:scale-105  mt-10 text-center  max-w-md mx-auto p-5 '>
    <h2 className='font-semibold p-5'>✈️ Let’s Make Your Next Trip Unforgettable!</h2>
    <p>Your dream destination is just a message away.</p>
     <p>Tell us how we can help, and we’ll take care of the rest.</p>
     </div>
     </div>
     


</div>

    
  )
}
