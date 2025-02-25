import React from 'react'


const Container = ({children}) => {
  return (
    <div className='w-full mx-auto lg:w-[800px] xl:w-[1000px]'>{children}</div>
  )
}

export default Container