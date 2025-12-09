import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FooterLink({to, children}) {
  return (
    <NavLink to={to} className=" flex font-bold  text-[10px] md:text-xs gap-1 items-center on hover:text-[#797878] ">
    <i className="fa-solid fa-arrow-right-from-bracket"></i>
    {children}</NavLink>
  )
}