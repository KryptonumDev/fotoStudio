import React, { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import {ArrowLeft} from '../atoms/Icons';

const links = [
  {
    name: 'Ślub',
    href: '/slub'
  },
  {
    name: 'Chrzest',
    href: '/slub'
  },
  {
    name: 'Komunia',
    href: '/slub'
  },
  {
    name: 'Oferta stacjonarna',
    href: '/slub'
  },
  {
    name: 'Biznesowa',
    href: '/slub'
  },
  {
    name: 'Produktowa',
    href: '/slub'
  },
  {
    name: 'Analogowa',
    href: '/slub'
  },
  {
    name: 'Kontakt',
    href: '/slub'
  },
]

const PricingLinks = ({location}) => {  
  const component = useRef();

  const handleExpand = (e) => {
    e.preventDefault();
    component.current.classList.add('active');
    const width = window.innerWidth;
    const height = window.innerHeight;
    // component.current.style.transform = `scale(${e.target.offsetWidth / width}, ${e.target.offsetHeight / height})`;
    if(e.clientX === 0 && e.clientY === 0){
      const target = e.target.getBoundingClientRect();
      component.current.style.transformOrigin = `${(target.left + target.width/2) / width * 100}% ${(target.top + target.height/2) / height * 100}%`;
    } else {
      component.current.style.transformOrigin = `${e.clientX / width * 100}% ${e.clientY / height * 100}%`;
    }
  }
  const handleExpandClose = () => {
    component.current.classList.remove('active');
  }


  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape'){
        component.current.classList.remove('active');
      }
    });

    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    if(type === 'slub'){
      component.current.classList.add('active');
    }
  }, [])

  return (
    <StyledLinks className="links sec" id="zobacz">
      <div className="max-width">
        <div className="links-wrapper">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={e => handleExpand(e)}
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="component" ref={component}>
        <div className="component-wrapper">
          <button onClick={handleExpandClose}>
            <ArrowLeft/>
          </button>
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
      &:hover {
        background-color: var(--color);
        color: var(--bg);
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
    padding: 1rem;
    transform: scale(0);
    transition: transform .6s .2s cubic-bezier(0.7, 0, 0.84, 0);
    will-change: transform;
    &.active {
      transition: transform .6s cubic-bezier(0.16, 1, 0.3, 1);
      transform: scale(1) !important;
    }
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
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
    .component-wrapper {
      border: 1px solid #fff;
      width: 100%;
      padding: ${34/16}rem;
      max-width: 1920px;
      min-height: 100%;
      margin: 0 auto;
      position: relative;
    }
    button {
      position: absolute;
      left: -1rem;
      top: -1rem;
      background-color: var(--bg);
      padding: 1rem;
      border-radius: 50%;
      svg {
        width: ${55/16}rem;
        height: ${55/16}rem;
      }
    }
  }
`
 
export default PricingLinks;