import React from "react";
import styled from 'styled-components';

import Sidebar from "./sidebar";
import Footer from "./footer";
import "./global.css";

const Layout = ({ location, title, children }) => {
  return (
    <Container>
      <Sidebar title={title} />

      <Contents>
        <main>{children}</main>
        <Footer />
      </Contents>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--bg);
  color: var(--textNormal);
  transition: 0.2s;

  display: flex;
`;

const Contents = styled.div`
  //
`;

export default Layout
