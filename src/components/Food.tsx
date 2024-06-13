import { useState } from 'react'
import {data} from '../data/data'

function Food() {
    // console.log(data)
    const [foods, setFoods]= useState(data);
     //filter type 
     const filterType =(category:any)=> {
      setFoods(
        data.filter((item)=> {
          return item.category === category;
        })
      );
     }
      //filter price
      const filterPrice =(price:any)=> {
        setFoods(
          data.filter((item)=> {
            return item.price === price;
          })
        );
       }



  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top rated Items</h1>
         {/** Filter Row */}
       <div className='flex flex-col lg:flex-row justify-between '>
        {/** Filter Types*/}
         <div>
             <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button  onClick={()=> setFoods(data)}  className=' m-1 border-orange-600  text-orange-600 hover:text-white'>All</button>
                    <button onClick={()=> filterType('pizza')}  className='m-1 border-orange-600  text-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=> filterType('salad')}  className='m-1 border-orange-600  text-orange-600 hover:text-white'>Salads</button>
                    <button onClick={()=> filterType('chicken')}  className='m-1 border-orange-600  text-orange-600 hover:text-white'>Chicken</button>
                    <button  onClick={()=> filterType('burger')}  className='m-1 border-orange-600  text-orange-600 hover:text-white'>Burger</button>

                </div>
         </div>
                 {/** Filter Price*/}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between'>
                   
                    <button onClick={()=> filterPrice ('N')} className='border-orange-600 text-orange-600 hover:text-white'>N</button>
                    <button onClick={()=> filterPrice ('NN')} className='border-orange-600 text-orange-600 hover:text-white'>NN</button>
                    <button onClick={()=> filterPrice ('NNN')} className='border-orange-600 text-orange-600 hover:text-white'>NNN</button>
                    <button onClick={()=> filterPrice ('NNNN')} className='border-orange-600 text-orange-600 hover:text-white'>NNNN</button>
                </div>
            </div>
        </div>
        {/*  Display Foods       */ }


        
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
           {foods.map((items, index)=> 
           <div key ={index} className='border shadow-lg rounded-lg hover:scale-125 duration-200'>
            <img src={items.image}
            alt={items.name}
            className='w-full h-[250px] object-cover rounded-t-lg '
           />
           <div className='flex justify-between px-2 py-4'>
            <p className='font-bold'>{items.name}</p>
            <p><span  className='bg-orange-500 text-white p-1 rounded-full'>{items.price}</span></p>
           </div>
           </div>
           
           )}
          </div>
        
        
    </div>
  )
}

export default Food