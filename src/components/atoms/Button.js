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
  letter-spacing: 0.03rem;
  font-family: "Argent CF", sans-serif;
  padding: 21px 70px;
  min-width: 376px;
  text-align: center;
  border: 1px solid var(--color);
  position: relative;
  svg {
    position: absolute;
    &:first-child {
      bottom: -6px;
      left: -6px;
    }
    &:last-child {
      top: -6px;
      right: -6px;
    }
  }
`
 
export default Button;