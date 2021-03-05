import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import items from "../data/product.json";
import { StoreContext } from "../store/context";

export const Ordersummary = () => {
  const history = useHistory()
  const {
    cart: [cart, setCart],
  } = useContext(StoreContext);
  const checkoutTotalOrderprice = () => {
    const total = items.map(({ id, price }) => {
      return Object.keys(cart).includes(id) ? price * cart[id] : 0;
    });
    return total.reduce((a, b) => a + b, 0);
  };
  const confirmOrder = () => {
    //// Confirm Order Logic
    alert("Your Order is confirmed");
  };
  return (
    <div className="p-3">
      <h4>Ordersummary</h4>
      <div>
        <button
          onClick={()=>{
            setCart({})
            history.goBack()}}
          className="btn btn-primary mt-3 mr-4"
        >
          Make New Order
        </button>
        <button
          onClick={()=>{history.goBack()}}
          className="btn btn-primary mt-3"
        >
          Modify Order
        </button>
      </div>
      {items.map(({ id, price, name, image }) => {
        return Object.keys(cart).includes(id) && cart[id] !== 0 ? (
          <Order imageUri={image} id={id} name={name} price={price} key={id} />
        ) : null;
      })}
      <div class="card mt-3">
        <div class="card-body d-inline-flex p-2 pt-3">
          <h5>
            <span className="text-danger font-weight-bold">Total:</span>{" "}
            {checkoutTotalOrderprice()}
          </h5>
        </div>
      </div>
      <button onClick={confirmOrder} className="btn btn-block btn-primary mt-3">
        Confirm Order
      </button>
    </div>
  );
};

export const Order = ({ id, price, name, imageUri }) => {
  const {
    cart: [cart],
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
          <div>{`${price} x ${cart[id]} = ${price * cart[id]}`}</div>
        </div>
      </div>
    </div>
  );
};
