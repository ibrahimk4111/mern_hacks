import { paths } from '@/utilities/paths'
import React from 'react'
import { Link } from 'react-router-dom'

const Header:React.FC = () => {
  const buttonClassName = ' text-sm bg-slate-100 hover:text-orange-300 p-2 rounded-md mx-1 '
  return (
    <div className=' lg:p-10 p-5 text-black bg-white dark:text-white '>
        <div className=' flex justify-between items-center'>
          <h1 className=' lg:text-3xl text-xl font-extrabold text-orange-500 '>ACE OB MERN</h1>
          <div>
            <Link to={paths.auth.login} className={buttonClassName}>Sign In</Link>
            <Link to={paths.auth.register} className={buttonClassName}>Sign Up</Link>
          </div>
        </div>
    </div>
  )
}

export default Header