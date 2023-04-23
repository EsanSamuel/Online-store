import React,{useContext} from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { FaSellcast } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Cart';
import { motion } from 'framer-motion'
import { headerVariants ,footerVariants,staggerChildren,staggerContainer,textVariant,textVariant2 } from '../utils/motion'

const Navbar = () => {
   const {cartItems} = useContext(CartContext);
   
  return (
    <div className='w-full flex justify-between'>

<Link to='/'><h1 className='flex gap-2 font-bold'><FaSellcast className='text-[25px] text-[#7f00ff]' />ShopNow</h1></Link>

      <ul className=' sm:flex hidden flex gap-5 cursor-pointer'>
        <li>Product</li>
        <li>Shopping</li>
        <li>Latest</li>
        <li>Top</li>
      </ul>
      <Link to='/cart'><FiShoppingCart className='text-[30px]' /></Link>




    </div>
  )
}

export default Navbar