"use client";

import React from 'react'

export default function ButtonComponent({children, onClick}) {
  return (
    <button className='text-sm hover:bg-btn/70 bg-btn shadow-[0_0px_2px_0_rgba(0,0,0,0.2)] shadow-gray-300/20 text-white px-3 py-2 rounded-lg hover:bg-primary/80' onClick={onClick}>
        {children}
    </button>
  )
}
