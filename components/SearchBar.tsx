"use client"

import React from 'react'

import SearchManufacturer from './searchManufacturer'

const SearchBar = () => {
    const handleSearch = () => {

    } 
  return (
    <form action="" className='searchbar' onSubmit={handleSearch}>

        <div className='searchbar__item'>
            <SearchManufacturer 
            
            />
        </div>
        
    </form>
  )
}

export default SearchBar