import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../../components/organisms/Nav"

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children}
    </>
  );
}
 
export default Layout;