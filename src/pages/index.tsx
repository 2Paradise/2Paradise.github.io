import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";

const IndexPage: React.FC = () => (
  <Layout isWide>
    <HomeWrap>
      <ContentWrap>
        <p className="___title">
          2Paradise<br/>Engineering Blog
        </p>
        <div className="___videobox">
          <video src={"../../videoplayback.mp4"} autoPlay muted loop/>
        </div>
      </ContentWrap>
    </HomeWrap>
  </Layout>
)

export default IndexPage;

const HomeWrap = styled.section`
  position: relative;
  background-color: black;
  z-index: -2;
`;

const ContentWrap = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  
  & .___title{
    text-align: left;
    font-width: bold;
    color:#ffffff;
    font-size:5rem;
    line-height: 1.2em;
    padding:300px 0;
  }
  
  & .___videobox {
    position: absolute;
    width: 60vw;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    
    video {
      width: 100%;
    }
  }
`;
