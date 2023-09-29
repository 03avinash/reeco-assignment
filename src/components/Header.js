import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";
import LOGO from "../Utlis/Images/LOGO.png";

const Header = () => {
  return (
    <MainHeader>
      <Nav>
        <div className="navbar">
          <ul className="navbar-list-left">
            <li>
              <NavLink to="/" className="navbar-link">
                <img src={LOGO} style={{ height: "1.5rem" }} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/store" className="navbar-link">
                Store
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navbar-link">
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/analytics" className="navbar-link">
                Analytics
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-list-right">
            <li>
              <NavLink to="/cart" className="navbar-link ">
                <div>
                  <BsCart />
                </div>
              </NavLink>
            </li>
            <li className="navbar-link">Logout</li>
          </ul>
        </div>
      </Nav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  background-color: #1e633f;
  height: 3rem;
`;

const Nav = styled.nav`
  color: white;
  padding: 0 5rem;

  .navbar {
    display: flex;
    justify-content: space-between;
    color: white;
    height: 3rem;
    align-items: center;
  }
  .navbar-list-left,
  li,
  .navbar-link {
    display: flex;
    align-items: center;
    list-style: none;
    text-decoration: none;
    gap: 3rem;
    color: white;
  }
  .navbar-list-right,
  li,
  .navbar-link {
    display: flex;
    align-items: center;
    list-style: none;
    text-decoration: none;
    gap: 3rem;
    color: white;
  }
  .navbar-list-right,
  li,
  .navbar-link:hover {
    color: burlywood;
  }
`;
export default Header;
