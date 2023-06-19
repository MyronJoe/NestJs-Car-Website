import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>

        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 px-6 sm:px-16 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image 
                    src='/logo.svg'
                    alt='footer logo'
                    width={118}
                    height={18}
                    className='object-contain'
                />
                <p className='text-gray-700 text-base'>
                    Carhub 2023 <br /> All rights reserved &copy;
                </p>
            </div>
            <div className='footer__links'>
                
            </div>
        </div>

    </footer>
  )
}

export default Footer