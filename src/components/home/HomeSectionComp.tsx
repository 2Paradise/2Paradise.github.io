import React from 'react';
import { useCateList } from "../../query/use-graphql";
import styled from "styled-components";
import { COMMON_COLORS } from "../../constants";
import GuideTitleComp from './GuideTitleComp';
import GuideListComp from './GuideListComp';

const HomeSectionComp:React.FC = () => {

  const cates:Array<string | null> = useCateList();

  return (
    <>
        <BoxTitle>POST LIST</BoxTitle>
        <BoxWrap className={"___boxwrap"} color={COMMON_COLORS.black}>
          {
            cates.map((cate, idx) => {
              return (
                <div className={"___box"} key={idx}>
                  <GuideTitleComp cate={cate}/>
                  <GuideListComp cate={cate}/>
                </div>
              )
            })
          }
        </BoxWrap>
      </>
    );
}

export default HomeSectionComp;

const BoxTitle = styled.p`
    font-size: 3rem;
    font-weight: bold;
    text-align: left;
    margin: 100px 60px 60px 0;
    padding-left: 20px;
`;

const BoxWrap = styled.div`

  justify-content: center;
  border-radius: 10px;
  box-shadow: 5px 5px 20px ${(props: any) => props.color};

  flex-wrap: wrap;
 
  .___box{
      display: flex;
  }
  
  .___box + .___box {
      border-top: 1px solid #2d2d2d;
  }

  @media only screen and (max-width: 992px) {
    .___box{
        display: block;
    }
  }

`;

