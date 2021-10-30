import { useRef, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AOS from 'aos';

import emailjs from 'emailjs-com';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .required('verplicht veld.'),
    email: Yup.string()
        .required('verplicht veld.')
        .email('Vul een geldig emailadres in.'),
    message: Yup.string()
        .required('verplicht veld.')
        .min(20, 'minimaal 20 karakters.')
})

const ContactForm = () => {

    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('service_2yyu7od', 'template_iplf3mq', form.current, 'user_IAcDtiyGrAvWKF1yWoq7j')
            .then(result => {
                <div>Thanks, {result.text}</div>
            }, (error) => {
                console.log(error.text)
            });
    }

    useEffect(() => {
        AOS.init();
      })

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                }}
                validationSchema={ ContactSchema }
            >
                {({ errors, touched }) => (
                    <div>
                        <Form ref={form} action="?" method="POST" className='flex flex-col gap-5'>
                            <Field data-aos='fade-up' name='name' placeholder="Naam"  className='input-field'/>
                            <Field data-aos='fade-up' data-aos-delay='150' name='email' placeholder="E-mail" className='input-field' />
                            <Field data-aos='fade-up' data-aos-delay='200' name='company' placeholder="Bedrijf" className='input-field' />
                            <Field data-aos='fade-up' data-aos-delay='250' name='message' placeholder="Bericht" as='textarea' className='input-field' />
                            <div>
                                <button 
                                    className='border-2 border-[#F1D302] text-[#F1D302] px-4 py-2 rounded 
                                        hover:bg-[#F1D302] hover:text-black transition-all active:scale-95' 
                                    type='submit' 
                                    onClick={() => sendEmail()}
                                >Versturen</button>
                            </div>
                            <p className="text-gray-400 text-xs">
                                This site is protected by reCAPTCHA and the Google
                                <a className="text-blue-800" href="https://policies.google.com/privacy"> Privacy Policy</a> and
                                <a className="text-blue-800" href="https://policies.google.com/terms"> Terms of Service</a> apply.
                            </p>
                        </Form>
                    </div>
                )}
               
            </Formik>
        </div>
    )
}

export default ContactForm
