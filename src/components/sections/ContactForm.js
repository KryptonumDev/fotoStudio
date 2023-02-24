import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../atoms/Button";

const ContactForm = ({data}) => {
  return (
    <StyledForm className="form sec">
      <div className="max-width">
        <h1>Porozmawiajmy</h1>
        <form method="post" action="https://foto-studio-smtp.vercel.app/">
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
  }
  form {
    width: 50%;
  }
  .form-wrapper {
    margin: -21px -13px;
    display: flex;
    flex-wrap: wrap;
  }
  .form-item {
    width: 50%;
    padding: 21px 13px;
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
          font-size: .8rem;
          a {
            font-weight: bold;
          }
        }
      }
      input:not([type="checkbox"]), textarea, select {
        display: block;
        width: 100%;
        height: 55px;
        padding: 13px;
        border-bottom: 1px solid var(--white);
        resize: none;
        transition: background-color 0s 5000s, color 0s 5000s;
        color: #fff;
      }
      textarea {
        height: 110px;
      }
    }
  }
  button {
    margin-top: 34px;
  }
`
 
export default ContactForm;