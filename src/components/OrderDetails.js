import React from "react";
import styled from "styled-components";

const OrderDetails = () => {
  return (
    <Wrapper>
      <div className="orderdetails">
        <table>
          <tr>
            <th style={{ border: "none" }}>Supplier</th>
            <th>Shipping date</th>
            <th>Total</th>
            <th>Category</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
          <tr>
            <td style={{ border: "none" }}>
              East coast fruits <br /> & vegetables
            </td>
            <td>Thu, Feb 10</td>
            <td>₹ 15,028.3</td>
            <td>A B C D E</td>
            <td>400-400-678</td>
            <td>
              Awaiting your <br /> approvel
            </td>
          </tr>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 5rem;
  .orderdetails {
    background-color: white;
    border: 1.5px solid #ebebeb;
    border-radius: 16px;
  }

  table {
    width: 100%;
    margin: 2rem 0;
    border-collapse: collapse;
  }
  table tr th {
    text-align: left;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: system-ui;
    color: #626262;
    padding: 0rem 2rem;
    border-left: 1px solid grey;
  }
  table tr td {
    text-align: left;
    font-size: 0.9rem;
    font-weight: 600;
    font-family: system-ui;
    padding: 0rem 2rem;
    border-left: 1px solid grey;
  }
`;

export default OrderDetails;
