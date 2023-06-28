import { SearchManufacturerProps } from '@/types'
import React from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { manufacturers } from '@/constants'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {

    const [query, setQuery] = useState('')

    const filteredManufacturers = 
        query === "" 
            ? manufacturers 
            : manufacturers.filter((item) => (
            item.toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
    ))

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
                    onChange={(e) => setQuery(e.target.value)}
                />

                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className='relative'>
                        {filteredManufacturers.length === 0 && query !== '' ? (
                            <Combobox.Option value={query} className='search-manufacturer__option absolute bg-white z-10 w-full'>
                                Create "{query}"
                            </Combobox.Option>
                        ):
                        (filteredManufacturers.map((item) =>(
                            <Combobox.Option
                                key={item}
                                className={({active}) => `relative search-manufacturer__option ${active?'bg-primary-blue text-white' : 'texy-gray-900'} `}
                                value={item}
                            >
                                {item}
                            </Combobox.Option>
                        )))
                        }
                    </Combobox.Options>
                </Transition>
            </div>

        </Combobox>
    </div>
  )
}

export default SearchManufacturer