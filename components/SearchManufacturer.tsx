import { SearchManufacturerProps } from '@/types'
import React from 'react'
import { Combobox, Transition } from '@headlessui/react'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  return (
    <div className='sear-manufacturer'>
        <Combobox>

            <div className='relative w-full'>

            </div>

        </Combobox>
    </div>
  )
}

export default SearchManufacturer