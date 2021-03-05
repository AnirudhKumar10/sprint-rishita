import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import items from "../data/product.json";
import { StoreContext } from "../store/context";

export const PlaceOrderComponent = () => {
  const history = useHistory();
  const {
    cart: [cart],
  } = useContext(StoreContext);
  return (
    <div className="p-3">
      <h4>Place Order</h4>
      {items.map(({ id, price, name, unit, image }) => {
        return (
          <Item
            imageUri={image}
            id={id}
            price={price}
            name={name}
            unit={unit}
            key={id}
          />
        );
      })}
      <button
        onClick={() => {
          if (Object.keys(cart).length !== 0) {
            history.push("/order-summary");
          } else {
            alert('Your Cart is Empty, Please Add Some Items to Proceed')
          }
        }}
        className="btn btn-block btn-primary mt-3"
      >
        Checkout
      </button>
    </div>
  );
};

export const Item = ({ id, price, name, unit, imageUri }) => {
  const {
    cart: [cart, setCart],
  } = useContext(StoreContext);
  return (
    <div class="card mt-3">
      <div class="card-body d-inline-flex p-2">
        <img
          class="img-fluid img-thumbnail"
          src={imageUri}
          width="100px"
          alt="Card image cap"
        />
        <div className="px-3 mr-auto">
          <div className="h4">{name}</div>
          <div>{unit}</div>
          <div>Price: {price}</div>
          <div>
            <button
              style={{ width: 30 }}
              className="btn btn-sm btn-outline-primary font-weight-bold"
              onClick={() => {
                console.log("Decrement")
                setCart((prev) => {
                  return !Object.keys(prev).includes(id) || prev[id] === 0
                    ? { ...cart }
                    : { ...cart, [id]: prev[id] - 1 };
                });
              }}
            >
              -
            </button>
            <span className="mx-3">{cart[id]}</span>
            <button
              style={{ width: 30 }}
              className="btn btn-sm btn-outline-primary font-weight-bold"
              onClick={() => {
                console.log("Increment")
                setCart((prev) => {
                  return !Object.keys(prev).includes(id) 
                    ? { ...cart, [id]: 1 }
                    : { ...cart, [id]: prev[id] + 1 };
                });
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
