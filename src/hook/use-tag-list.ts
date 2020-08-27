import { graphql, useStaticQuery } from "gatsby"
import { AllMarkdownRemark} from "../types"

const useTagList = () => {
  const { allMarkdownRemark }: AllMarkdownRemark = useStaticQuery(
    graphql`
      query TagQuery {
        allMarkdownRemark (
          filter: {
            frontmatter: { hide: { eq: false } }
          }
        ) {
          edges {
            node {
              frontmatter {
                tag
              }
            }
          }
        }
      }
    `
  );

  const { edges } = allMarkdownRemark;

  let result: any = {};

  edges.map((edge, inx, array) => {
    const { frontmatter : { tag } } = edge.node;

    tag?.forEach((key) => {
      if(!result[key]) {
        result[key] = 1;
      }
      else
      {
        result[key] += 1;
      }
    });
  });

  return result;
};

export default useTagList;
