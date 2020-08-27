import React from 'react';
import Layout from '../components/layout';
// import PostComp from "../components/Post/PostComp"
import { graphql } from "gatsby"

const PostTemplate = React.memo(props => {
  const {html} = props.data.post;
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html}}></div>
      {/*<PostComp markdown={props.data.post}/>*/}
    </Layout>
  );
});

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
