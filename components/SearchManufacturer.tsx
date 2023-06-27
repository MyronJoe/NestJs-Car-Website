import { SearchManufacturerProps } from '@/types'
import React from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  return (
    <div className='sear-manufacturer'>
        <Combobox>

            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image
                        src='/car-logo.svg'
                        alt='car-logo'
                        height={20}
                        width={20}
                        className='ml-4'
                    />
                </Combobox.Button>

                <Combobox.Input
                    className='search-manufacturer__input'
                    placeholder='Volkswagen'
                    displayValue={(manufacturer: string) => manufacturer}
                    onChange={}
                />
            </div>

        </Combobox>
    </div>
  )
}

export default SearchManufacturer