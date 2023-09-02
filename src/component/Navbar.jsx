import React from 'react'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
   <div className='tshirtcustomizenav flex mt-3 ml-4'>
    <div className="tshirtname">
        <h1 className='font-bold text-xl'>Soccer Jersey F3 Basic</h1>
    </div>
    <span className='ml-2'>|</span>
    <div className="tshirtdesign ml-2">
        <h3 className='text-xl'>Design Pool</h3>
    </div>
    <div className="productlink">
        <a href="" className='underline text-sm'>change product</a>
    </div>
   </div>
  )
}

export default Navbar