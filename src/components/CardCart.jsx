import React, { useState, useContext } from 'react'
import { CartContext } from '../context/Cart'
import { shortenTitle } from '../utils/shortenTitle';
import { Button } from './';
import { container, footerVariants,staggerChildren,textVariant,textVariant2 } from '../utils/motion'
import {motion} from 'framer-motion'


const CardCart = ({ title, id, image, price, category }) => {
  const [count, setCount] = useState(1)
  const { removeCart, cartItems } = useContext(CartContext);

  const handleChange = () => {
    if(count < 0) {
      setCount(0)
    }
  }

  const cartcount = cartItems[id]
  return (
    <motion.div
     variants={footerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{once: false,amount:0.25}}>
      <div className='px-10 py-3  rounded card'>
        {cartcount > 0 && <> [{cartcount}]</>}
        <h1 className='text-center py-3 font-bold'>{category}</h1>
        <img src={image} className='w-full h-[250px]' />
        <div className='h-10'>
          <h1 className='text-[16px] font-bold text-center py-5'>{shortenTitle(title)}</h1>
        </div>

        <div className='flex h-6 mt-5 justify-center'> <button className='border px-2' onClick={() => setCount(count - 1)}>-</button><h1 className='border px-2 text-center ' onChange={handleChange}>{count}</h1><button className='border px-2' onClick={() => setCount(count + 1)}>+</button></div>
        <div className='flex sm:mt-[3%] mt-0 justify-between'>
          <p className='py-3 mt-[30px]'>${count * (price)} </p>
          <Button
            handleClick={() => removeCart(id)}
            title='Remove cart'
            styles='rounded-[100px] border px-3 py-1 border-[#7f00ff] hover:bg-[#7f00ff] hover:text-white mt-10'
          />
        </div>
      </div>

      <div className='py-5'>
        <Button
          title='Buy product'
          styles='rounded border justify-center flex py-2 px-5 text-white bg-[#7f00ff]  mt-5'
        />
      </div>
    </motion.div>
  )
}

export default CardCart