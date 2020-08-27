'use strict';

const createPages = require('./gatsby-lib/on-create-pages');
const onCreateNode = require('./gatsby-lib/on-create-node');

exports.createPages = createPages;
exports.onCreateNode = onCreateNode;
