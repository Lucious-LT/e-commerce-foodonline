import React from 'react'
import { categories } from '../data/data'

function Category() {
return (
    <div className='max-w-[1640px] px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu</h1>
        {/* Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {categories.map((category, index) => (
                <div key={index} 
                className='bg-gray-100 ronded-lg p-4 flex justify-between items-center '>
                    <h1 className='font-bold sm:text-xl'>{category.name}</h1> {/* Fix: Access the 'name' property of the category object */}
                    <img src={category.image} alt={category.name}
                    className='w-12 h-12 object-cover rounded-lg'
                    
                    /> {/* Fix: Access the 'image' property of the category object */}
                </div>
            ))}
        </div>
    </div>
)
}

export default Category