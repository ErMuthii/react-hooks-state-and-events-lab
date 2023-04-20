import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [changemode, setChangeMode]=useState(false)


  function handleClick(){
    setChangeMode(! changemode)
  }
  
  const appClass = changemode ? "App dark" : "App light"
  const revert= changemode ? "App light" : "App dark"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
