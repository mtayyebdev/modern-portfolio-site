import React from 'react'

function Footer() {
  return (
    <div className='bg-primary text-center flex items-center justify-center h-[70px] text-white'>
      <p>&copy; {new Date().getFullYear()} - <a href="https://mtayebdev.vercel.app">MTayyebDev</a></p>
    </div>
  )
}

export default Footer