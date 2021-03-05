import React, { useState } from "react";

export const StoreContext = React.createContext({});

export default ({ children }) => {
  const [cart, setCart] = useState({});

  const store = {
    cart: [cart, setCart],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
