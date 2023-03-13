import React from "react";
import styled from "styled-components";

const reviews = [
  {
    content: "Chciałbym szczerze polecić Foto Studio u Pana Adama Chrapka w Łasku. Profesjonalny sprzęt, super doradztwo i miła obsługa oraz co ważne terminowość. Naprawdę można tutaj polegać na tej firmie.",
    author: "Bartosz Janicki"
  },
  {
    content: "Powierzyłam sesję naszego zespołu Panu Adamowi, gdyż robią piękne portrety biznesowe i zdjęcia w kolorystyce czarno-białej. Sesja i studio i atmosfera są niezapomnianą przygodą, ciekawym przeżyciem i oswajają z pracą przed obiektywem. Zdjęcia wyszły rewelacyjnie!",
    author: "Sandra Hachuła"
  },
  {
    content: "Profesjonalne, fotograficzne oko z wrażliwością na szczegóły! Polecam! 💛",
    author: "Samanta Zwolennik"
  },
  {
    content: "Miła współpraca, zdjęcia wyszły przepiękne!Polecam gorąco ❤️!!!!",
    author: "Marta Adrzejewska"
  },
  {
    content: "Jeśli chcesz mieć piękne pamiątki w postaci zdjęć, a przy tym liczy się dla Ciebie atmosfera podczas sesji, to wybór jest oczywisty - Pan Adam Chrapek. Każda sesja przebiegła miło i przyjemnie, a do zdjęć ciągle  wracamy i oglądamy z uśmiechem.",
    author: "Piotr Romański"
  },
  {
    content: "Niezwykle dyskretny a zarazem pełny empatii fotograf;) zarazem z dużym doświadczeniem i warsztatem. Polecam gorąco na sesje portretowe, plenerowe oraz okolicznościowe.",
    author: "Anna Chrapek-Budacz"
  },
  {
    content: "Bardzo sympatyczny Pan fotograf",
    author: "Marcin Rynecki"
  },
  {
    content: "Szybka i fachowa obsługa 🤘",
    author: "Bartek Pogocki"
  },
]

const Reviews = () => {
  return (
    <StyledReviews className="reviews sec" id="opinie">
      <div className="max-width">
        <header className="reviews-header">
          <h2>Opinie</h2>
          <p>Każda klient ma inne oczekiwania, dlatego każda sesja jest inna.</p>
          <p>Zobacz, co moi klienci powiedzieli o pracy ze mną.</p>
        </header>
        <div className="reviews-content">
          <div className="reviewsContent-snap">
            {reviews.map((review, i) => (
              <div className="reviewsContentSnap-item" key={i} id={`swiper${i}`}>
                <blockquote>{review.content}</blockquote>
                <cite>{review.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledReviews>
  );
}

const StyledReviews = styled.section`
  position: relative;
  & > .max-width {
    display: flex;
    justify-content: space-between;
    @media only screen and (min-width: 729px) and (max-width: 1824px){
      max-width: calc(100% - ${336/19.2}vw);
    }
  }
  .reviews-header {
    margin-top: ${256/10.8}vh;
    max-width: max(${450/19.2}vw, 280px);
    line-height: 1.5;
    font-size: clamp(1rem, ${24/19.2}vw, ${24/16}rem);
    p:not(:last-child){
      margin-bottom: ${26/10.8}vh;
    }
  }
  .reviews-content {
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
    &::before, &::after {
      content: '';
      width: 100%;
      height: 25%;
      position: absolute;
      left: 0;
    }
    &::before {
      top: 0;
      background: linear-gradient(#000,rgba(0,0,0,0));
    }
    &::after {
      bottom: 0;
      background: linear-gradient(0deg, #000, rgba(0,0,0,0));
    }
  }
  .reviewsContent-snap {
    height: 100%;
    overflow: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    padding: 50vh 0;
  }
  .reviewsContentSnap-item {
    margin: ${78/10.8}vh 0;
    scroll-snap-align: center;
    blockquote {
      font-size: clamp(1rem, ${24/19.2}vw, ${24/16}rem);
      line-height: 1.5;
    }
    cite {
      text-align: right;
      display: block;
      margin-top: 8px;
      font-weight: 600;
    }
    border: 1px solid var(--white);
    padding: ${42/10.8}vh ${64/19.2}vw;
  }
  @media only screen and (max-width: 1199px){
    & > .max-width {
      flex-direction: column;
      justify-content: space-between;
      gap: 5%;
    }
    .reviews-header {
      margin-top: ${123/10.24}vh;
    }
    .reviews-content {
      height: 50%;
      width: 100%;
    }
    .reviewsContent-snap {
      padding: 25vh 0;
    }
  }
  @media only screen and (max-width: 729px){
    .reviews-content {
      height: 80%;
    }
    .reviews-header {
      font-size: ${14/16}rem;
    }
    .reviewsContentSnap-item {
      blockquote {
        font-size: ${14/16}rem;
      }
    }
  }
  @media only screen and (max-width: 729px) and (max-height: 749px){
  }
`
 
export default Reviews;