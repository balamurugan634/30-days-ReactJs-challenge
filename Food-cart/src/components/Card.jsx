import React, { useContext } from "react";
import { cartContext } from "../App";
// card-details
// card-img
const Card = ({ product }) => {
  const pname =
    product.name.length > 5
      ? product.name.substring(0, 10) + ".."
      : product.name;
  const { food, setFood } = useContext(cartContext);
  function handleAdd() {
    setFood([...food, product]);
    // console.log(food)
  }
  function handleRemove() {
    setFood(food.filter((c) => c.id !== product.id));
  }
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={product.pic} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{pname}</h5>
        <p className="card-text">price : {product.price}</p>
        {food.includes(product) ? (
          <button className="btn btn-danger" onClick={handleRemove}>
            remove from cart
          </button>
        ) : (
          <button onClick={handleAdd} className="btn btn-success">
            add to card
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
