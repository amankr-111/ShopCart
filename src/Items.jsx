import React, { useState } from 'react'
import Productdetail from './productdetail'
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiFillCloseSquare } from 'react-icons/ai';
import './items.css'
import sale from './img/sale.jpg'

const Items = ({product,setproduct,detail,view,close,setClose}) => {
  

  
  const filtterproduct=(product)=>{
    const update=Productdetail.filter((x)=>{
      return x.Cat===product;
    })
    setproduct(update)
  }
  const AllProducts=()=>{
    setproduct(Productdetail)
  }
  return (
    <>
    <img src={sale} style={{height:"50%", width:"100%"}}/>
      {
        close ? 
        <div className="product_detail">
        <div className="container">
          <button onClick={()=>setClose(false)} className='closetbtn'><AiFillCloseSquare/></button>
          {
            detail.map((curElm)=>{
              return(
              <div className="productbox">
                <div className="img-box">
                  <img src={curElm.Img} alt="" />
                </div>
                <div className="detail">
                  <h4>{curElm.Cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <p>{curElm.Details}</p>
                  <h3>${curElm.Price}</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
              )

            })
          }
          

        </div>
      </div>:null
      }
      
       
        <div className="products">
        <h2>Our Products</h2>
        
            <div className="container">
                <div className="filter">
                    <div className="categories">
                        <h3>Categories</h3>
                        <ul>
                        <li onClick={() => AllProducts ()}>All Products</li>
                        <li onClick={() => filtterproduct ("Tablet")}>Tablet</li>
                        <li onClick={() => filtterproduct ("Smart Watch")}>Smart Watch</li>
                        <li onClick={() => filtterproduct ("Headphone")}>Headphone</li>
                        <li onClick={() => filtterproduct ("Camera")}>Camera</li>
                        <li onClick={() => filtterproduct ("Gaming")}>Gaming</li>
                            
                            
                        </ul>
                    </div>
                </div>
                <div className="productbox">
                    <div className="contant">
                        {
                            product.map((curElm)=>{
                                return(
                                    <>
                                    <div className='box' key={curElm.id}>
                                        <div className='img_box'>
                                          <img src={curElm.Img} alt={curElm.Title}></img>
                                          <div className='icon'>
                                            <li><AiOutlineShoppingCart/></li>
                                            <li  onClick={() => view (curElm)}><BsEye/></li>
                                            <li><AiOutlineHeart /></li>                                     
                                          </div>
                                        </div>
                                        <div className='detail'>
                                          <p>{curElm.Cat}</p>
                                          <h3>{curElm.Title}</h3>
                                          <h4>${curElm.Price}</h4>
                                          <AiFillStar/>
                                          <AiFillStar/>
                                          <AiFillStar/>
                                          <AiFillStar/>
                                        </div>
                                      </div>
                                    </>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>

      
    </>
  )
}

export default Items
