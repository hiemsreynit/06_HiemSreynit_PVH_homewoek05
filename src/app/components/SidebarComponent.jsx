import React from 'react'

export default function SidebarComponent() {
  return (
    <aside className='flex flex-col bg-bar w-fit px-3 py-3 h-dvh gap-y-3 rounded-lg mt-3'>
      <p>Menu</p>
      <section className='flex flex-col items-start gap-y-2'>
        <p className='text-sm px-3 py-2 bg-category w-50 rounded-lg'>Overviews</p>
        <p className='text-sm px-3 py-2 bg-category w-50 rounded-lg'>Items</p>
        <p className='text-sm px-3 py-2 bg-category w-50 rounded-lg'>Orders</p>
        <p className='text-sm px-3 py-2 bg-category w-50 rounded-lg'>Customers</p>
        <p className='text-sm px-3 py-2 bg-category w-50 rounded-lg'>Setting</p>
      </section>
    </aside>
  )
}
