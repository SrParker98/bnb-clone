import React from 'react'
import Filter from './Filter'
import './Filterstyle.css'
import {BsSliders} from "react-icons/bs";


export default function Rightfilter() {
  return (
    <div className='right-filter-down media-filterbar'>

            <h2 className='right-filter-content-down b'><BsSliders/><span className='media-filtros'>Filtros</span></h2>

        </div>
  )
}
