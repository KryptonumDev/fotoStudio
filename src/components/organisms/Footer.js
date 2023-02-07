import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ArrowRight, FacebookIcon, InstagramIcon, Logo } from "../atoms/Icons";

const Footer = ({data}) => {
  return (
    <StyledFooter className="footer">
      <div className="max-width">
        <div className="footer-info">
          <Logo className="footer-logo" />
          <div className="footer-inTouch">
            <a href={`mailto:${data.email}`}>
              <span>{data.email}</span>
              <ArrowRight fill="#fff" />
            </a>
            <a href={data.addressMaps} target="_blank" rel="noreferrer"><span>{data.address}</span></a>
            <p>
              <a href={`tel:+48${data.phone1.replace(/\s/g,'')}`}><span>{data.phone1}</span></a>
              &nbsp;|&nbsp;
              <a href={`tel:+48${data.phone2.replace(/\s/g,'')}`}><span>{data.phone2}</span></a>
            </p>
          </div>
          <div className="footer-social">
            <a href={data.facebook} target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href={data.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/o-mnie">O mnie</Link></li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
              <ul>
                <li><Link to="/fotografia-reportazowa">Fotografia Reportażowa</Link></li>
                <li><Link to="/fotografia-produktowa">Fotografia Produktowa</Link></li>
                <li><Link to="/fotografia-analogowa">Fotografia Analogowa</Link></li>
              </ul>
            </li>
            <li><Link to="/cennik">Cennik</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
            <li>
              <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
              <ul>
                <li><Link to="/sitemap">Mapa strony</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: ${108/10.8}vh 0;
  & > .max-width {
    max-width: 1024px;
  }
  .footer-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${108/10.8}vh;
    & > svg{
      width: 147px;
      height: auto;
    }
    .footer-inTouch {
      & > a {
        &:first-child {
          font-family: "DM Serif Display", serif;
        }
        display: block;
        margin-bottom: 8px;
        span, svg {
          vertical-align: middle;
        }
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
    a span {
      text-decoration: underline;
    }
    .footer-social {
      display: flex;
      a:not(:last-child){
        margin-right: 24px;
      }
    }
  }
  .footer-links {
    & > ul {
      text-align: center;
      display: flex;
      justify-content: space-between;
      & > li:last-child {
        text-align: left;
        a {
          font-size: ${12/16}rem;
        }
      }
      & > li ul li {
        margin-top: 13px;
      }
    }
    ul {
      list-style-type: none;
      a {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5;
      }
      
    }
  }
  @media only screen and (max-width: 799px){
    & > .max-width {
      display: flex;
      & > * {
        width: 50%;
      }
    }
    .footer-info {
      display: block;
      .footer-inTouch {
        margin: 21px 0;
        a:first-child {
          margin-bottom: 21px;
        }
      }
    }
    .footer-links {
      ul {
        text-align: left;
        li:not(:last-child) a {
          display: block;
          margin-bottom: 13px;
        }
      }
      & > ul {
        display: block;
        & > li ul li {
          margin-top: 0;
        }
      }
    }
  }
  @media only screen and (max-width: 619px){
    & > .max-width {
      display: block;
      & > * {
        width: 100%;
      }
    }
  }
`
 
export default Footer;