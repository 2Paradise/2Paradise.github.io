import { graphql, useStaticQuery } from "gatsby"
import { AllMarkdownRemark } from "../types"

export const useCateList =  () => {
  const data:AllMarkdownRemark = useStaticQuery(
    graphql`
       query CateQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                cate
              }
            }
          }
        }
      }
    `
  );

  const result:Array<string> = [];
  const {edges} = data.allMarkdownRemark;

  edges.map((edge) => {
    const {cate} = edge.node.frontmatter;
    if(cate) !result.includes(cate) && result.push(cate);
  });

  return result;
};
