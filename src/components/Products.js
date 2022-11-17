import React, { useState } from "react";
import ProductsCard from "./ProductsCard";
import { useStateContext } from "../lib/context";
import Cart from "./Cart";

const Products = () => {
  const { getCartTotal, totalPrice } = useStateContext();
  const [openCart, setOpenCart] = useState(false);
  const [search, setSearch] = useState("");

  const data = [
    {
      id: 1,
      name: "Jean",
      price: 20,
    },
    {
      id: 2,
      name: "Shirt",
      price: 22,
    },
    {
      id: 3,
      name: "Jacket",
      price: 23,
    },
  ];

  const cartToggle = () => {
    setOpenCart(!openCart);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <input
            type='text'
            onChange={(e) => handleChange(e)}
            placeholder='Search Product'
          />
        </div>
        <div>
          <h3 onClick={cartToggle}>Cart:-{getCartTotal()}</h3>
          <h4>
            Total Price:- <span>{totalPrice()}</span>
          </h4>
          {openCart ? <Cart /> : ""}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Cart</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((info) => {
              return <ProductsCard key={info.id} info={info} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
