import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
    const navigation=[
        {label:"TV Shows",href:"tv"},
        {label:"Movies",href:"movies"},
    ]
  return (
    <div className='fixed top-0 w-full h-16 bg-neutral-600 opacity-75'>
        <div className='container mx-auto px-2 flex items-center h-full'>
            <div>
                <img src={logo} alt="logo" width={120}/>
            </div>
            <nav className='flex items-center gap-1 ml-5'>
                {navigation.map((nav,index)=>{
                    return(
                        <div>
                            <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-800 ${isActive && "text-red-500"}`}>
                                {nav.label}
                            </NavLink>
                        </div>
                    )
                })}
            </nav>
        </div> 
    </div>
  )
}

export default Header