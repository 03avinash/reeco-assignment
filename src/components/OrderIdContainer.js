import React from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button1 } from "../Utlis/style/Button1";
import { Button2 } from "../Utlis/style/Button2";

const OrderIdContainer = () => {
  return (
    <Wrapper>
      <div className="orderId-subHead">
        <div>
          Orders <MdOutlineKeyboardArrowRight />
        </div>
        <div style={{ textDecoration: "underline" }}>Order 32457ABC</div>
      </div>

      <div className="orderId-Head">
        <h3>Order 32457ABC</h3>
        <div className="btns">
          <Button1>Back</Button1>
          <Button2>Approve order</Button2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0px 22px 21px -32px rgba(0, 0, 0, 0.52);
  background-color: white;
  height: 6rem;
  color: #626262;
  padding: 1rem 5rem;
  .orderId-subHead,
  div {
    display: flex;
    align-items: center;
  }
  h3 {
    color: #363636;
    font-size: 24px;
  }
  .orderId-Head {
    padding: 1rem 0 1rem 0;
    justify-content: space-between;
    display: flex;
  }
  .btns {
    display: flex;
    gap: 1rem;
  }
`;

export default OrderIdContainer;
