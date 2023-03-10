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
  const navMenuBtn = useRef();
  const handleNavToggle = () => {
    navMenuBtn.current.classList.toggle('active');
  }
  const handleNavLink = () => {
    navMenuBtn.current.classList.remove('active');
  }

  return (
    <StyledNav className="nav">
      <div className="max-width">
        <Link to="/" aria-label="Strona główna" className="nav-logo">
          <Logo />
        </Link>
        <button id="navToggle" onClick={handleNavToggle} aria-label="Pokaż/Ukryj nawigację mobilną" ref={navMenuBtn}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-links">
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Link to={link.link} onClick={handleNavLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 41 40" fill="#fff"><path d="M41 34.39 35.354 40H0V5.61L5.646 0v34.39H41Z"/></svg>
                  <span>{link.text}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 41 40" fill="#fff"><path d="M0 5.61 5.646 0H41v34.39L35.354 40V5.61H0Z"/></svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  color: var(--white);
  &::before {
    content: '';
    width: 100%;
    height: 150%;
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
  a, button {
    pointer-events: auto;
  }
  ul {
    list-style-type: none;
    a {
      &[aria-current="page"] span {
        opacity: .6;
      }
      padding: 10px;
      margin: -10px;
      font-weight: 600;
      letter-spacing: -0.023rem;
      position: relative;
      &:hover svg,
      &[aria-current="page"] svg {
        opacity: 1;
      }
      svg {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        &:first-child {
          bottom: -3px;
          left: -8px;
        }
        &:last-child {
          right: -8px;
          top: -3px;
        }
      }
    }
  }
  .nav-logo svg {
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
    pointer-events: none;
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
    .nav-logo svg {
      height: 50px
    }
    #navToggle {
      display: block;
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
        margin: 0 5%;
      }
    }
    #navToggle.active {
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
    #navToggle.active + .nav-links {
      opacity: 1;
      visibility: visible;
    }
  }
`
 
export default Nav;