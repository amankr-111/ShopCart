import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Items from './Items';
import Productdetail from './productdetail';
import { useState } from 'react';

function App() {
  const [close,setClose]=useState(false)

  const[detail,setdetail]=useState([])
  
  const[product,setproduct]=useState(Productdetail)

  const searchbtn=(product)=>{
    const change=Productdetail.filter((x)=>{
      return x.Cat===product
    })
    setproduct(change)
    

  }
  const view=(product)=>{
    setdetail([{...product}])
    setClose(true)

  }
  return (
    <div className="App">
     <Navbar searchbtn={searchbtn}/>
     <Items product={product} setproduct={setproduct} detail={detail} view={view} setdetail={setdetail} close={close} setClose={setClose}/>
    </div>
  );
}

export default App;
