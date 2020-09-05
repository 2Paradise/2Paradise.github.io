import React from 'react';
import styled from "styled-components"

const HomeMainComp: React.FC = () => {
    return (
      <HomeWrap>
        <ContentWrap>
          <p className="___title">
            2Paradise<br />Engineering Blog
          </p>
          <div className="___videobox">
            <video src={"/videoplayback.mp4"} autoPlay muted loop />
          </div>
        </ContentWrap>
      </HomeWrap>
    );
}

export default HomeMainComp;

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
    //text-shadow: -5px 0 #2d2d2d, 0 5px #2d2d2d, 5px 0 #2d2d2d, 0 -5px #2d2d2d;
    //-moz-text-shadow: -5px 0 #2d2d2d, 0 5px #2d2d2d, 5px 0 #2d2d2d, 0 -5px #2d2d2d;
    //-webkit-text-shadow: -5px 0 #2d2d2d, 0 5px #2d2d2d, 5px 0 #2d2d2d, 0 -5px #2d2d2d;
  }

  & .___videobox {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;

    video {
      width: 100%;
    }
  }
`;
