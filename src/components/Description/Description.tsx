import InfoDescription from "./InfoDescription";
import InfoDate from "./InfoDate";
import InfoImage from "./infoImage";
import { useEffect, useReducer, useState } from "react";

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

function Description(props: any) {
  const info = {
    description: "ordinateur",
    date: new Date(),
  };

  const [count, setCount] = useState(0);
  const [test, setTest] = useState(false);

  const [quantity, setQuantity] = useReducer(reducer, 0);

  useEffect(() => {
    document.title = `Mon compteur est ${count}`;
  }, [test]);

  return (
    <div>
      <InfoDescription description={props.description}></InfoDescription>
      <InfoDate date={info.date}></InfoDate>
      <InfoImage src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></InfoImage>
      <br />
      <button onClick={() => setCount(count + 1)}>Augmenter</button>
      <span>{count}</span>
      <br />
      <button onClick={() => setQuantity({ type: "increment", payload: 1 })}>
        +
      </button>
      <button onClick={() => setQuantity({ type: "decrement", payload: 1 })}>
        -
      </button>
      <span>{quantity}</span>
    </div>
  );
}

export default Description;
