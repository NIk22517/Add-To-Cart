import React, { useState } from "react";
import { useStateContext } from "../lib/context";
const ProductsCard = ({ info }) => {
  const { onAdd } = useStateContext();

  const [qty, setQty] = useState(1);

  const increment = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrement = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <tr>
      <td>{info.name}</td>
      <td>{info.price}</td>

      <td>
        <button onClick={() => decrement()}>-</button>
        <strong style={{ fontSize: "20px" }}>{qty}</strong>
        <button onClick={() => increment()}>+</button>
      </td>

      <td>
        <button
          onClick={() => {
            onAdd(info, qty);
            setQty(1);
          }}
        >
          Items
        </button>
      </td>
    </tr>
  );
};

export default ProductsCard;
