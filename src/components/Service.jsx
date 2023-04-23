import React from 'react'
import { Button } from './'
import headphones from '../assets/headphones_c_2.webp'
import { motion } from 'framer-motion'
import { fadeIn,footerVariants, staggerChildren, staggerContainer, textVariant, textVariant2 } from '../utils/motion'

const Service = () => {
    return (
        <motion.div
            variants={footerVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='sm:flex justify-between sm:p-20 p-10 gap-20'>

            <div>
                <motion.h1 
                 variants={fadeIn('right', 'tween', 0.2, 1)}
                 className='font-bold text-[35px] mt-20'>New collection of <span className='text-[#7f00ff]'>ShopNow</span></motion.h1>
                <motion.h1 
                 variants={fadeIn('left', 'tween', 0.4, 1)} 
                 className='sm:w-[100%] mt-5'>100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away.</motion.h1>
                <Button
                    title='Learn More'
                    styles='rounded border justify-center flex py-2 px-5 text-white bg-[#7f00ff]  mt-10'
                />
            </div>
            <img src={headphones} />
        </motion.div>
    )
}

export default Service