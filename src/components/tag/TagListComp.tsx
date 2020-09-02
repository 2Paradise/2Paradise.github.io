import React from 'react';
import styled from "styled-components";
import useTagList from "../../hook/use-tag-list"
import { Link } from "gatsby"
import { converText } from "../../utils/convertText"
import { COMMON_COLOR } from "../../constants"

const TagListComp: React.FC = React.memo(() => {

  const tagsInfo: any = useTagList();
  const tags: Array<string> = Object.keys(tagsInfo);

  return (
    <TagListWrap className="taglist" color={COMMON_COLOR}>
      <ul>
        {
          tags.map((tag, idx) => (
            <li className="taglist___tagbox" key={idx}>
              <Link to={`/post?tag=${tag}`}>{tag}</Link>
            </li>
          ))
        }
      </ul>
    </TagListWrap>
  );
});

export default TagListComp;

const TagListWrap = styled.div`
  position: relative;
  margin-top: 116px;
  padding-top:20px;
  width: 350px;
  
  &::before {
    content: "Tag Box";
    position: absolute;
    font-size: 1.5rem;
    font-weight: bold;
    top: -40px;
    z-index: 2;
  }
  
  & ul {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
  }
  
  & ul li {
    padding: 0.2em 0.6em;
    border-radius: 0.4em;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    color: white;
    background-color: ${props => props.color};
  }
  .taglist___tagbox{
    margin-left: 4px;
  }
  
  & a {
    color: white;
  }
`;
