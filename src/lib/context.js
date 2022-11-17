import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [item, setItem] = useState([]);

  const onAdd = (info, quantity) => {
    const exist = item.find((itm) => itm.id === info.id);
    if (exist) {
      setItem(
        item.map((itm) =>
          itm.id === info.id
            ? { ...exist, quantity: exist.quantity + quantity }
            : itm
        )
      );
      // setQty(1);
    } else {
      setItem([...item, { ...info, quantity: quantity }]);
      // setQty(1);
    }
  };

  const onRemove = (info) => {
    // const newItem = item.filter((items) => items !== info);
    // setItem(newItem);

    const exist = item.find((itm) => itm.id === info.id);
    if (exist.quantity === 1) {
      setItem(item.filter((itm) => itm.id !== info.id));
    } else {
      setItem(
        item.map((itm) =>
          itm.id === info.id ? { ...exist, quantity: exist.quantity - 1 } : itm
        )
      );
    }
  };

  const getCartTotal = () => {
    return item.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const totalPrice = () => {
    return item.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };
  return (
    <ShopContext.Provider
      value={{
        onAdd,
        onRemove,
        item,
        totalPrice,
        getCartTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
