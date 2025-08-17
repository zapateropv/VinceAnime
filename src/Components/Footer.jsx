import React from 'react'

const Footer = () => {

  const date = new Date().getFullYear()
  return (
    <div className='bg-black w-full p-3'>
      <div className='text-white text-center font-poppins font-bold'>
        Vincent Zapatero ©{date}
      </div>
    </div>
  )
}

export default Footer
