import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";

const IndexPage: React.FC = () => (
  <Layout isWide>
    <HomeWrap>
      2Paradise Develop Blog
    </HomeWrap>
  </Layout>
)

export default IndexPage;

const HomeWrap = styled.section`
  text-align: center;
  font-width: bold;
  font-size:5rem;
  padding:300px 0;
`;
