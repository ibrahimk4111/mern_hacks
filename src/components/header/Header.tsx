import { paths } from '@/utilities/paths'
import React from 'react'
import { Link } from 'react-router-dom'

const Header:React.FC = () => {
  const buttonClassName = ' text-sm bg-slate-100 hover:text-orange-300 p-2 rounded-md mx-1 '
  return (
    <div className=' relative '>
        <div className=' h-[10vh] flex justify-between items-center lg:px-10 px-5 text-black bg-white dark:text-white  w-full '>
          <Link to={paths.home} className=' lg:text-3xl text-xl font-extrabold text-orange-500 '>ACE OB MERN</Link>
          <div>
            <Link to={paths.auth.login} className={buttonClassName}>Sign In</Link>
            <Link to={paths.auth.register} className={buttonClassName}>Sign Up</Link>
          </div>
        </div>
    </div>
  )
}

export default Header