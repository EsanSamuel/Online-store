import React, { useState } from 'react'
import { Button } from './'
import bag from '../assets/bag.png'
import { FaStream } from 'react-icons/fa'
import { MdSpeed, MdOutlineSmartToy } from 'react-icons/md'
import { BiTrendingUp } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { fadeIn, footerVariants, staggerChildren, staggerContainer, textVariant, textVariant2 } from '../utils/motion'

const Text = () => {
    const [button, setButton] = useState(true)
    return (
        <motion.div
            variants={footerVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex xs:justify-between sm:justify-between flex-wrap mt-20'>
            <motion.div
                variants={footerVariants}>
                <motion.h1
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className='text-[30px] font-bold sm:text-[60px]'>Shop latest goods with<br /><span className='text-[#7f00ff]'>ShopNow</span> </motion.h1>
                <motion.p
                    variants={fadeIn('left', 'tween', 0.4, 1)}
                    className='mt-10'>With ShopNow you can purchase several <br />product online using our websites</motion.p>

                <Button
                    styles={button ? (
                        'bg-[#7f00ff] px-[30px] mt-10 text-white rounded py-2'
                    ) : (
                        'bg-[#7f00ff] px-[30px] mt-10 text-white rounded py-2'
                    )}
                    title={button ? (
                        'View Products'
                    ) : (
                        'No Products'
                    )}
                />

            </motion.div>


            <div>

                <motion.div
                    variants={fadeIn('up', 'tween', 0.5, 1)}
                    className='flex items-center justify-center'>
                    <img src={bag} className='w-[400px] mt-2' /></motion.div>
            </div>


            <div className='card w-full sm:p-10 p-5 gap-6 rounded-[10px] flex justify-between  mt-[5%]'>

                <label><MdSpeed className='text-center font-light text-[20px]' /><h1>Fast</h1></label>
                <label><BiTrendingUp className='text-center text-[20px]' /><h1>Reliable</h1></label>
                <label><MdOutlineSmartToy className='text-center flex justify-center text-[20px]' /><h1 >Smart</h1></label>


                <Button
                    title='Products'
                    styles='rounded border justify-center flex py-2 px-3 text-white bg-[#7f00ff]'
                />
            </div>
        </motion.div>
    )
}

export default Text