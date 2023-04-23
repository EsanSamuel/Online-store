import React, { useState, useEffect } from 'react'
import { Card } from './'
import { product } from '../utils/constants'
import { shortenTitle } from '../utils/shortenTitle'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from '../utils/motion'
import { motion } from 'framer-motion'

//#fffdd0

const Products = () => {
    {/* const [product, setProduct] = useState([])

   const API_URL = 'https://fakestoreapi.com/products'

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [])*/}



    return (
        <motion.div className='bg-[#f5f5f5] w-full'
        >
            <h1 className='font-bold text-[26px] px-10 py-5'>Products</h1>

            {product?.length > 0 ? (
                <div className='p-10 gap-3 grid sm:grid-cols-3  lg:grid-cols-4 xs:grid-cols-2   grid-cols-1'>
                    {product.map((data) => (
                        <Card key={data.id} {...data} />
                    ))}
                </div>
            ) : (
                <h1 className='text-center'>No Products Found</h1>
            )}

        </motion.div>
    )
}

export default Products