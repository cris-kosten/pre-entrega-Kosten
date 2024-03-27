import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
// import BurguerButton from "./BurguerButton";
// import ListIcon from "@mui/icons-material/List";

function Navbar() {
  return (
    <>
      <NavContainer>
        <h2>
          VW <span>Corazan</span>
        </h2>

        <div>
          {/* <a href="">Home</a> */}
          <a href="">Modelos</a>
          <a href="">Comprar</a>
          <a href="">Autoahorro</a>
          <a href="">Conozcanos</a>
          {/* <ListIcon color="primary" /> */}
          <Badge badgeContent={0} color="primary" showZero={true}></Badge>
          <ShoppingCartSharpIcon color="secondary" />
        </div>
      </NavContainer>
      {/* <BurguerButton /> */}
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
      color: dodgerblue;
    }
  }
  padding: 1rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
`;
