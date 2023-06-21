import Image from 'next/image'
import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
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
                        {footerLinks.map((link) => (
                            <div className='footer__link' key={link.title}>
                                <h3 className='font-bold'>{link.title}</h3>

                                {link.links.map((item) => (
                                    <Link key={item.title} href={item.url} className='text-gray-500'>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex justify-center sm:justify-between items-center py-5 border-t border-gray-100 padding-x flex-wrap'>
                    <Link href="/" className='text-gray-500 pr-4'>
                        @2023 CarHub. All Rights Reserved
                    </Link>
                    <div className='footer__copyrights-link'>

                        <Link href="/" className='text-gray-500'>
                            Privacy Policy
                        </Link>
                        <Link href="/" className='text-gray-500'>
                            Terms of user
                        </Link>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer