import React from 'react'
import { footer, footer2 } from '../utils/Footer'
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import {fadeIn, container, footerVariants, staggerChildren, textVariant, textVariant2 } from '../utils/motion'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <motion.div
           variants={footerVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='sm:p-20 p-10  sm:mt-10 mt-7 '>
            <h1 
             
            className='sm:text-[60px] text-[30px] font-bold'>Buy amazing goods<br /> with us.</h1>

            <p
              className='sm:text-[40px] text-[25px] mt-5 font-bold '>Start by <span className='text-[#7f00ff] underline cursor-pointer'>conecting with us</span></p>
            <div className='flex gap-3 mt-10 text-[30px]'>
                <AiOutlineTwitter className='hover:text-[#7f00ff]' />
                <BsFacebook className='hover:text-[#7f00ff]' />
                <AiOutlineInstagram className='hover:text-[#7f00ff]' />
                <AiFillGithub className='hover:text-[#7f00ff]' />
                <AiOutlineWhatsApp className='hover:text-[#7f00ff]' />
            </div>

            <div className='float-right mr-20 sm:mt-[-22%] mt-20'>
                <h1 className='text-[25px] font-bold'>Information</h1>
                {footer.map((data) => (
                    <ul key={data.id} >
                        <li className='mt-4 text-[20px] cursor-pointer hover:text-[#7f00ff]'>{data.text}</li>
                    </ul>
                ))}
            </div>
        </motion.div>
    )
}

export default Footer