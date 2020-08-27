import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';
import { DiReact, DiJsBadge } from "react-icons/di";
// import { GrGraphQl } from "react-icons/gr";
import {GiIsland} from "react-icons/gi";
// import {FaDocker} from 'react-icons/fa';

const Header: React.FC = () => (
  <HeaderWrap>
    <div className="inner-width">
      <div className="navbar-logo">
        <Link to="/" className="logo"><GiIsland size="25px"/> 2P.D.N.</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/post?tag=React"><DiReact size="15px"/> React</Link>
        <Link to="/post?tag=JavaScript"><DiJsBadge size="15px"/> JavaScript</Link>
        {/*<Link to="/post?tag=docker"><FaDocker size="15px"/> Docker</Link>*/}
        {/*<Link to="/post?tag=graphql"><GrGraphQl size="15px"/> GraphQL</Link>*/}
        <Link to="/">Resume</Link>
        {/*<Link to="/">Toy Project</Link>*/}
      </div>
    </div>
  </HeaderWrap>
)

export default Header

const HeaderWrap = styled.header`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  position: fixed;
  background-color: #3399ff;
  width: 100%;
  padding: 20px 0;
  z-index: 999;
  top:0;
  transition: .3s linear;
  
  .inner-width{
    max-width: 1300px;
    margin: auto;
    padding: 0 40px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar-logo{
    display: flex;
  }
  .logo{
    color:white;
    font-weight: bold;
    font-size: 1.8rem;
  }
  
  .navbar-menu a {
    color:white;
    font-size: 0.8rem;
    margin-left: 30px;
    padding-left: 30px;
    transition: .2s linear;
  }
   
  .navbar-menu a:not(:first-child) {
    //border-left: 1px solid white;
  }
`;
