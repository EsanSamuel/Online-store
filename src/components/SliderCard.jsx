import React from 'react'
import { data } from '../utils/sliderData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Button } from './'
import { fadeIn, footerVariants, staggerChildren, textVariant, textVariant2 } from '../utils/motion'
import { motion } from 'framer-motion'


const SliderCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <motion.div
            variants={footerVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className=' w-[100%] sm:p-[200px] p-3 bg-[#ffb6c1] sm:mt-0 mt-10'>
            <div
                className='sm:px-[20%] sm:py-20 p-7  card rounded-[10px] bg-white'>
                <Slider {...settings}>
                    {data.map((datax) => (
                        <div key={datax.id} className='box d_flex top'>
                            <div className='flex'>
                                <h1 className='mt-10 p-5 font-bold sm:text-[25px] text-[17px]'>{datax.text}
                                    <p className='text-[15px] mt-3 font-light'>{datax.detail}</p>
                                    <div className='py-5'>
                                        <Button
                                            title='Learn More'
                                            styles='rounded border text-[17px] justify-center flex py-2 px-5 text-white bg-[#7f00ff]  mt-5'
                                        />
                                    </div></h1>
                                <img src={datax.image} className='w-[40%] sm:h-[40%] h-[70%] sm:mt-10 mt-20' />


                            </div>

                        </div>


                    ))}
                </Slider>
            </div>
        </motion.div>
    )
}

export default SliderCard