import { Slide } from '@mui/material'
import React from 'react'
import { Text, Products, SliderCard, Service, Connect, Footer } from '../components'


const Home = () => {
    return (
        <div>


            <div className='sm:p-20 px-5 py-20'>
                <Text />
            </div>


            <Products />

            <SliderCard />

            <Service />
            <Connect />
            <Footer />
        </div>
       



    )
}

export default Home