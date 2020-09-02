import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';
import NavComp from "./common/NavComp"
import { COMMON_COLOR } from "../constants";

const Header: React.FC = () => {

  return (
      <HeaderWrap color={COMMON_COLOR}>
        <div className="inner-width">
          <div className="navbar-logo">
            <Link to="/" className="logo">
              <img src={"../../blog-logo.jpeg"}/>
              2P<span>Engineering Blog</span>
            </Link>
          </div>
          <NavComp />
        </div>
      </HeaderWrap>
  )
}

export default Header

const HeaderWrap = styled.header`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  position: fixed;
  background-color: ${(props) => props.color};
  width: 100%;
  padding: 20px 0;
  z-index: 999;
  top:0;
  transition: .3s linear;

  .inner-width{
    max-width: 1330px;
    margin: auto;
    padding: 0 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar-logo{
    position: relative;
    display: flex;
  }

  .logo{
    color:white;
    font-weight: bold;
    font-size: 1.8rem;
    
    img{
      position: absolute;
      top: -3px;
      left: -35px;
      border-radius: 5px;
      width: 30px;
    }
    
    span {
      padding-left: 10px;
      font-size: 0.9rem;    
    }
  }
`;
