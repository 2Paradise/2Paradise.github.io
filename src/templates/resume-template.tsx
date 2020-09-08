import React from 'react';
import Layout from '../components/layout';
import { PageProps, graphql } from "gatsby"
import { PostPropsType } from "../types"
import ResumeComp from "../components/resume/ResumeComp"

const ResumeTemplate: React.FC<PageProps<PostPropsType>>  = React.memo(({ data }) => {

  return (
    <Layout isWide={false}>
      <ResumeComp/>
    </Layout>
  )
});

ResumeTemplate.displayName = 'ResumeTemplate';

export default ResumeTemplate;
