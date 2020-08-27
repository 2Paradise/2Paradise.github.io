import React, { useEffect } from "react";
import styled, { StyledComponent } from "styled-components";
// import PostTagListComp from "../PostList/PostTagListComp";
import Prism from "prismjs";
import {Node} from '../../types';

type PostTitleType = {
  pointText : string
}

const PostComp: React.FC<Node> = ({markdown}) => {
  const {html, frontmatter: {title, tags, date}} = markdown;
  console.log(date);
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <ContentWrap>
      <PostWrap>
        <PostTitle pointText={title.substring(0,1)}>{title}</PostTitle>
        {/*<PostDate>{date}</PostDate>*/}
        {/*<PostTagListComp tags={tag}/>*/}
        <PostContent dangerouslySetInnerHTML={{ __html: html}}></PostContent>
      </PostWrap>
    </ContentWrap>
  );
}

export default PostComp;

const ContentWrap = styled.div`
  display: flex;
`;

const PostWrap = styled.div`
  position:relative;
  margin-top: 170px;
  width: 740px;
`;

const PostTitle = styled.div`
  
  font-weight: bold;
  font-size: 2rem;
  
  &::before {
    content: "${(props: PostTitleType) => props.pointText}";
    position: absolute;
    font-size:7rem;
    left: -30px;
    top:-10px;
    opacity:0.4;
  }
`;

const PostDate = styled.div`
  font-size:0.8rem;
  border-bottom: 1px solid #3399ff;
  padding: 10px 0;
`;

const PostContent = styled.div`
  margin-top:50px;
  
  & ul {
    padding-left: 40px;
    list-style: none;
  }
  
  & ul li:before {
    content: "•";
    color: #3399ff;
    font-weight:bold;
    font-size: 1.2rem;
    display: inline-block;
    width:1em;
    margin-left: -1em;
  }
  
  & img {
    margin: 20px 0;
  }
`;
