import React from "react";
import { Link as gatsbyLink } from 'gatsby';
import styled from "styled-components";

const Button = ({link, children}) => {
  return (
    <StyledLink to={link}>
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" fill="#fff"><path d="M41 34.39 35.354 40H0V5.61L5.646 0v34.39H41Z"/></svg>
      <span>{children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" fill="#fff"><path d="M0 5.61 5.646 0H41v34.39L35.354 40V5.61H0Z"/></svg>
    </StyledLink>
  );
}

const StyledLink = styled(gatsbyLink)`
  display: inline-block;
  font-size: ${42/16}rem;
  font-size: clamp(${24/16}rem, ${42/19.2}vw, ${42/16}rem);
  padding: ${24/10.8}vh ${110/19.2}vw;
  max-width: 376px;
  letter-spacing: 0.03rem;
  white-space: nowrap;
  font-family: "Argent CF", sans-serif;
  text-align: center;
  border: 1px solid var(--color);
  position: relative;
  svg {
    position: absolute;
    transition: transform .3s;
    &:first-child {
      bottom: -6px;
      left: -6px;
    }
    &:last-child {
      top: -6px;
      right: -6px;
    }
  }
  &:hover {
    svg {
      &:first-child {
        transform: translate(6px, -6px);
      }
      &:last-child {
        transform: translate(-6px, 6px);
      }
    }
  }
  @media only screen and (max-width: 767px){
    font-size: ${24/16}rem;
    min-width: auto;
    padding: 12px 42px;
  }
`
 
export default Button;