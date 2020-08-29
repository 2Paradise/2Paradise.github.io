import React, { useEffect } from "react"
import styled from "styled-components";
import Prism from "prismjs";
import { Node } from "../../types"
import PostTagListComp from "../post-list/PostTagListComp"
import TagListComp from "../tag/TagListComp"

type PostPropsType = {
  markdown : Node
}

type PostTitleType = {
  pointText : string
}

const PostComp: React.FC<PostPropsType> = ({markdown}) => {

  const {html, frontmatter: {title, date, tag}} = markdown;

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <ContentWrap>
      <PostWrap>
        <PostTitle pointText={title.substring(0, 1)}>{title}</PostTitle>
        <PostDate>{date}</PostDate>
        <PostTagListComp tags={tag} />
        <PostContent dangerouslySetInnerHTML={{ __html: html }}></PostContent>
      </PostWrap>
      <TagListComp />
    </ContentWrap>
  )
}

export default PostComp;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostWrap = styled.div`
  position:relative;
  padding-top: 70px;
  width: 840px;
`;

const PostTitle = styled.div`
  
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.2em;
  
  &::before {
    content: "${(props: PostTitleType) => props.pointText}";
    position: absolute;
    font-size:7rem;
    left: -30px;
    top:70px;
    opacity:0.4;
  }
`;

const PostDate = styled.div`
  font-size:0.9rem;
  border-bottom: 1px solid #3399ff;
  padding: 10px 0;
`;

const PostContent = styled.div`
  margin-top:50px;
  line-height: 1.7em;
  
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
