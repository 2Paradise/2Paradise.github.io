'use strict';

const path = require('path');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
      {
          allMarkdownRemark(
            filter: { frontmatter: {hide: { ne : true } } }          
          ) {
              edges {
                  node {
                      html
                      id
                      frontmatter {
                          hide
                          type
                          tag
                      }
                      fields {
                        slug
                      }
                  }
              }
          }
      }
  `);

  if (errors) throw errors;

  const { edges } = data.allMarkdownRemark;
  const notFoundTempComp = path.resolve(__dirname,"../src/templates/not-found-template.js");
  const postTempComp = path.resolve(__dirname, "../src/templates/post-template.tsx");
  const postListTempComp = path.resolve(__dirname, "../src/templates/post-list-template.tsx");

  // 404
  createPage({
    path: '/404',
    component: notFoundTempComp,
  });

  const tagMatrix = []

  edges.forEach(({ node }) => {
    const { type, tag } = node.frontmatter;

    let tempComp = null

    if (Array.isArray(tag)) tagMatrix.push(tag)

    switch (type.toLocaleUpperCase()) {
      case "POST":
        tempComp = postTempComp
        break
      default:
        break
    }

    if (tempComp !== null) {
      createPage({
        path: node.fields.slug,
        component: tempComp,
        context: {}
      })
    }

  });

  createPage({
    path: "/post",
    component: postListTempComp,
    context: {}
  });

};

module.exports = createPages;
