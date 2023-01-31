import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Logo } from "../atoms/Icons"

const Nav = () => {
  return (
    <StyledNav className="nav">
      <div className="max-width">
        <Link to="/">
          <Logo />
        </Link>
        <input type="checkbox" id="navToggle" />
        <div className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/o-mnie">O mnie</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/cennik">Cennik</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <label htmlFor="navToggle" id="navToggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  height: 122px;
  background: linear-gradient(var(--bg),rgba(0,0,0,0));
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
  input {
    opacity: 0;
    position: absolute;
  }
  #navToggle, #navToggle-btn {
    display: none;
  }
  #navToggle-btn {
    padding: 17px 9.5px;
    margin-right: -9.5px;
    cursor: pointer;
    span {
      display: block;
      width: 29px;
      height: 2px;
      background-color: var(--accent-color);
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
    #navToggle, #navToggle-btn {
      display: block;
    }
    #navToggle:checked + .nav-links {
      opacity: 1;
      visibility: visible;
    }
    #navToggle:checked ~ #navToggle-btn {
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