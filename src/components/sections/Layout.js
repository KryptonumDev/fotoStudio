import React, { useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../../components/organisms/Nav"

const Layout = ({children}) => {
  useEffect(() => {
    const orphans = ['w','z','u','o','i','np.'];
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
      orphans.forEach(orphan => {
        paragraph.innerHTML = paragraph.innerHTML.replaceAll(` ${orphan} `, ` ${orphan}&nbsp;`);
      });
    })
  }, [])
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children}
    </>
  );
}
 
export default Layout;