import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
// import PostListComp from "../components/PostList/PostListComp";
// import {CONTENT_PER_PAGE} from "../constants";

const PostListTemplate = React.memo(props => {

  // const { search } = props.location
  // const paramString = search.substring(1)
  // const searchParams = new URLSearchParams(paramString)
  //
  // let edges = props.data.allMarkdownRemark.edges;
  // let _tag = "ALL"
  // let _page = 1
  //
  // if (searchParams.has("tag")) {
  //   _tag = searchParams.get("tag")
  //   edges = edges.filter(({ node: { frontmatter: { tag } } }) => (tag.includes(_tag)))
  // }
  //
  // if (searchParams.has("page")) {
  //   _page = Number(searchParams.get("page"))
  // }
  //
  // const postCount = edges.length
  // const totalPageCount = postCount ? (Math.ceil(postCount / CONTENT_PER_PAGE)) : 1

  // let posts = edges;
  // const posts = edges.slice((_page - 1) * CONTENT_PER_PAGE, _page * CONTENT_PER_PAGE)

  return (
    <Layout>
      {/*<PostListComp postData={posts} listInfo={listInfo} tag={_tag}/>*/}
    </Layout>
  )
})


PostListTemplate.displayName = 'PostListTemplate';

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
