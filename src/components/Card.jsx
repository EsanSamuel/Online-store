import React, { useContext } from 'react'
import Button from './Button'
import { shortenTitle } from '../utils/shortenTitle'
import { CartContext } from '../context/Cart'
import { container, footerVariants,staggerChildren,textVariant,textVariant2 } from '../utils/motion'
import {motion} from 'framer-motion'


const Card = ({ id, image, title, price, category, count }) => {
    const { cartItems, addToCart } = useContext(CartContext)

    const cartcount = cartItems[id]
    return (
        <motion.div 
        variants={staggerChildren}
        initial='hidden'
        whileInView='show'
        viewport={{once: false,amount:0.25}}
        className='px-10 py-5  rounded card bg-white'>
            <h1 className='text-center py-3 font-bold'>{category}</h1>
            <img src={image} className='w-full h-[250px]' />
            <div className='h-10'>
                <h1 className='text-[16px] font-bold text-center py-5'>{shortenTitle(title)}</h1>
            </div>
            <h1>{count}</h1>
            <div className='flex sm:mt-[8%] mt-10 justify-between'>
                <p className='py-3 mt-[30px]'>${price} </p>
                <button className='rounded-[100px] border px-3 py-1 border hover:bg-[#7f00ff] hover:border-none hover:text-white mt-10' onClick={() => addToCart(id)}>
                    Add to cart {cartcount > 0 && (
                         <> ({cartcount})</>
                         )}
                </button>
            </div>


        </motion.div>
    )
}

export default Card