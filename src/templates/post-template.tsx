'use strict';

import React from 'react';
import Layout from '../components/layout';
import PostComp from "../components/Post/PostComp"
import { PageProps, graphql } from "gatsby"
import { PostPropsType } from "../types"

const PostTemplate: React.FC<PageProps<PostPropsType>>  = React.memo(({ data }) => {
  console.log(data.post);
  return (
    <Layout>
      <PostComp markdown={data.post}/>
    </Layout>
  )
})

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post: markdownRemark(
      fields: {slug: {eq: $path}}
    ) {
      fields {
        slug
      }
      frontmatter {
        title
        hide
        type
        date
        desc
        tag
      }
      html
      id
    }
  }
`;
