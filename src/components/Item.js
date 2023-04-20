import React, {useState} from "react";

function Item({ name, category }) {

  const [carted, setCarted] = useState(false)
  function handleClick(){
    setCarted(itemcart)

  }
  const itemcart= carted ? "in-cart" : " "

  return (
    <li className= {itemcart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
