import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { ArrowRight, FacebookIcon, InstagramIcon, Logo, KryptonumLogo } from "../atoms/Icons";
import { useEffect } from "react";

const Footer = () => {
  const { footer } = useStaticQuery(graphql`
    query {
      footer: datoCmsFooter {
        email
        address
        addressMaps
        phone1
        instagram
        facebook
      }
    }
  `);

  useEffect(() => {
    const footer = document.querySelector('.footer');
    const scrollSnap = document.querySelector('.scrollSnap');
    const handleScroll = () => {
      let target = footer.getBoundingClientRect();
      if(target.top < target.height / 4 * -1){
        footer.style.scrollSnapAlign = 'end';
      } else {
        footer.style = 'null';
      }
    }
    scrollSnap.addEventListener('scroll', handleScroll);
  },[])

  return (
    <StyledFooter className="footer">
      <div className="max-width">
        <div className="footer-info">
          <Logo className="footer-logo" />
          <div className="footer-inTouch">
            <p><a href={`mailto:${footer.email}`}>{footer.email}</a></p>
            <p><a href={footer.addressMaps} target="_blank" rel="noreferrer">{footer.address}</a></p>
            <p><a href={`tel:+48${footer.phone1.replace(/\s/g,'')}`}><span>{footer.phone1}</span></a></p>
          </div>
          <div className="footer-social">
            <a href={footer.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={footer.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
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
            <li><Link to="/polityka-prywatnosci">Polityka prywatności</Link></li>
          </ul>
        </div>
        <div className="footer-copy">
          <p>Wszelkie prawa zastrzeżone. © {(new Date().getFullYear())} Foto Studio Adam Chrapek.</p>
          <p>
            <span>Projekt i realizacja:</span>
            <a href="https://kryptonum.eu/" target="_blank" rel="noreferrer" aria-label="Kryptonum">
              <KryptonumLogo />
            </a>
          </p>
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
    & > svg{
      width: 147px;
      height: auto;
    }
    .footer-inTouch {
      & > p {
        &:first-child {
          font-family: "DM Serif Display", serif;
        }
        margin-bottom: 8px;
      }
    }
    .footer-social {
      display: flex;
      a:not(:last-child){
        margin-right: 24px;
      }
    }
  }
  .footer-links {
    margin: ${108/10.8}vh 0;
    & > ul {
      text-align: center;
      display: flex;
      justify-content: space-between;
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
  .footer-copy {
    width: 100%;
    @media (min-width: 800px){
      display: flex;justify-content: space-between;
    }
    p {
      &:not(:last-child){
        margin-bottom: .4em;
      }
      font-size: ${15/16}rem;
      a {
        margin-left: 1em;
      }
      span, a, svg {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  @media only screen and (max-width: 799px){
    & > .max-width {
      display: flex;
      flex-wrap: wrap;
      .footer-info, .footer-links {
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
          display: inline-block;
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
    padding: ${216/10.8}vh 0;
    & > .max-width {
      height: auto;
      display: block;
      .footer-info, .footer-links {
        width: 100%;
      }
    }
  }
`
 
export default Footer;