import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";
import { converText } from "../../utils/convertText";
import PostTagListComp from "./PostTagListComp";
import { Edge, Edges, PostListInfoType } from "../../types";
import PagingComp from "../common/PagingComp"
import TagListComp from "../tag/TagListComp"

type PostListProps = {
  postData: Edges
  listInfo: PostListInfoType
  tag? : string | null
};

const PostListComp: React.FC<PostListProps> = ({postData, listInfo, tag = ""}) => {

  const listTitle = converText(tag);

  return (
    <ContentWrap>
      <PostListWrap>
        <div className="tagTitle">{listTitle}</div>
        <div className="postCount">{listInfo.count} post</div>
        <ul className="postlist-ul">
          {postData.map((edge: Edge) => {
            const {title, tag, date, desc} = edge.node.frontmatter;
            const {slug} = edge.node.fields;

            return (
              <li key={title}>
                <div className="box-title">
                  <Link to={slug}>{title}</Link>
                  <p className="box-date">{date}</p>
                  <p className="box-desc">{desc}</p>
                </div>
                <PostTagListComp tags={tag}/>
              </li>
            );
          })}
        </ul>
        <PagingComp listInfo={listInfo} tag={tag}/>
      </PostListWrap>
      <TagListComp/>
    </ContentWrap>
  );
};

export default PostListComp;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostListWrap = styled.div`
  width: 740px;
  padding:50px 0;
  
  .tagTitle {
    padding: 10px 10px;
    font-weight: bold;
    font-size:1.3rem;
  }
  
  .postCount {
    padding: 0 10px 10px 10px;
    font-size:1rem;
    font-weight: bold;
    color:#d4d4d5;
    border-bottom: 0.5px solid #3399ff;
  }
  
  ul.postlist-ul {
    margin:30px 0;
  }
  
  ul.postlist-ul li{
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 10px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    transition: box-shadow .1s ease,transform .1s ease;
    cursor: pointer;
  }
  
  ul.postlist-ul li + ul.postlist-ul li {
    margin-top: 20px;
  }
  
  ul.postlist-ul li .box-title {
    padding:20px;
  }

  ul.postlist-ul li .box-title .box-date{
    font-size:0.8rem;
    margin-bottom:15px !important;
  }
  ul.postlist-ul li .box-title .box-desc{
    font-size: 0.9rem;
    word-wrap: break-word;
    height: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  ul.postlist-ul li .box-title a{
    font-size:1.3rem;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  
  ul.postlist-ul li .box-title a:hover {
    color: #3399ff;
  }
`;
