import React from 'react'

function HeroPage() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 hover:scale-105'>
         <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/36 flex flex-col  justify-center'>
         <h1 className='px-4 text-4xl sm:text-5-xl md:text-6xl lg:text-7xl'>The  <span className='text-orange-500'>Best</span></h1>
         <h1 className='px-4 text-4xl sm:text-5-xl md:text-6xl lg:text-7xl'>Foods <span className='text-orange-500'>Delivered</span></h1>
       </div>
       <img className= 'w-full max-h-[500px] object-cover' 
       src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600"  
       alt="/" />
    </div>
    

    </div>
  )
}

export default HeroPage