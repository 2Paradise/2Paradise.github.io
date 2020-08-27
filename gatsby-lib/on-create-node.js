'use strict';

const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    actions.createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
};

module.exports = onCreateNode;
