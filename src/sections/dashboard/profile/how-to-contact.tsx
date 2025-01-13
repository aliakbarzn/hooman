import React from 'react'

const HowToContact = () => {
  return (
    <div className='border border-blueC-vibrant bg-blueC-light rounded-lg p-6 flex flex-col items-center gap-5'>
      <span>icon</span>
      <p className='text-2xl'>How would you like your customers to contact you?</p>
      <div className="flex gap-20 mb-4">
        <button className='text-2xl bg-white border border-secondary text-secondary rounded-full w-[250px] p-2'>phone</button>
        <button className='text-2xl bg-white border border-primary text-primary rounded-full w-[250px] p-2'>Booking Chat</button>
      </div>
    </div>
  )
}

export default HowToContact