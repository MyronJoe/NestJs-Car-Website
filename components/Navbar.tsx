import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'

const Navbar = () => {
    return (
        <div className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4'>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt='Car Logo'
                        width={118}
                        height={18}
                        className='object-contain'
                    />
                </Link>
            </nav>
        </div>
    )
}

export default Navbar