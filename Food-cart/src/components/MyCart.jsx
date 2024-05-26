import React, { createContext, useContext, useEffect, useState } from "react";
import './Cart.css'
import { cartContext } from "../App";

const MyCart = () => {
    const {food}=useContext(cartContext)
    const [total,setTotal]=useState(0)
    useEffect(()=>{
        setTotal(food.reduce((acc,curr)=>acc+parseInt(curr.price),0)
    )},[food])
  return (
    <div className="cart-main">
        {food.map((thing)=>(
      <div className="cart-card" key={thing.id}>
        <div className="cart-img">
          <img
            src={thing.pic}
            alt=""
          />
        </div>
        <div className="cart-details">
            <h3>{thing.name}</h3>
            <h4>price:{thing.price}</h4>
        </div>
      </div>
      ))}
      <h2>total amount:{total}</h2>
    </div>
  );
};

export default MyCart;
