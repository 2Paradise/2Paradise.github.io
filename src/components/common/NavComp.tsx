import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { COMMON_COLOR } from "../../constants";
import { DiJsBadge, DiReact } from "react-icons/di"
import { FaDocker } from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"

type NavBoxProps = {
  visible: boolean
}

const NavComp: React.FC = () => {

    const [visible, setVisible] = useState(false);

    const handleOver = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setVisible(true);
    };

    const handleOut = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setVisible(false);
    }

    return (
        <NavWrap visible={visible} color={COMMON_COLOR}>
          <div className={"___subMenu"} onMouseOver={handleOver} onMouseOut={handleOut}>Blog {visible ? "▲": "▼"}
            <div className={"___subNavBox"} onMouseOver={handleOver} onMouseOut={handleOut}>
              <ul>
                <li><Link to="/post?tag=React"><DiReact size="1rem"/> React</Link></li>
                <li><Link to="/post?tag=JavaScript"><DiJsBadge size="1rem"/> JavaScript</Link></li>
                <li><Link to="/post?tag=docker"><FaDocker size="15px"/> Docker</Link></li>
                <li><Link to="/post?tag=graphql"><GrGraphQl size="15px"/> GraphQL</Link></li>
              </ul>
            </div>
          </div>
          <Link to="/resume">Resume</Link>
          {/*<Link to="/">Toy Project</Link>*/}
        </NavWrap>
    );
}

export default NavComp;

const NavWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    .___subMenu{
      position: relative;
      cursor: pointer;
      color:white;
      font-size: 1rem;
      
      .___subNavBox {
        position: absolute;
        width: 200px;
        top: 22px;
        right: 0;
        background-color: ${props => (props.color)};
        border-radius: 10px;
        z-index: 99999;
        
        ${(props:NavBoxProps) => {
          const displayValue = props.visible ? "block" : "none";
          return css`display: ${displayValue};`
        }}
        
        ul {
          margin: 20px;
          
          li{
            text-align: left;
            padding: 5px 20px;
          }
        }
      }
     
    }
    
    a {
      text-decoration: none;
      color: #ffffff;
    }
  
`;
