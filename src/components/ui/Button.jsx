import React from 'react'
import { Link } from 'react-router-dom'

function Button({size,onclick,variant,text,rounded,link}) {
    const sizes={
        sm:'text-sm px-3 py-1.5',
        md:'text-md px-4 py-2',
        lg:'text-lg px-5 py-3'
    }
    rounded=rounded ? 'rounded-full' : 'rounded'
    const variants={
        primary:'bg-accent text-white hover:bg-accent-hover',
        outline:'border border-accent text-white hover:bg-accent'
    }
    size=sizes[size] || sizes.md
    variant=variants[variant] || variants.primary
  return (
    <a href={link}>
    <button className={`btn cursor-pointer ${size} ${variant} ${rounded}`} onClick={onclick}>
      {text}
    </button>
    </a>
  )
}

export default Button