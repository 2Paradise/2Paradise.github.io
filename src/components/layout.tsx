import React, { ReactElement } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled, {css} from 'styled-components';

type layoutProps = {
  isWide: boolean
};

const Layout: React.FC<layoutProps> = ({ children, isWide = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
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
  margin: 50px auto;
  min-height: 100%;
  padding:0 1.0875rem 1.45rem;
  
  ${(prop: {isWide: boolean}) => !prop.isWide && css`
    max-width: 1300px;
  `};
`;
