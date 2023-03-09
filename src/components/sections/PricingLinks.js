import React, { useRef, useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import {ArrowLeft} from '../atoms/Icons';
import { GatsbyImage } from "gatsby-plugin-image";

const PricingLinks = ({location}) => {
  const {grid} = useStaticQuery(graphql`
    query {
      grid: datoCmsPricing {
        slub {
          gatsbyImageData(placeholder: NONE)
          alt
        }
        komunia {
          gatsbyImageData(placeholder: NONE)
          alt
        }
        biznesowa {
          gatsbyImageData
          alt
        }
        chrzest {
          gatsbyImageData(placeholder: NONE)
          alt
        }
        produktowa {
          gatsbyImageData(placeholder: NONE)
          alt
        }
      }
    }
  `);
  const componentDataArray = [
    {
      id: 1,
      name: 'Ślub',
      href: '?type=slub',
      heading: 'Ślub',
      price: '2000',
      image: {
        gatsbyImageData: grid.slub.gatsbyImageData,
        alt: grid.slub.alt || ''
      },
      copy:`<p>Oferta obejmuje:</p>
            <p>Fotografowanie przygotowań do ceremonii i wesela. Prezentację multimedialną z wybranych zdjęć.</p>
            <p>Istnieje możliwość poszerzenia oferty o wybrane usługi dodatkowe:</p>
            <ul>
              <li>
                Sesję ślubną w studio lub w plenerze.
                <br>
                <strong>Koszt: 1200 zł</strong>
              </li>
              <li>
                Sesję narzeczeńską w wybranej lokalizacji.
                <br>
                <strong>Koszt: 650 zł</strong>
                <strong>Koszt przy zakupie pakietu ślubnego: 500 zł</strong>
              </li>
            </ul>
            <p>Zdjęcia są dostarczane na nośniku cyfrowym.</p>
      `,
    },
    {
      id: 2,
      name: 'Chrzest',
      href: '?type=chrzest',
      heading: 'Chrzest',
      price: '500',
      image: {
        gatsbyImageData: grid.chrzest.gatsbyImageData,
        alt: grid.chrzest.alt || ''
      },
      copy:`<p>Oferta obejmuje:</p>
            <p>zdjęcia z uroczystości chrztu wraz ze zdjęciami rodzinnymi przed i po ceremonii.</p>
            <p>Istnieje możliwość poszerzenia oferty o wybrane usługi dodatkowe:</p>
            <ul>
              <li>
                zdjęcia z kontynuacji uroczystości w restauracji
                <br>
                <strong>Koszt: dodatkowe 500 - 1000 zł.</strong>
              </li>
            </ul>
            <p>zdjęcia są dostarczane na nośniku cyfrowym oraz wydrukowane w formacie 15x21 cm</p>
      `,
    },
    {
      id: 3,
      name: 'Komunia',
      href: '?type=komunia',
      heading: 'Komunia',
      price: '400',
      image: {
        gatsbyImageData: grid.komunia.gatsbyImageData,
        alt: grid.komunia.alt || ''
      },
      copy:`<p>Oferta obejmuje:</p>
            <p>Zdjęcia z uroczystości chrztu wraz ze zdjęciami rodzinnymi przed i po ceremonii.</p>
            <p>Istnieje możliwość poszerzenia oferty o wybrane usługi dodatkowe:</p>
            <ul>
              <li>fotografowanie przygotowań a także zdjęcia pozowane po ceremonii.<br><strong>Koszt: dodatkowe 200 zł</strong></li>
              <li>zdjęcia z kontynuacji uroczystości w restauracji.<br><strong>Koszt: dodatkowe 500 — 1000 zł.</strong></li>
            </ul>
            <p>Zdjęcia są dostarczane na nośniku cyfrowym oraz wydrukowane w formacie 15x21 cm.</p>
      `,
    },
    {
      id: 4,
      name: 'Oferta stacjonarna',
      href: '/slub'
    },
    {
      id: 5,
      name: 'Biznesowa',
      href: '?type=biznesowa',
      heading: 'Sesja Biznesowa',
      price: '300',
      image: {
        gatsbyImageData: grid.biznesowa.gatsbyImageData,
        alt: grid.biznesowa.alt || ''
      },
      copy:`<p>Autentyczne fotografie, udostępniane na Instagramie i w innych serwisach społecznościowych, to niezwykle skuteczny sposób na zaprezentowanie swojej oferty i wyróżnienie się na tle konkurencji.</p>
            <p>Ludzie natychmiast rozpoznają zdjęcia stockowe. W przypadku każdego produktu lub usługi, a zwłaszcza skoncentrowanych na człowieku, takich jak edukacja czy opieka zdrowotna, warto używać zdjęć prawdziwych ludzi w ich prawdziwym środowisku.</p>
            <p>Wiem, jakie zdjęcia sprawdzą się na Twoim firmowym Facebooku, Instagramie czy LinkedInie. Porozmawiajmy i zaproponuję Ci, co mogę zrobić, aby Twoja firma prezentowała się profesjonalnie w świecie online.</p>
      `,
    },
    {
      id: 6,
      name: 'Produktowa',
      href: '?type=produktowa',
      heading: 'Sesja Produktowa',
      price: '',
      image: {
        gatsbyImageData: grid.produktowa.gatsbyImageData,
        alt: grid.produktowa.alt || ''
      },
      copy:`<p>W ramach sesji produktowych wykonuję przede wszystkim zdjęcia, które zostaną umieszczone na opakowaniach, wykorzystane na portalach aukcyjnych lub do promocji produktów, działań marketingowych i reklamy.</p>
            <p>Każda firma jest inna i ma unikatowe potrzeby. Dlatego cena sesji produktowej ustalana jest zawsze indywidualnie. Uzależniona jest od zakresu prac oraz liczby fotografowanych produktów.</p>
      `,
    },
    {
      id: 7,
      name: 'Analogowa',
      href: '/slub'
    },
    {
      id: 8,
      name: 'Kontakt',
      href: '/kontakt'
    },
  ]

  const component = useRef();
  const componentClose = useRef();
  const [componentShowId, setComponentShowId] = useState();
  
  useEffect(() => {
    const handleEscape = (e) => {
      if(e.key === 'Escape'){
        componentClose.current?.click();
      }
    }
    document.addEventListener('keydown', e => handleEscape(e));
    return () => document.removeEventListener('keydown', e => handleEscape(e));
  }, [])

  useEffect(() => {
    const type = new URLSearchParams(location.search).get('type');
    if(type){
      document.getElementById('zobacz')?.scrollIntoView();
    }
    const element = document.querySelector(`.links-wrapper a[href="/cennik/?type=${type}"]`);
    if(element){
      setComponentShowId(element.getAttribute('data-key'));
      component.current.classList.add('active');
      const width = window.innerWidth;
      const height = window.innerHeight;
      // component.current.style.transform = `scale(${e.target.offsetWidth / width}, ${e.target.offsetHeight / height})`;
      const target = element.getBoundingClientRect();
      component.current.style.transformOrigin = `${(target.left + target.width/2) / width * 100}% ${(target.top + target.height/2) / height * 100}%`;
    } else {
      component.current.classList.remove('active');
    }
  }, [location.search])

  return (
    <StyledLinks className="links sec" id="zobacz" componentShowId={componentShowId}>
      <div className="max-width">
        <div className="links-wrapper">
          {componentDataArray.map((data, i) => (
            <Link
              key={i}
              data-key={i}
              to={data.href}
            >
              <span>{data.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="component" ref={component}>
        <div className="component-wrapper">
          <Link to="." aria-label="Zamknij" ref={componentClose}>
            <ArrowLeft/>
          </Link>
          {componentDataArray.map((item, i) => (
            item.heading && (
              <div className="component-item" data-key={i} key={i}>
                <header>
                  <h3>{item.heading}</h3>
                  {item?.price && (
                    <h4>od {item.price} zł</h4>
                  )}
                </header>
                <div dangerouslySetInnerHTML={{__html: item.copy}}></div>
                <GatsbyImage image={item.image.gatsbyImageData} alt={item.image.alt} className="component-img" />
              </div>
            )
          ))}
        </div>
      </div>
    </StyledLinks>
  );
}

const StyledLinks = styled.section`
  display: flex;
  align-items: center;
  .max-width {
    height: auto;
  }
  .links-wrapper {
    display: grid;
    gap: .3rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 2%;
      text-align: center;
      font-size: clamp(${24/16}rem, ${42/19.2}vw, ${42/16}rem);
      font-family: var(--serif-font);
      height: clamp(200px, ${288/10.8}vh, 288px);
      border: 1px solid var(--color);
      &:hover, &:focus {
        background-color: var(--color);
        color: var(--bg);
      }
      span {
        pointer-events: none;
      }
    }
  }
  @media only screen and (max-width: 899px){
    .max-width {
      width: 100%;
      overflow-x: auto;
      padding: 0 1rem;
      scroll-snap-align: x mandatory;
    }
    .links-wrapper {
      width: 180%;
    }
  }
  @media only screen and (max-width: 549px){
    .links-wrapper {
      width: 280%;
    }
  }
  .component {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg);
    z-index: 10;
    overflow-y: auto;
    padding: 2vw;
    transform: scale(0);
    transition: transform .6s cubic-bezier(0.7, 0, 0.84, 0);
    will-change: transform;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: var(--color);
      z-index: 2;
      pointer-events: none;
      transition: opacity .6s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity;
    }
    &.active::before {
      opacity: 0;
      transition: opacity .6s .4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    &.active {
      transition: transform .6s cubic-bezier(0.16, 1, 0.3, 1);
      transform: scale(1) !important;
    }
  }
  .component-wrapper {
    border: 1px solid #fff;
    width: 100%;
    padding: ${34/16}rem;
    padding-left: ${88/16}rem;
    min-height: 100%;
    margin: 0 auto;
    position: relative;
    a {
      z-index: 1;
      position: absolute;
      left: -1rem;
      top: -1rem;
      background-color: var(--bg);
      padding: 1rem;
      border-radius: 50%;
      svg {
        width: ${44/16}rem;
        height: ${44/16}rem;
      }
    }
  }
  .component-item {
    display: none;
    &[data-key="${props => props.componentShowId}"] {
      display: block;
    }
    max-width: ${610/16}rem;
    header {
      font-size: ${42/16}rem;
      margin-bottom: 1rem;
      h3 {
        font-size: 1em;
      }
      h4 {
        font-size: .4em;
        font-family: var(--sans-serif-font);
      }
    }
    ul {
      margin-bottom: 1rem;
    }
  }
  .component-img {
    z-index: -1;
    position: absolute;
    left: -2vw;
    right: -2vw;
    margin-left: auto;
    top: 50%;
    transform: translateY(-50%);
    max-width: 800px;
    height: calc(100% + 4vw);
    img {
      object-position: top;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, #000, rgba(0,0,0,0) 90%);
      z-index: 1;
    }
  }
  @media only screen and (max-width: 729px){
    .component-wrapper {
      padding: ${21/16}rem;
      padding-top: ${34/16}rem;
      a svg {
        width: ${28/16}rem;
        height: ${28/16}rem;
      }
    }
    .component-img {
      &::before {
        background: linear-gradient(90deg, #000, rgba(0,0,0,.5) 100%);
      }
    }
  }
`
 
export default PricingLinks;