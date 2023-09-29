import React from "react";
import OrderIdContainer from "./OrderIdContainer";
import OrderDetails from "./OrderDetails";
import OrderCart from "./OrderCart";

const Orders = () => {
  return (
    <>
      <OrderIdContainer />
      <OrderDetails />
      <OrderCart />
    </>
  );
};

export default Orders;
