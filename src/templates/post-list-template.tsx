import React from 'react';
import Layout from '../components/layout';
import { graphql, PageProps } from "gatsby"
import {CONTENT_PER_PAGE} from "../constants";
import { AllMarkdownRemark, Edges, PostListInfoType } from "../types"
import PostListComp from "../components/post-list/PostListComp"

const PostListTemplate: React.FC<PageProps<AllMarkdownRemark>> = React.memo(({ data, location }) => {

  const { search } = location;
  const paramString: string = search.substring(1);
  const searchParams: URLSearchParams = new URLSearchParams(paramString);

  let edges: Edges = data.allMarkdownRemark.edges;
  let _tag: string | null = "ALL";
  let _page: number = 1;

  if (searchParams.has("tag")) {
    _tag = searchParams.get("tag");

    // @ts-ignore
    edges = edges.filter(({ node: { frontmatter: { tag } } }) => (tag.includes(_tag)));
  }

  if (searchParams.has("page")) {
    _page = Number(searchParams.get("page"))
  }

  const postCount: number = edges.length
  const totalPageCount: number = postCount ? (Math.ceil(postCount / CONTENT_PER_PAGE)) : 1

  const listInfo: PostListInfoType = {
    curPage: _page,
    count: postCount,
    totalPageCount: totalPageCount
  }
  // let posts = edges;
  const posts = edges.slice((_page - 1) * CONTENT_PER_PAGE, _page * CONTENT_PER_PAGE)

  return (
    <Layout isWide={false}>
      <PostListComp postData={posts} listInfo={listInfo} tag={_tag}/>
    </Layout>
  )
})


PostListTemplate.displayName = 'posts';

export default PostListTemplate;

export const pageQuery = graphql`
  query PostListQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark (
      filter: { frontmatter: { hide: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            type
            title
            tag
            date
            desc
          }
        }
      }
    }
  }
`;
