import React from 'react';
import styled from "styled-components"
import { Link } from "gatsby"
import {AiFillTags} from 'react-icons/ai'

type TagListType = {
  tags : string[] | null | undefined
}

const PostTagListComp: React.FC<TagListType> = ({tags}) => {

    return (
        <TagBox>
            {tags && <AiFillTags/>}
            {tags && tags.map(tag => {
              const url = "/post?tag=" + tag;
              return (
                <Link to={url} key={tag}>
                  {tag}
                </Link>
              );
            })}
        </TagBox>
    );
}

export default PostTagListComp;

const TagBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    border-top:1px solid #d4d4d5;
    padding:20px;
    
    a {
      color:black;
      font-size:0.7rem;
      font-weight: bold;
      padding: 0 7px;
      margin:0 5px;
      border-radius: 5px;
      background-color: #d4d4d5;
    }
`;
