import React from 'react';
import './filterstyle.css'
import { links } from './links';




export default function Filter({ selectedFilter, setSelectedFilter }) {

  

  return (


    <div className="filter-div ">
    {links.map((item, i) => {
      return (
        <div
          key={i}
          className={`links-box ${i === selectedFilter && "selected-box"}`}
          onClick={() => {
            console.log("selecting key", i);
            setSelectedFilter(i);
          } }
        >
          <img src={item.imgSrc} className="links-img" />
          <p className={`links-label ${i === selectedFilter && "selected-label"}`}>
            {item.label}
          </p>
        </div>
         
      ); 
    })}
     </div>
 
  
);



}


  

