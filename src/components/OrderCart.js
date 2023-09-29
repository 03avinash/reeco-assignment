import React, { useState } from "react";
import styled from "styled-components";
import { Button1 } from "../Utlis/style/Button1";
import { BsPrinter } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkOutline } from "react-icons/io5";
import { PRODUCTS } from "../Utlis/constants";
import { Button2 } from "../Utlis/style/Button2";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../Utlis/approvalSlice";
import { setMissingItem } from "../Utlis/missingSlice";
import { MissingUrgrntBtn } from "../Utlis/style/MissingUrgentBtn";
import { setNormalMissingItem } from "../Utlis/NormalMissingSlice";
import { MissingBtn } from "../Utlis/style/Missingbtn";

const OrderCart = () => {
  const [searchText, setSearchText] = useState("");
  const [showComponentB, setShowComponentB] = useState(false);
  const [data, setData] = useState([]);
  const [itemName, setItemName] = useState("");

  const selectedItemId = useSelector((store) => store.approval.selectedItemId);
  const missingItemId = useSelector((store) => store.missing.missingItemId);
  const missingNormalItem = useSelector(
    (store) => store.normalMissing.missingNormalItem
  );
  const dispatch = useDispatch();

  const handleClick = (item) => {
    setItemName(item);
    setShowComponentB(true);
    setData([...data, item]);
  };

  const handleMissing = () => {
    data.map((item) => {
      return dispatch(setMissingItem(item));
    });
    setShowComponentB(false);
  };

  const handleNormalMissing = () => {
    data.map((item) => {
      return dispatch(setNormalMissingItem(item));
    });
    setShowComponentB(false);
  };

  console.log(data);
  console.log(missingNormalItem);
  const handleItemClick = (item) => {
    dispatch(setSelectedItem(item));
  };

  return (
    <Section>
      <div className="order-card">
        <div className="search-section">
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search..."
            className="search-bar"
            type="text"
          />
          <div className="print-add-item">
            <Button1>Add item</Button1>
            <BsPrinter />
          </div>
        </div>
        <table className="order-card-details">
          <tr style={{ border: "1.5px solid #ebebeb" }}>
            <th>Product name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
          {showComponentB ? (
            <div className="missing-box">
              <div className="missing-heading">
                <h3>Product Missing</h3>
                <div>
                  <RxCross2 />
                </div>
              </div>
              <p className="item-name">Is '{itemName}' urgent?</p>
              <duv className="missing-btns">
                <button onClick={handleNormalMissing}>no</button>
                <button onClick={handleMissing}>yes</button>
              </duv>
            </div>
          ) : (
            " "
          )}
          {PRODUCTS.filter((filteredItem) => {
            return filteredItem.title
              .toLowerCase()
              .includes(searchText.toLowerCase());
          }).map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.brand}</td>
                <td>₹{item.price}</td>
                <td>{item.stock}</td>
                <td>₹{item.price * item.stock}</td>
                <td id="status">
                  {selectedItemId.includes(item.id) ? (
                    <Button2>Approved</Button2>
                  ) : missingItemId.includes(item.title) ? (
                    <MissingUrgrntBtn>Missing Urgent</MissingUrgrntBtn>
                  ) : missingNormalItem.includes(item.title) ? (
                    <MissingBtn>Missing</MissingBtn>
                  ) : (
                    <div className="space"></div>
                  )}
                  <div>
                    <RxCross2 onClick={() => handleClick(item.title)} />
                    <IoCheckmarkOutline
                      style={{
                        color: selectedItemId.includes(item.id)
                          ? "green"
                          : "#626262",
                      }}
                      onClick={() => handleItemClick(item.id)}
                    />
                    <div>Edit</div>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 0 5rem;
  .order-card {
    background-color: white;
    border: 1.5px solid #ebebeb;
    padding: 2rem;
    border-radius: 16px;
  }
  .search-section {
    display: flex;
    justify-content: space-between;
  }
  .search-bar {
    outline: none;
    padding: 0 1rem;
    border: 1.5px solid #ebebeb;
    border-radius: 25px;
    width: 35%;
  }
  .print-add-item {
    gap: 2rem;
    display: flex;
    align-items: center;
    color: #1e633f;
  }
  .order-card-details {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin: 2rem 0;
  }
  .order-card-details td,
  .order-card-details th {
    border-bottom: 1px solid #ddd;
    padding: 1rem;
    font-size: 0.85rem;
    color: #626262;
  }
  .order-card-details th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    font-size: 1rem;
    font-weight: 100;
    color: #626262;
  }
  #status {
    display: flex;
    justify-content: space-between;
    background-color: #fafafa;
  }
  #status div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .space {
    min-width: 4rem;
  }
  .missing-box {
    padding: 2rem;
    position: fixed;
    top: 40%;
    left: 40%;
    border-radius: 21px;
    border: 1.5px solid #afafaf;
    background-color: white;
  }
  .missing-heading {
    display: flex;
    gap: 2rem;
    align-items: flex-end;
  }
  .missing-btns {
    display: flex;
    width: 100%;
    gap: 2rem;
    justify-content: end;
  }
  .missing-btns button {
    background-color: white;
    border: none;
    font-family: system-ui;
    font-weight: 500;
  }
  h3 {
    font-family: system-ui;
  }
  .item-name {
    padding: 1rem 0;
    font-size: 0.8rem;
  }
`;

export default OrderCart;
