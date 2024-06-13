import React from 'react'

function HeadlineCard() {
return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3  gap-6 '>
        {/* Cards */}
        <div className='rounded-xl relative hover:scale-125'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Sun's BOGO's Out</p>
                <p className='px-2 '>Get 50% off on all orders</p>
                <button className='border-white bg-white text-black mx-2 absolute'>Order Now</button>
            </div>
            <img
                src='https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='/'
                className='rounded-xl max-h-[160px] md:max-h-[200px] w-full  object-cover'
            />
        </div>


        {/*card 2*/}
          <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>New Delicacies </p>
                <p className='px-2 '>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute'>Order Now</button>
            </div>
            <img
                src='https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='/'
                className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover '
            />
        </div>

        {/*card 3 */}
          <div className='rounded-xl relative hover:scale-125'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Deserts are also Delivered </p>
                <p className='px-2 '>Good treats for your Satisfaction</p>
                <button className='border-white bg-white text-black mx-2 absolute'>Order Now</button>
            </div>
            <img
                src='https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='/'
                className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover '
            />
        </div>
        
    </div>
    
    
    
)
}

export default HeadlineCard