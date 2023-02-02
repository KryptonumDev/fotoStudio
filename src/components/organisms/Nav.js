import React, { useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Logo } from "../atoms/Icons"

const links = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/o-mnie",
    text: "O mnie",
  },
  {
    link: "/portfolio",
    text: "Portfolio",
  },
  {
    link: "/cennik",
    text: "Cennik",
  },
  {
    link: "/kontakt",
    text: "Kontakt",
  },
]

const Nav = () => {
  const navMenu = useRef();
  const handleNavToggle = () => {
    navMenu.current.classList.toggle('active');
  }
  const handleNavLink = () => {
    navMenu.current.classList.remove('active');
  }

  return (
    <StyledNav className="nav">
      <div className="max-width">
        <Link to="/" aria-label="Strona główna">
          <Logo />
        </Link>
        <div className="nav-links" ref={navMenu}>
          <ul>
            {links.map((link, i) => (
              <li key={i}><Link to={link.link} onClick={handleNavLink}>{link.text}</Link></li>
            ))}
          </ul>
        </div>
        <button id="navToggle" onClick={handleNavToggle} aria-label="Pokaż/Ukryj nawigację mobilną">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  color: var(--white);
  &::before {
    content: '';
    width: 100%;
    height: 200%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(var(--bg),rgba(0,0,0,0));
    z-index: -1;
    pointer-events: none;
  }
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  height: 122px;
  & > .max-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    list-style-type: none;
    a {
      font-weight: 600;
      letter-spacing: -0.023rem;
    }
  }
  svg {
    width: auto;
    height: 78px;
  }
  #navToggle {
    background-color: transparent;
    border: none;
    display: none;
    padding: 17px 9.5px;
    margin-right: -9.5px;
    span {
      display: block;
      width: 29px;
      height: 2px;
      background-color: var(--color);
      &:not(:last-child){
        margin-bottom: 4px;
      }
      transition: transform .3s;
    }
  }
  @media only screen and (min-width: 768px){
    ul {
      display: flex;
      margin: 0 -44px;
      li {
        margin: 0 44px;
      }
    }
  }
  @media only screen and (max-width: 999px){
    ul {
      margin: 0 -25px;
      li {
        margin: 0 25px;
      }
    }
  }
  @media only screen and (max-width: 767px){
    height: 74px;
    svg {
      height: 50px
    }
    #navToggle {
      display: block;
    }
    .nav-links.active {
      opacity: 1;
      visibility: visible;
    }
    .nav-links.active + #navToggle {
      span:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
      }
      span:nth-child(2) {
        transform: scaleX(0);
      }
      span:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
      }
    }
    .nav-links {
      opacity: 0;
      visibility: hidden;
      transition: opacity .3s, visibility .3s;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background: linear-gradient(90deg,rgba(0,0,0,.8) 20%,rgba(0,0,0,.2) 80%);
      backdrop-filter: blur(20px);
      z-index: -1;
      padding: 0 22px;
      display: table;
      ul {
        display: table-cell;
        vertical-align: middle;
        margin: -40px 0;
      }
      li {
        margin: 40px 0;
      }
      a {
        font-size: ${24/16}rem;
      }
    }
  }
`
 
export default Nav;