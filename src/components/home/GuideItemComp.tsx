import React from 'react';
import { cateObjectType, Edge } from "../../types"
import { Link } from "gatsby"
import styled from "styled-components"
import { COMMONT_CATE } from "../../constants"

type GuideItemType = {
  idx: number
  edge: Edge
};

const GuideItemComp:React.FC<GuideItemType> = ({idx, edge }) => {

  const {slug} = edge.node.fields;
  const {title, cate} = edge.node.frontmatter;

  // @ts-ignore
  const cateObj = COMMONT_CATE[cate];

  return (
    <GuideItem color={cateObj.color}>
      <span>{idx + 1}. </span><Link to={slug}>{title}</Link>
    </GuideItem>
  );
}

export default GuideItemComp;

const GuideItem = styled.li`
  span {
    font-size:1.2rem;
    font-width: bold;
    color: ${(props:any ) => props.color};
  }
  
  a {
      color:#2d2d2d;
      text-decoration: none;
      
      &:hover {
        color: ${(props:any ) => props.color};
      }
  }
  
`;

