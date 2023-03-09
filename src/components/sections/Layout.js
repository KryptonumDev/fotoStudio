import React, { useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../../components/organisms/Nav"

const Layout = ({children}) => {
  useEffect(() => {
    const orphans = ['w','z','u','o','i', 'np.'];
    const paragraphs = document.querySelectorAll('p');
    orphans.forEach(orphan => {
      paragraphs.forEach(paragraph => {
        paragraph.innerHTML = paragraph.textContent.replace(new RegExp(` ${orphan} ` ,`g`), ` ${orphan}&nbsp;`);
      })
    });
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