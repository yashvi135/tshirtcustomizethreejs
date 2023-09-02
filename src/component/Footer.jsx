import React from 'react'
import "../styles/Navbar.css"

const Footer = () => {
  return (
    <div className='tshirtpricingdetails flex'>
      <div className="footeramountdetails flex flex-col">
        <div className="amountinputbox flex flex-row">
        <label className='text-sm' for="">Amount</label><input type="text" name="" value=""/>
        </div>
        <span><span className='pricing_amount'>$43</span> per unit</span>
        <span className='text-xs italic'>Shipping not included</span>
      </div>
      <div className="addtocartbtn">
          <button className="rounded-none" type='submit'>Add To Cart</button>
      </div>
    </div>
  )
}

export default Footer