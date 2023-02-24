import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";

const ContactForm = ({data}) => {
  return (
    <StyledForm className="form sec">
      <div className="max-width">
        <header>
          <h2 className="notVertical">Porozmawiajmy!</h2>
        </header>
        <form method="post" action="https://foto-studio-git-dev-adamchrapek.vercel.app/api/send-email/">
          <div className="form-wrapper">
            <div className="form-item">
              <label>
                <span>Imię i nazwisko</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Adam Chrapek"
                />
              </label>
            </div>
            <div className="form-item">
              <label>
                <span>Adres e-mail</span>
                <input type="email" name="email" placeholder="adamchrapek@gmail.com" />
              </label>
            </div>
            <div className="form-item">
              <label>
                <span>Numer telefonu</span>
                <input type="tel" name="tel" placeholder="+48 --- --- ---" />
              </label>
            </div>
            <div className="form-item">
              <label>
                <span>Rodzaj sesji</span>
                <select name="type" id="">
                  <option defaultValue disabled >Wybierz rodzaj sesji...</option>
                  <option value="Portretowa">Portretowa</option>
                  <option value="Weselna">Weselna</option>
                  <option value="Reportażowa">Reportażowa</option>
                  <option value="Produktowa">Produktowa</option>
                  <option value="Analogowa">Analogowa</option>
                </select>
              </label>
            </div>
            <div className="form-item">
              <label>
                <span>Wiadomość</span>
                <textarea name="message" placeholder="Co razem sfotografujemy?"></textarea>
              </label>
            </div>
            <div className="form-item">
              <label>
                <input type="checkbox" name="legal" />
                <span>Wysyłając wiadomość, zgadzam się na przetwarzanie moich danych zgodnie z <a href="/polityka-prywatnosci" target="_blank" rel="nooopener">Polityką prywatności</a></span>
              </label>
            </div>
          </div>
          <Button>Wyślij</Button>
        </form>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.section`
  display: flex;
  align-items: center;
  .max-width {
    height: auto;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 729px){
      max-width: calc(100% - ${336/19.2}vw);
    }
  }
  form, header {
    width: 50%;
  }
  header {
    h2 {
      font-size: clamp(${32/16}rem, ${64/19.2}vw, ${64/16}rem);
    }
  }
  .form-wrapper {
    margin: -${13/16}rem;
    display: flex;
    flex-wrap: wrap;
  }
  .form-item {
    width: 50%;
    padding: ${13/16}rem;
    &:nth-last-of-type(-n+2){
      width: 100%;
    }
    label {
      span {
        font-family: var(--serif-font);
      }
      input[type="checkbox"] {
        margin-right: 8px;
        & + span {
          font-family: var(--sans-serif-font);
          font-size: .7rem;
          a {
            font-weight: bold;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      input:not([type="checkbox"]), textarea, select {
        display: block;
        width: 100%;
        height: 48px;
        padding: 13px;
        border-bottom: 1px solid var(--white);
        resize: none;
        transition: background-color 0s 5000s, color 0s 5000s;
        color: #fff;
        -webkit-appearance: none;
        border-radius: 0;
      }
      textarea {
        height: 96px;
      }
    }
  }
  button {
    margin-top: ${34/16}rem;
  }
  @media only screen and (max-width: 1199px){
    .max-width {
      display: block;
    }
    form, header {
      width: 100%;
    }
    header {
      h2 {
        margin-bottom: ${21/16}rem;
      }
    }
  }
  @media only screen and (max-width: 1199px){
    .max-width {
      display: block;
    }
    form, header {
      width: 100%;
    }
    header {
      h2 {
        margin-bottom: ${21/16}rem;
      }
    }
  }
  @media only screen and (max-width: 599px){
    .form-item {
      width: 100%;
      &:nth-child(3), &:nth-child(4) {
        width: 50%;
      }
    }
  }
  @media only screen and (max-width: 729px) and (max-height: 749px){
    height: 150%;
  }
  @media only screen and (max-width: 729px) and (max-height: 649px){
    height: 180%;
  }
`
 
export default ContactForm;