import React from 'react';
import styled from "styled-components"
import {CONTENT_PER_PAGE} from "../../constants";
import { Link } from "gatsby"
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import { PostListInfoType } from "../../types"

type PagingType = {
  listInfo: PostListInfoType
  tag: string |  null
}

type PageInfoType = {
  url: string
  page?: number
}

const PagingComp = ({ listInfo, tag }:PagingType) => {
    const {curPage, count, totalPageCount} = listInfo;
    const pageCount:number = 5;
    const pageGroup:number = Math.ceil(curPage/pageCount);

    let last:number = pageGroup * pageCount;
    if(last > totalPageCount) last = totalPageCount;
    let first:number = last - (pageCount - 1) ;
    first = first < 1 ? 1 : first;
    let next:number = last + 1;
    let prev:number = first -1;

    const listEl:Array<PageInfoType> = [];

    for(let i = first; i <= last ; i++){
      listEl.push({
        url : `/post/?tag=${tag}&page=${i}`,
        page : i
      });
    }

    return (
        <PagingWrap>
          <ul>
            {first !== 1 && <li key={prev}><Link to={`/post/?tag=${tag}&page=${prev}`}><GrFormPrevious/></Link></li>}
            {first !== 1 && (<li><Link to={`/post/?tag=${tag}&page=1`}>1</Link></li>)}
            {first !== 1 && (<li>. . .</li>)}
            {listEl.map(({ url, page }) => <li key={page} className={page === curPage ? "active" : ""}><Link to={url} >{page}</Link></li>)}
            {last !== totalPageCount && <li>. . .</li>}
            {last !== totalPageCount && <li><Link to={`/post/?tag=${tag}&page=${totalPageCount}`}>{totalPageCount}</Link></li>}
            {last !== totalPageCount && <li key={next}><Link to={`/post/?tag=${tag}&page=${next}`}><GrFormNext/></Link></li>}
          </ul>
        </PagingWrap>
    );
};

export default PagingComp;

const PagingWrap = styled.div`
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li + li {
    padding-left: 20px;
  }

  li a {
    color: black;
  }
  
  li.active a {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
