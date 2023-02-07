import React from "react";
import styled from "styled-components";

const reviews = [
  {
    content: "Powierzyłam sesję naszego zespołu Panu Adamowi, gdyż robią piękne portrety biznesowe i zdjęcia w kolorystyce czarno-białej. Sesja i studio i atmosfera są niezapomnianą przygodą, ciekawym przeżyciem i oswajają z pracą przed obiektywem. Zdjęcia wyszły rewelacyjnie!Powierzyłam sesję naszego zespołu Panu Adamowi, gdyż robią piękne portrety biznesowe i zdjęcia w kolorystyce czarno-białej. Sesja i studio i atmosfera są niezapomnianą przygodą, ciekawym przeżyciem i oswajają z pracą przed obiektywem. Zdjęcia wyszły rewelacyjnie!",
    author: "Sandra Hachuła"
  },
  {
    content: "Powierzyłam sesję naszego zespołu Panu Adamowi, gdyż robią piękne portrety biznesowe i zdjęcia w kolorystyce czarno-białej. Sesja i studio i atmosfera są niezapomnianą przygodą, ciekawym przeżyciem i oswajają z pracą przed obiektywem. Zdjęcia wyszły rewelacyjnie!",
    author: "Sandra Hachuła"
  },
  {
    content: "Powierzyłam sesję naszego zespołu Panu Adamowi, gdyż robią piękne portrety biznesowe i zdjęcia w kolorystyce czarno-białej. Sesja i studio i atmosfera są niezapomnianą przygodą, ciekawym przeżyciem i oswajają z pracą przed obiektywem. Zdjęcia wyszły rewelacyjnie!",
    author: "Sandra Hachuła"
  },
  {
    content: "Powierzyłam sesję naszego zespołu Panu Adamowi, gdyż robią piękne portrety biznesowe i zdjęcia w kolorystyce czarno-białej. Sesja i studio i atmosfera są niezapomnianą przygodą, ciekawym przeżyciem i oswajają z pracą przed obiektywem. Zdjęcia wyszły rewelacyjnie!",
    author: "Sandra Hachuła"
  },
]

const HomeReviews = () => {
  return (
    <StyledReviewss className="reviews sec" id="opinie">
      <div className="max-width">
        <header className="hello-header">
          <h2>Opinie</h2>
          <p>Każda klient ma inne oczekiwania, dlatego każda sesja jest inna.</p>
          <p>Zobacz, co moi klienci powiedzieli o&nbsp;pracy ze mną.</p>
        </header>
      </div>
      <div className="reviews-content">
        <div className="reviewsContent-snap">
          {reviews.map((review, i) => (
            <div className="reviewsWrapper-item" key={i} id={`swiper${i}`}>
              <blockquote>{review.content}</blockquote>
              <cite>{review.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </StyledReviewss>
  );
}

const StyledReviewss = styled.section`
  position: relative;
  & > .max-width {
    display: flex;
    & > * {
      width: 50%;
    }
  }
  .reviews-content {
    position: absolute;
    right: 0;
    width: 50%;
    top: 0;
    height: 100%;
    &::before, &::after {
      content: '';
      width: 100%;
      height: ${300/10.8}vh;
      position: absolute;
      left: 0;
    }
    &::before {
      top: 0;
      background: linear-gradient(#000,rgba(0,0,0,0) ${300/10.8}vh);
    }
    &::after {
      bottom: 0;
      background: linear-gradient(0deg, #000, rgba(0,0,0,0) ${300/10.8}vh);
    }
    .reviewsContent-snap {
      height: 100%;
      overflow: auto;
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
      scroll-padding: 50vh;
      padding: 50vh 22px
    }
    width: 50%;
    height: 100%;
    .reviewsWrapper-item {
      &.active {
        background-color: #f00;
      }
      margin: ${78/10.8}vh 0;
      scroll-snap-align: center;
      p {
        font-size: ${24/19.2}vw;
        line-height: 1.5;
      }
      cite {
        text-align: right;
        display: block;
        margin-top: 8px;
        font-weight: 600;
      }
      border: 1px solid var(--white);
      padding: ${42/16}rem ${64/16}rem;
    }
  }
`
 
export default HomeReviews;