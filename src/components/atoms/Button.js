import React from "react";
import { Link as gatsbyLink } from 'gatsby';
import styled from "styled-components";

const Button = ({link, children}) => {
  return (
    <StyledLink to={link}>
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="#fff"><path d="M41 34.39 35.354 40H0V5.61L5.646 0v34.39H41Z"/></svg>
      <span>{children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="#fff"><path d="M0 5.61 5.646 0H41v34.39L35.354 40V5.61H0Z"/></svg>
    </StyledLink>
  );
}

const StyledLink = styled(gatsbyLink)`
  display: inline-block;
  font-size: ${42/16}rem;
  font-size: clamp(${24/16}rem, ${42/19.2}vw, ${42/16}rem);
  padding: ${10/16}em ${42/16}em;
  max-width: 376px;
  letter-spacing: 0.03rem;
  line-height: 1;
  white-space: nowrap;
  font-family: 'DM Serif Display', serif;
  text-align: center;
  border: 1px solid var(--color);
  position: relative;
  svg {
    position: absolute;
    transition: transform .3s;
    &:first-child {
      bottom: -5px;
      left: -5px;
    }
    &:last-child {
      top: -5px;
      right: -5px;
    }
  }
  &:hover {
    svg {
      &:first-child {
        transform: translate(5px, -5px);
      }
      &:last-child {
        transform: translate(-5px, 5px);
      }
    }
  }
  @media only screen and (max-width: 1199px){
    svg {
      width: 25px;
      height: 25px;
      &:first-child {
        bottom: -4px;
        left: -4px;
      }
      &:last-child {
        top: -4px;
        right: -4px;
      }
    }
    &:hover {
      svg {
        &:first-child {
          transform: translate(3px, -3px);
        }
        &:last-child {
          transform: translate(-3px, 3px);
        }
      }
    }
  }   
`
 
export default Button;