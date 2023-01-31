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
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">O mnie</Link></li>
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/">Cennik</Link></li>
          <li><Link to="/">Kontakt</Link></li>
        </ul>
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
    display: flex;
    margin: 0 -44px;
    li {
      margin: 0 44px;
      a {
        font-weight: 600;
        letter-spacing: -0.023rem;
      }
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
      background-color: var(--hamburger-color);
      &:not(:last-child){
        margin-bottom: 4px;
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
    ul {
      display: none;
    }
  }
`
 
export default Nav;