import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
 
export default Layout;