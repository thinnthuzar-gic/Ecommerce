import React from 'react'

const Header = () => {
    const title = "Online Shop";

  return (
    <div className='flex justify-center flex-row'>
        <h3 className='bg-slate-900'>{title}</h3>
        <button className=' bg-slate-400border border-black-200
         px-4 py-2 '>My Cart</button>
    </div>
  )
}

export default Header