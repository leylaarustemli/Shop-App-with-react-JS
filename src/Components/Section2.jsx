import React, { useContext, useEffect, useState } from "react";
import "./Section2.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Section2 = () => {

  //!SEARCH
  const[data,setData]=useState([]);
const[inpVal,setInpval]=useState("");
useEffect(()=>{
  axios.get("http://localhost:3000/products").then((res)=>{
    if(inpVal !=""){
      setData([
        ...res.data.filter((item)=>
        item.title.toLowerCase().includes(inpVal.trim().toLowerCase()))
      ])
    }
    else{
      setData([...res.data])
    }
  })
},[inpVal])




//!SORT(AZ-COX)

const filterData=(string)=>{
  switch(string){
    case "low":
      setData([...data.sort((a,b)=>a.price-b.price)])
    break;
case "high":
  setData([...data.sort((a,b)=>b.price-a.price)])
  break;
  case "default":
    axios.get("http://localhost:3000/products").then(res=>{
      // setData(res.data)
      if(inpVal !=""){
        setData([
          ...res.data.filter((item)=>
          item.title.toLowerCase().includes(inpVal.trim().toLowerCase()))
        ])
      }
      else{
        setData([...res.data])
      }
      
    })
  break;
  }
}



  return (
    <div className="section2">
      <div className="container">
        <h3>New realeased Products for Women</h3>
        <p>Who are in extremely love with eco friendly system.</p>
        <input value={inpVal} onChange={(e)=>setInpval(e.target.value)} placeholder="Aradiginiz urunu yazin" type="search" name="" id="" /> 
         <select onChange={(e)=>{
          filterData(e.target.value)
         }} name="" id="">
          <option value="default">default</option>
          <option value="low">azdan-coxa</option>
          <option value="high">coxdan-aza</option>
         </select>
        <div className="cards">
          {data.map((item, index) => (
            <div className="card">
            <div className="card-img">
            <img src={item.image} alt="" /> 
            <div className="hover-icn">
            <div className="icons">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-layer-group"></i>
            <i class="fa-solid fa-cart-shopping"></i>
        <Link to={`details/${item.id}`}><i class="fa-solid fa-expand"></i></Link> 
            </div>
            
          
            </div>
            </div>
           
              <p>{item.title}</p>
              <h5>{item.price}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
