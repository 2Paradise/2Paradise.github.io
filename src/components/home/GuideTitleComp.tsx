import React from 'react';
import styled from "styled-components"
import { COMMON_COLORS, COMMONT_CATE } from "../../constants"

type guideTitleCompType = {
  cate: string | null
}

const GuideTitleComp: React.FC<guideTitleCompType> = ({cate}) => {

  // @ts-ignore
  const cateObj = COMMONT_CATE[cate];

  return (
    <GuideTitleWrap color={COMMON_COLORS.black}>
      <GuideTitleBox>
        <img src={cateObj.icon}/>
        <p className={"___title"}>{cate ? cate.toLocaleUpperCase() : cate}</p>
      </GuideTitleBox>
    </GuideTitleWrap>
  );
}

export default GuideTitleComp;

const GuideTitleWrap = styled.div`
    color: #ffffff;
    background-color: ${(props: any) => props.color};
    flex: 1;
`;

const GuideTitleBox = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  
  img {
    margin: 0;
    margin-right: 10px;
    width: 30px;
  }
  
  p {
    margin: 0
  }
  
  .___title {
    font-size: 1.3rem;
    font-weight: bold;  
  }
  
`;
