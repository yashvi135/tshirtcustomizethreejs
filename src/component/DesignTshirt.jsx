import React from 'react'
import tshirt1 from "../images/tshirt.png"
import tshirt2 from "../images/tshirt2.png"
import tshirt3 from "../images/tshirt3.png"
import tshirt4 from "../images/tshirt4.png"
import tshirt5 from "../images/tshirt5.png"
import tshirt6 from "../images/tshirt6.png"
import tshirt7 from "../images/tshirt7.png"
import tshirt8 from "../images/tshirt8.png"

import "../styles/Navbar.css"
const DesignTshirt = () => {
  const imageUrls=[
    tshirt1,tshirt2,tshirt3,tshirt4,tshirt5,tshirt6,tshirt7,tshirt8
  ]
  return (
    <div className="designtshirtmodel rounded overflow-hidden shadow-lg grid grid-cols-2 md:grid-cols-3 gap-4">
    {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            width={"80px"}
          />
        ))}
    </div>
  )
}

export default DesignTshirt