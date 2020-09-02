import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";
import { Edges } from "../types"
import HomeMainComp from "../components/home/HomeMainComp"
import HomeSectionComp from "../components/home/HomeSectionComp"

const IndexPage: React.FC<Edges> = () => {
  return (
    <Layout isWide>
      <HomeMainComp />
      <SectionWrap>
        <HomeSectionComp/>
      </SectionWrap>
    </Layout>
  )
};

export default IndexPage;

const SectionWrap = styled.section`
  max-width: 1300px;
  margin: 40px auto;
`;

