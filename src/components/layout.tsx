import React from "react"
import {Helmet} from 'react-helmet';
import Header from "./header"
import "./layout.css"
import styled, {css} from 'styled-components';
import useSiteMetadata from "../query/use-site-metadata"

type layoutProps = {
  isWide: boolean
};

const Layout: React.FC<layoutProps> = ({ children, isWide = false }) => {
  const data = useSiteMetadata();

  return (
    <>
      <Helmet title={data.title}>
        <meta name="og:title" content={data.title} />
      </Helmet>
      <Header/>
      <ContentWrap isWide={isWide}>
        <main>{children}</main>
      </ContentWrap>
      <footer>
        © 2020, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>, React, Typscript, styled-components
      </footer>
    </>
  )
}

export default Layout;

const ContentWrap = styled.div`
  margin: 70px auto;
  min-height: 100%;
  
  ${(prop: {isWide: boolean}) => !prop.isWide && css`
    max-width: 1300px;
  `};
`;
