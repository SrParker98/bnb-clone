import React from 'react'
import Filter from './Filter'
import './Filterstyle.css'
import {BsSliders} from "react-icons/bs";
import Rightfilterdown from './Rightfilterdown'


const mediafilterbar = 'media-filterbar'

export default function Filterbar() {
  return (
    <div className='main-filterbar'>
        <Filter/>
        <Rightfilterdown/>
    
    </div>
  )
}
