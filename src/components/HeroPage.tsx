
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { useEffect } from 'react'
import { data } from '../data/data'
import { categories } from '../data/data'
import Category from './Category'
import Food from './Food'
import HeadlineCard from './HeadlineCard'
import Header from './Header'


function HeroPage() {
   const [nav, setNav] = useState(false)

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
    <>
    
        <Header/>

      <div className="max-w-[1640px] mx-auto p-4 hover:scale-105">
        <div className="max-h-[500px] relative">
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/36 flex flex-col justify-center">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              The <span className="text-orange-500">Best</span>
            </h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Foods <span className="text-orange-500">Delivered</span>
            </h1>
          </div>
          <img
            className="w-full max-h-[500px] object-cover"
            src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
          />
        </div>
      </div>
    


   


<HeadlineCard/>
   <Food/>
    
    <Category/>

    </>
 


  );
};

export default HeroPage;

