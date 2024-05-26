import React, { useContext } from 'react'
import { cartContext}  from '../App';

const Card = ({product}) => {
    const pname=product.name.length > 5?product.name.substring(0,10)+'..':product.name
    const {food,setFood}=useContext(cartContext)
    function handleAdd(){
        setFood([...food,product]);
        // console.log(food)
    }
    function handleRemove(){
        setFood(food.filter((c)=>c.id !== product.id))
    }
  return (
    
    <div className="card">
    <div className="card-img" key={product.id}>
        <img src={product.pic} alt="" />
    </div>
    <div className="card-details">
        <h3>{pname}</h3>
        <h4>price : {product.price}</h4>
       {food.includes(product)?<button onClick={handleRemove}>remove from cart</button>: <button onClick={handleAdd}>add to card</button>}
    </div>
    </div>
  )
}

export default Card
