import React from 'react'

const Input = ({ placeholder, isTextArea }) => {
    return (
        <div className=''>
            {isTextArea ? (
                <textarea 
                    className='sm:w-[40%] w-full bg-[#f5f5f5] h-[150px] rounded-[20px] px-5 mt-10 py-3 resize-none outline-[#7f00ff]'
                    placeholder={placeholder}
                />
            ) : (
                <input
                    className='sm:w-[40%] w-full bg-[#f5f5f5] py-4 rounded-[20px] px-5 mt-10 outline-[#7f00ff]'
                    placeholder={placeholder}
                />

            )}

        </div>
    )
}

export default Input