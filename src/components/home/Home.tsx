import React from 'react'
import Login from '../login/Login'

const Home:React.FC = () => {
  return (
    <div className=' text-black bg-white p-10 dark:text-white '>
        <div className=' container '>Home Route from dev branch </div>
        <Login />
    </div>
  )
}

export default Home