import React, { useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../../components/organisms/Nav"

const Layout = ({children}) => {
  useEffect(() => {
    const orphans = ['w','z','u','o'];
    const paragraphs = document.querySelectorAll('p');
    orphans.forEach(orphan => {
      paragraphs.forEach(paragraph => {
        console.log(orphan)
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