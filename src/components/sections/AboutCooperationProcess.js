import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { CooperationStep1, CooperationStep2, CooperationStep3, CooperationStep4, CooperationStep5 } from "../atoms/Icons";
import SliderPagination from "../organisms/SliderPagination";

const steps = [
  {
    title: "1. Przygotowanie",
    description: 'Na tym etapie poznaję Ciebie i Twoje potrzeby. Wysłucham Twoich oczekiwań i zaproponuję co razem możemy stworzyć.',
    icon: <CooperationStep1 />
  },
  {
    title: "2. Sesja próbna",
    description: 'Dzięki sesji próbnej zweryfikujemy pomysły i sprawdzimy, jak otoczenie spełnia nasze oczekiwania.',
    icon: <CooperationStep2 />
  },
  {
    title: "3. Sesja właściwa",
    description: 'Dbam o każdy element nawet najmniejszy. Dzięki naszej współpracy dopracowany będzie każdy szczegół. A ja zjawię się w wyznaczonym miejscu jako pierwszy.',
    icon: <CooperationStep3 />
  },
  {
    title: "4. Wybór zdjęć",
    description: 'To jeden z najtrudniejszych etapów, w którym w pełni służę pomocą. Doradzam, wspieram, pomagam w obiektywnej ocenie tak, aby Twój zestaw zdjęć był idealny.',
    icon: <CooperationStep4 />
  },
  {
    title: "5. Obróbka zdjęć",
    description: 'Dokładam wszelkich starań, aby każda fotografia była dopracowana. Wieloletnie doświadczenie pomaga mi wydobyć ze zdjęcia idealną głębię.',
    icon: <CooperationStep5 />
  },
]

const AboutCooperationProcess = () => {
  const [activeSlider, setActiveSlider] = useState(1);
  const [activeSliderDelay, setActiveSliderDelay] = useState(1);
  const slider = useRef('');
  useEffect(() => {
    slider.current.classList.add('change');
    setTimeout(() => {
      setActiveSliderDelay(activeSlider);
      slider.current.classList.remove('change');
    }, 250);
  }, [activeSlider])

  return (
    <StyledCooperationProcess className="cooperation-process sec slider">
      <header className="max-width">
        <h2>Przebieg współpracy</h2>
      </header>
      <div className="cooperationProcess-wrapper">
        <div className="cooperationProcess-slider" style={{transform: `translateX(-${(activeSliderDelay-1)*100}%)`}} ref={slider}>
          {steps.map((step,i) => (
            <div className="cooperationProcessSlider-item" key={i}>
              <div className="max-width">
                <h3>{step.title}</h3>
                {step.icon}
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      <SliderPagination activeSlide={activeSlider} setActiveSlide={setActiveSlider} sliderLength={steps.length} />
      </div>
    </StyledCooperationProcess>
  );
}

const StyledCooperationProcess = styled.section`
  position: relative;
  header {
    margin-top: ${192/10.8}vh;
  }
  .max-width {
    @media only screen and (min-width: 729px) and (max-width: 1824px){
      max-width: calc(100% - ${336/19.2}vw);
    }
  }
  .cooperationProcess-wrapper {
    position: absolute;
    left: 0;
    top: 60%;
    @media only screen and (max-width: 729px){
      top: 50%;
    }
    transform: translateY(-50%);
    width: 100%;
  }
  .cooperationProcess-slider {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    transition: opacity 500ms cubic-bezier(0.52, 0.16, 0.24, 1);
    will-change: opacity;
    &.change {
      opacity: 0;
    }
  }
  .cooperationProcessSlider-item {
    width: 100%;
    flex-shrink: 0;
    .max-width {
      max-width: 1440px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > * {
        width: calc(100% / 3);
      }
      svg {
        width: 233px;
        height: 233px;
        margin: 0 3%;
      }
    }
    h3 {
      font-size: clamp(${34/16}rem, ${48/19.2}vw, ${48/16}rem);
      text-align: right;
    }
    p {
      font-size: clamp(1rem, ${24/19.2}vw, ${24/16}rem);
    }
  }
  @media only screen and (max-width: 999px){
    .cooperationProcessSlider-item {
      text-align: center;
      .max-width {
        display: block;
        max-width: 475px;
        & > * {
          width: 100%;
        }
        svg {
          padding: 8% 0;
          margin: 0;
        }
      }
      h3 {
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 729px){
    header h2 {
      font-size: ${24/16}rem;
      top: 50%;
      transform: translate(0,-50%);
    }
    .cooperationProcessSlider-item {
      padding-right: 10%;
      text-align: left;
      h3 {
        font-size: ${28/16}rem;
        text-align: left;
      }
      p {
        font-size: ${14/16}rem;
      }
      .max-width svg {
        padding: 8% 0;
      }
    }
    .slider-pagination {
      left: 22px;
      transform: translateX(0);
    }
  }
`
 
export default AboutCooperationProcess;