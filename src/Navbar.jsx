import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagHeart} from 'react-icons/bs';
import { AiOutlineUser} from 'react-icons/ai';

import './Navbar.css'

const Navbar = ({searchbtn}) => {

  const[search,setsearch]=useState()
  return (
    <div>
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
