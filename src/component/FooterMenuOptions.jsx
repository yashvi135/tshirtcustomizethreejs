import React from 'react'
import {AiOutlineCheck} from "react-icons/ai"
import {AiTwotoneSave} from "react-icons/ai"
import {AiOutlineFolderOpen} from "react-icons/ai"
import {BsFillShareFill} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import "../styles/Navbar.css"

const FooterMenuOptions = () => {
  return (
    <div className='rounded overflow-hidden shadow-lg footermenuoptionmodal'>
        <AiTwotoneSave/>
        <AiOutlineFolderOpen/>
        <GiHamburgerMenu/>
        <AiOutlineCheck/>
        <BsFillShareFill/>
    </div>
  )
}

export default FooterMenuOptions