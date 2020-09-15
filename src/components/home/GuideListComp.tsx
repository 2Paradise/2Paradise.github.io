import React from 'react';
import styled from "styled-components";
import { Edges, Edge } from "../../types";
import { graphql, StaticQuery } from "gatsby";
import GuideItemComp from "./GuideItemComp";

type GuideTitleCompType = {
  cate: string | null
}

const GuideListComp: React.FC<GuideTitleCompType> = ({cate}) => {

  return (
    <GuideListWrap>
      <GuideList>
        <StaticQuery query={graphql`
          query GuideListQuery {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
              edges {
                node {
                  frontmatter {
                    hide
                    type
                    title
                    cate
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `} render={data => {
          const {edges} = data.allMarkdownRemark;
          const result: Edges = edges.filter((edge: any) => edge.node.frontmatter.cate === cate);
          return result.map((edge, idx) => (<GuideItemComp key={idx} idx={idx} edge={edge}/>));
        }}
        />
      </GuideList>
    </GuideListWrap>
);
}

export default React.memo(GuideListComp);

const GuideListWrap = styled.div`
  flex: 3;
  background-color: #ffffff;
`;

const GuideList = styled.ul`
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;

    padding: 15px 20px;
  }
`;

