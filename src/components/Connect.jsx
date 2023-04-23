import React from 'react'
import { Input, Button } from './'
import { container, footerVariants, staggerChildren, textVariant, textVariant2 } from '../utils/motion'
import { motion } from 'framer-motion'
import earphone from '../assets/earphones_a_3.webp'
import { BiMessageSquareDots } from 'react-icons/bi'

const Connect = () => {
    return (
        <motion.div className='sm:p-20 p-10 '
            variants={footerVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}>
            <h1 className='text-[30px] font-bold text-[#7f00ff]'>Let's talk</h1>

            <div className='mt-10 '>
                <Input
                    placeholder='Enter Email address'
                />
                <Input
                    placeholder='Enter Phone Number'
                />

                <Input
                    placeholder='Enter Message'
                    isTextArea
                />

                <Button
                    title='Send Message'
                    styles='rounded-[20px] border justify-center flex py-2 px-5 text-white bg-[#7f00ff]  mt-5'
                />
                
                
            </div>

            <BiMessageSquareDots className='sm:text-[400px] float-right mt-[-35%] text-[#7f00ff]' />

            

        </motion.div>
    )
}

export default Connect