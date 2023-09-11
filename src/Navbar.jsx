import React, { useState } from 'react'
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagHeart} from 'react-icons/bs';
import { AiOutlineUser} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './Navbar.css'
import Logo from './img/logo.svg'

const Navbar = ({searchbtn}) => {

  const[search,setsearch]=useState()
  return (
    <div>
      {/* <div className="free">
      
            <div className="icon">
            
            
            <FaTruck/></div>
            <p>Free shipping when shipping upto Rs1000
            </p>
      </div> */}
      <div className="main_header">
        <div className="container">
            <div className="logo">
                <h1 style={{color:"white", fontFamily:"cursive"}}>Web-Shop</h1>
            </div>
            <div className="search_box">
                <input type="text" value={search} placeholder='Search your product here...' autoComplete='off' onChange={(e)=>setsearch(e.target.value)} />
                <button onClick={()=>searchbtn(search)}>Search</button>
                
            </div>
            <div className="icon">
                <div className="account">
                    <div className="user_icon">
                    <AiOutlineUser/>
                    </div>
                    <p>New User</p>
                </div>
                <div className="second_icon">
                <p><AiOutlineHeart/></p>
                <p><BsBagHeart/></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
