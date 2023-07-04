"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton = ({title, btnType, rightIcon, containerStyles, handleClick}:CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
    <span className={`flex-1`}>{title}</span>

    {rightIcon && (
      <div className='relative w-6 h-6'>

        <Image />

      </div>
    )}
    </button>
  )
}

export default CustomButton