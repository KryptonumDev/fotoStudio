import React, {useState, useEffect, useCallback} from "react"
import styled from "styled-components";
import Button from "../atoms/Button";
import { SentSuccessful } from "../atoms/Icons";

let didSubmit = false;
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    type: '',
    message: '',
    legal: false,
    address: '',
  });
  const [formError, setFormError] = useState({
    name: '',
    email: '',
    tel: '',
    type: '',
    message: '',
    legal: '',
    error: '',
  })
  const [formSent, setFormSent] = useState(false);
  const [formIsSending, setFormIsSending] = useState(false);
  
  const validateData = useCallback(() => {
    let errors = {
      name: formData.name.trim().length === 0 ? 'Pole wymagane' : '',
      email: (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(formData.email.toLowerCase()) ? '' : 'Nieprawidłowy adres e-mail',
      tel: (/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/im).test(formData.tel.replaceAll(' ', '')) ? '' : 'Nieprawidłowy numer telefonu',
      type: formData.type.length === 0 ? 'Pole wymagane' : '',
      message: formData.message.trim().length === 0 ? 'Pole wymagane' : '',
      legal: formData.legal === false ? 'Zgoda jest wymagana' : ''
    }
    setFormError(errors);
    return errors;
  }, [formData]);

  useEffect(() => {
    if(didSubmit){
      validateData();
    }
  }, [formData, validateData])

  useEffect(() => {
    document.cookie.indexOf('formSent=true') !== -1 && setFormSent(true);

    const form = document.querySelector('.form');
    const scrollSnap = document.querySelector('.scrollSnap');
    const handleScroll = () => {
      let target = form.getBoundingClientRect();
      if(target.height > window.innerHeight){
        if(target.bottom <= window.innerHeight * 1.1){
          form.style.scrollSnapAlign = 'end';
        } else {
          form.style = 'null';
        }
      }
    }
    scrollSnap.addEventListener('scroll', handleScroll);
  }, [])

  const handleSubmit = (e) => {
    didSubmit = true;
    e.preventDefault();
    const validate = validateData();
    let isValidate = true;
    Object.keys(validate).forEach(key => validate[key] && (isValidate = false));
    if(isValidate){
      setFormIsSending(true);
      fetch(e.target.action, {
        method: 'POST', 
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        setFormIsSending(false);
        if(response.success){
          document.cookie = `formSent=true;max-age=60;path=/`;
          setFormSent(true);
        } else {
          setFormError(prevState => ({...prevState, error: 'Błąd podczas wysyłania formularza, spróbuj ponownie później.'}))
        }
      })
      .catch(error => {
        setFormIsSending(false);
        setFormError(prevState => ({...prevState, error: 'Błąd podczas wysyłania formularza, spróbuj ponownie później.'}))
      })
    }
  }

  return (
    <StyledForm className="form sec" id="zobacz" {...{formSent}}>
      <div className="max-width">
        {formSent ? (
          <div className="sent">
          <SentSuccessful />
            <header>
              <h3>Dziekuję za kontakt!</h3>
              <p>Twoja wiadomość dotarła do mnie pomyślnie. Odpowiem na nią tak szybko, jak to możliwe.</p>
              <Button to="/portfolio">Portfolio</Button>
            </header>
          </div>
        ) : (
          <>
            <header>
              <h2 className="notVertical">Porozmawiajmy!</h2>
            </header>
            <form
              method="post"
              action="/api/send-email"
              onSubmit={e => handleSubmit(e)}
            >
              <input
                type="text"
                name="address"
                autoComplete="off"
                aria-label="address"
                style={{opacity:0,position:'absolute',top:0,left:0,height:0,width:0,zIndex:-1}}
                tabIndex="-1"
                onChange={e => setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
                })}
              />
              <div className="form-wrapper">
                <div className="form-item" aria-invalid={formError.name ? true : false}>
                  <label>
                    <span>Imię i nazwisko</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Adam Chrapek"
                      onChange={e => setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      })}
                    />
                  </label>
                  <p className="error">{formError.name}</p>
                </div>
                <div className="form-item" aria-invalid={formError.email ? true : false}>
                  <label>
                    <span>Adres e-mail</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="adres@email.com"
                      onChange={e => setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      })}
                    />
                  </label>
                  <p className="error">{formError.email}</p>
                </div>
                <div className="form-item" aria-invalid={formError.tel ? true : false}>
                  <label>
                    <span>Numer telefonu</span>
                    <input
                      type="tel"
                      name="tel"
                      placeholder="+48 --- --- ---"
                      onChange={e => setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      })}
                    />
                  </label>
                  <p className="error">{formError.tel}</p>
                </div>
                <div className="form-item" aria-invalid={formError.type ? true : false}>
                  <label>
                    <span>Rodzaj sesji</span>
                    <select
                      name="type"
                      onChange={e => setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      })}
                      defaultValue=""
                    >
                      <option value="" disabled >Rodzaj sesji...</option>
                      <option value="Portretowa">Portretowa</option>
                      <option value="Weselna">Weselna</option>
                      <option value="Reportażowa">Reportażowa</option>
                      <option value="Produktowa">Produktowa</option>
                      <option value="Analogowa">Analogowa</option>
                    </select>
                  </label>
                  <p className="error">{formError.type}</p>
                </div>
                <div className="form-item" aria-invalid={formError.message ? true : false}>
                  <label>
                    <span>Wiadomość</span>
                    <textarea
                      name="message"
                      placeholder="Co razem sfotografujemy?"
                      onChange={e => setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      })}
                    ></textarea>
                  </label>
                  <p className="error">{formError.message}</p>
                </div>
                <div className="form-item" aria-invalid={formError.legal ? true : false}>
                  <label>
                    <input
                      type="checkbox"
                      name="legal"
                      onChange={e => setFormData({
                        ...formData,
                        [e.target.name]:  e.target.checked
                      })}
                    />
                    <span>Wysyłając wiadomość, zgadzam się na przetwarzanie moich danych zgodnie z <a href="/polityka-prywatnosci" target="_blank" rel="nooopener">Polityką prywatności</a></span>
                  </label>
                  <p className="error">{formError.legal}</p>
                </div>
                <div className="form-item">
                  <p className="error">{formError.error}</p>
                </div>
              </div>
              <Button disabled={formIsSending ? true : false}>{formIsSending ? 'Wysyłanie...' : 'Wyślij'}</Button>
            </form>
          </>
        )}
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
    @media only screen and (min-width: 729px) and (max-width: 1824px){
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
  form {
    .form-wrapper {
      margin: -${8/16}rem -${13/16}rem;
      display: flex;
      flex-wrap: wrap;
    }
    .form-item {
      width: 50%;
      padding: ${8/16}rem ${13/16}rem;
      &:nth-last-of-type(-n+3){
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
          height: 44px;
          padding: 8px 13px;
          border-bottom: 1px solid var(--white);
          resize: none;
          transition: background-color 0s 5000s, color 0s 5000s;
          color: #fff;
          -webkit-appearance: none;
          border-radius: 0;
        }
        textarea {
          height: 88px;
        }
      }
      &[aria-invalid="true"] label {
        input, select, textarea {
          border-color: var(--error-color);
        }
      }
      .error {
        transition: max-height .5s;
        max-height: 0;
        font-size: ${13/16}rem;
        color: var(--error-color);
        padding-left: 21px;
        margin-top: 5px;
        overflow: hidden;
        &:not(:empty){
          max-height: 50px;
          background: left / 18px no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='none' stroke='%23de071c' stroke-miterlimit='10' stroke-width='32' d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z'/%3E%3Cpath fill='none' stroke='%23de071c' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M250.26 166.05 256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6z'/%3E%3Cpath fill='%23de071c' d='M256 367.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20z'/%3E%3C/svg%3E");
        }
      }
    }
    button {
      margin-top: ${21/16}rem;
    }
  }
  .sent {
    animation: sent .6s;
    width: 100%;
    text-align: center;
    header {
      max-width: 610px;
      margin: 0 auto;
      h3 {
        font-size: ${34/16}rem;
        margin: 2rem 0 1rem;
      }
      p {
        font-size: ${18/16}rem;
        margin-bottom: 1em;
      }
    }
    > svg {
      width: 60%;
      max-width: 233px;
    }
  }
  @keyframes sent {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
    form .form-item {
      &:nth-child(1), &:nth-child(2) {
        width: 100%;
      }
    }
  }
  ${props => !props.formSent && `
    @media only screen and (max-width: 729px) and (max-height: 699px){
      height: 150%;
    }
  `}
`
 
export default ContactForm;