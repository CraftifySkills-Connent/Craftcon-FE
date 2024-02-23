import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage:React.FC = () => {
  return (
    <div className=' flex flex-col justify-center items-center w-screen h-screen gap-2 bg-slate-400'>
      <h1 className='text-lg font-bold'>404 page not found</h1>
      <Link to='/'>Go back to homepage</Link>
    </div>
  )
}

export default NotFoundPage
