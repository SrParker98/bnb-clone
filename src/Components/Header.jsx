import React from 'react'
import "../../src/App.css"
import Longlogo from "../assets/Longlogo.png"
import logo from "../assets/logo.png"
import world from "../assets/world.svg"
import { SlMenu } from 'react-icons/sl';
import { GoSearch } from "react-icons/go"
import Submenu from './Submenu'
import Rightfilter from './Filter-bnb/Rightfilter'



export default function Header() {
  return (
    <div className='main-header'>

        <img src={Longlogo} alt="logo" className='navbar-logo' />
        <img src={logo} alt="logo" className='navbar-logo logo-responsive' />


        <div className="search-bar">
          <Rightfilter/>
            <a className='b' href="">Cualquier lugar |</a>
            <a className='b' href="">Cualquier semana |</a>
            <a className='' href="">Añade viajeros</a>
            <span className='pink-capsule'>  <GoSearch className='lupa'/> </span>
        </div>

        <div className='search-bar-right'>
            <a className='b' href="">Pon tu casa en Airbnb</a>
            <img className='world-svg' src={world} alt="" />
            <div className='user-right-topbar'>
             < SlMenu className='icon-right-topbar'/>
           <Submenu/>
            
            
             

            </div>
            
        </div>
       
    </div>
    
    
    
  )
}
