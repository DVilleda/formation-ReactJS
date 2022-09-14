import React, { useState, useReducer } from "react";

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function reducer(quantity: number, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return quantity + action.payload;
    case "decrement":
      return quantity - action.payload;
  }
}

function Product(props: any) {
  const [isToggleOn, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!isToggleOn);
  };
  
  const [quantity, setQuantity] = useReducer(reducer, 0);

  return (
    <div>
      <table style={{ border: "5px solid" }}>
        <tr>
          <td style={{ border: "1px solid" }}>{props.product.name}&nbsp;</td>
          <td style={{ border: "1px solid" }}>{props.product.price}&nbsp;</td>
          <td style={{ border: "1px solid" }}>{props.product.asin}&nbsp;</td>
          <td style={{ border: "1px solid" }}>
            <img src={props.product.picture} alt="" width="50px" />
            &nbsp;
          </td>
          <td style={{ border: "1px solid" }}>
            <button onClick={handleClick}>{isToggleOn ? "ON" : "OFF"}</button>
          </td>
          <td>
            <button
              onClick={() => setQuantity({ type: "increment", payload: 1 })}
            >
              +
            </button>
            <button
              onClick={() => setQuantity({ type: "decrement", payload: 1 })}
              disabled={quantity === 0}
            >
              -
            </button>
            <span>{quantity}</span>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Product;
