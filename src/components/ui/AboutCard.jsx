import React from 'react'

function AboutCard({title,desc}) {
  return (
    <div className='p-2 max-w-[350px] cursor-pointer hover:bg-accent-hover bg-accent rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <div
          className={`bg-white mb-3 h-1 w-[100px] rounded-full`}
        ></div>
        <p className='text-sm'>{desc}</p>
    </div>
  )
}

export default AboutCard