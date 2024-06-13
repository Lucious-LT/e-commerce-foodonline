import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import { useState } from 'react'


function Header() {
    const [nav, setNav] = useState(false)
  return (
    <>
    <div className="max-w-[1640px] mx-auto flex  items-center p-4  ">
          {/* left side*/}
          <div className='flex items-center'> 
          <div onClick={()=>setNav(!nav)} className='cursor-pionter'>
              <AiOutlineMenu size={30} />

          </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 mr-1'>
              Best <span className='font-bold'>Eats</span>
          </h1>
      </div>
      <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 mr-8 text-[14px]'>
              <p className='bg-black text-white rounded-full p-2'>Delivery</p>
              <p className='p-2'>Pickup</p>
          </div>
            {/* search input*/}
            <div className='bg-gray-200 rounded-full flex items-center px-2 mr-6  w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input type="text" 
                placeholder='search foods'
                className='bg-transparent p-2 focus:outline-none w-full'
                />
            </div>
            <div>
                <button className='bg-black text-white p-2 rounded-full hidden lg:flex'>
                    Sign in
                </button>
            </div>

             <div>
                <button className='bg-black text-white p-2 rounded-full hidden lg:flex'>
                    Sign up
                </button>
             </div>

            {/* Cart button */}
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
               <BsFillCartFill size={20} className='mr-2'/> Cart
            </button>
            {/* Mobile menu  */}
            
                {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 '> 
                </div> : ''}

                {/* Side draer Menu */}
                <div className={nav ? 'fixed top-0 w-[300px] h-screen left-[-100] bg-white z-10  duration-300' 
                : 'fixed top-0 w-[300px] h-screen left-[-100%] bg-white z-10  duration-300' }>
                    <AiOutlineClose 
                    onClick={()=>setNav(!nav)}
                    size={30} 
                    className='absolute right-4 top-4 cursor-pointer ' />
                    <h2 className='text-2xl p-4 mt-1 mb-4 '>
                        Best <span className='font-bold'>Eats</span>
                    </h2>
                    <nav>
                        <ul>
                            <li className='text-xl py-4 flex'><TbTruckDelivery size={30} className='mr-3'/> Orders  </li>
                             <li className='text-xl py-4 flex'><MdFavorite size={30} className='mr-3'/> Favorites </li>
                              <li className='text-xl py-4 flex'><FaWallet size={30} className='mr-3'/> Wallet  </li>
                               <li className='text-xl py-4 flex'><MdHelp size={30} className='mr-3'/> Help </li>
                              <li className='text-xl py-4 flex'><AiFillTag size={30} className='mr-3'/> Promotion  </li>
                               <li className='text-xl py-4 flex'><BsFillSaveFill size={30} className='mr-3'/> Best Ones</li>
                                <li className='text-xl py-4 flex'><FaUserFriends size={30} className='mr-3'/> Invite friends </li>
                        </ul>
                    </nav>

                </div>
          </div>
          </>
    
  )
}

export default Header