import React from 'react'
import { NavLink } from 'react-router-dom'
import App from '../App'

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center p-10 bg-gray-800
    h-screen'>
      <h1 className='text-5xl text-center mb-10 text-white '>Page not found! ://</h1>
      <NavLink to={'/'} className={'text-2xl text-violet-800'}>Go Back</NavLink>
      
    </div>
  )
}

export default ErrorPage
