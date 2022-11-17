import React from "react";
import { useStateContext } from "../lib/context";

const Cart = () => {
  const { item, onRemove } = useStateContext();

  return (
    <div>
      {/* <p>Price:-{totalPrice()}</p> */}
      {item.length === 0 ? (
        <h5>Cart is Empty</h5>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {item.map((info, id) => {
              return (
                <tr key={id}>
                  <td>{info.name}</td>
                  <td>{info.price}</td>
                  <td>{info.quantity}</td>
                  <td>
                    <button onClick={() => onRemove(info)}>Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
