import React, { useContext } from 'react'
import { product } from '../utils/constants'
import { CardCart, Button } from '../components'
import { CartContext } from '../context/Cart'

const cart = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div>
            <h1 className='text-center font-bold py-10'>Your Carts</h1>
            {product?.length > 0 ? (
                <div className='p-10 gap-3 grid sm:grid-cols-3  lg:grid-cols-4 xs:grid-cols-2   grid-cols-1'>
                    {product.map((datax) => {
                        if (cartItems[datax.id] !== 0) {
                            return (
                                <CardCart key={datax.id} {...datax} />
                            )
                        }
                    })}
                </div>
            ) : (
                'No product added to cart!'
            )}

            <div className='flex justify-center p-3 '>
                <Button
                    title={product?.length > 0 ? (
                        'Buy all products'
                    ) : (
                        'Add Products'
                    )}
                    styles='rounded border justify-center  flex py-2 px-5 text-white bg-[#7f00ff]  mt-5'
                />
            </div>

        </div>

    )
}

export default cart