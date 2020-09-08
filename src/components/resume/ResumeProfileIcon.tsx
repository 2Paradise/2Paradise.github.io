import React from 'react';
import styled from "styled-components"

const ResumeProfileIcon:React.FC = () => {
    return (
        <IconBox>
            <div className={"___iconItem"}>
              <a href="https://github.com/2Paradise" target={"_blank"}>
                <img src={"/icons/profile_git.png"}/>
              </a>
            </div>
            <div className={"___iconItem"}>
              <a href="https://2Paradise.github.io" target={"_blank"}>
                <img src={"/icons/profile_blog.png"}/>
              </a>
            </div>
            <div className={"___iconItem"}>
              <a href="https://www.linkedin.com/in/2Paradise" target={"_blank"}>
                <img src={"/icons/profile_linkedin.png"}/>
              </a>
            </div>
        </IconBox>
    );
}

export default ResumeProfileIcon;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  
  .___iconItem {
    width: 40px;
    margin-left: 10px;
    
    img {
      margin: 0;
      width: 100%;  
    }
    
  }
  
  
`;
