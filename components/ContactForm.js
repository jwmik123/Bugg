import { useRef, useEffect, createRef, useReducer, useState } from 'react';

import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

import AOS from 'aos';

const initialState = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'name':
        return { ...state, name: action.value };
      case 'email':
        return { ...state, email: action.value };
      case 'company':
        return { ...state, company: action.value };
      case 'message':
        return { ...state, message: action.value };
      default:
        throw new Error();
    }
  }

const ContactForm = () => {
    const [formState, dispatch] = useReducer(reducer, initialState);
  const [showFormErr, setShowFormErr] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { name, email, message } = formState;

  const submitFormAndShowCaptcha = (e) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendEmail = (captchaValue) => {
    if (name === '' || email === '' || message === '') {
      setShowFormErr(true);
      return;
    }

    const params = {
      ...formState,
      'g-recaptcha-response': captchaValue,
    };

    setFormSubmitted({ title: 'Bericht wordt verstuurd...', paragraph: '' });
    emailjs.send(
        process.env.EMAIL_JS_SERVICE, 
        process.env.EMAIL_JS_TEMPLATE,
        params,
        process.env.EMAIL_JS_USER,
    )
      .then(({ status }) => {
        if (status === 200) {
          setFormSubmitted({ title: 'Bericht is verzonden!', paragraph: 'We zullen zo snel mogelijk contact met je opnemen.' });
        } else {
          setFormSubmitted({ title: 'Unexpected status code returned from EmailJS, try again later', paragraph: 'Please contact Bugg. either by phone or email.' });
        }
      }, (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact Bugg. either by phone or email.' });
      });
  };

  return formSubmitted.title === '' ? (
    <div>
      {!showCaptcha ? (
        <div>
        <form onSubmit={submitFormAndShowCaptcha} className='flex flex-col gap-5'>
            <input required data-aos='fade-up' name='name' placeholder="Naam"  className='input-field' onChange={(e) => dispatch({ type: 'name', value: e.target.value })}/>
            <input required data-aos='fade-up' data-aos-delay='150' name='email' placeholder="E-mail" className='input-field' onChange={(e) => dispatch({ type: 'email', value: e.target.value })} />
            <input required data-aos='fade-up' data-aos-delay='200' name='company' placeholder="Bedrijf" className='input-field' onChange={(e) => dispatch({ type: 'company', value: e.target.value })}/>
            <input required data-aos='fade-up' data-aos-delay='250' name='message' placeholder="Bericht" type='textarea' className='input-field' onChange={(e) => dispatch({ type: 'message', value: e.target.value })}/>
            <div>
                <button 
                    className='border-2 border-[#F1D302] text-[#F1D302] px-4 py-2 rounded 
                        hover:bg-[#F1D302] hover:text-black transition-all active:scale-95' 
                    type='submit' >Versturen</button>
            </div>
        </form>
    </div>
      ) : (
        <ReCAPTCHA
          sitekey="6LcNUg0dAAAAAHQnXRQeWjwF4t9ZS90FgLr8g1H7"
          onChange={sendEmail}
        />
      )}
    </div>
  ) : (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-2xl text-white">{formSubmitted.title}</h3>
      <p className="text-white">{formSubmitted.paragraph}</p>
    </div>
  );  
}

export default ContactForm
