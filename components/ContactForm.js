import { useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
                    <Form ref={form}>
                        <div>
                            <div className='flex'>
                                <label htmlFor='name' className='text-xl text-gray-900'>Naam*</label>
                                { errors.name && touched.name 
                                ? ( <div>{errors.name}</div>) 
                                : null }
                            </div>
                            <Field name='name'  className='input-field'/>
                        </div>
                        <div className='flex'>    
                            <label htmlFor='email' className='text-xl text-gray-900'>Emailadres*</label>
                            { errors.email && touched.email 
                            ? ( <div>{errors.email}</div>) 
                            : null }
                        </div>
                        <Field name='email' className='input-field' />

                        <div className='flex'>
                            <label htmlFor='company' className='text-xl text-gray-900'>Bedrijf</label>
                            { errors.company && touched.company 
                            ? ( <div>{errors.company}</div>) 
                            : null }
                        </div>
                        <Field name='company' className='input-field' />

                        <div className='flex'>
                            <label htmlFor='message' className='text-xl text-gray-900'>Bericht*</label>
                            { errors.message && touched.message 
                            ? ( <div>{errors.message}</div>) 
                            : null }
                        </div>
                        <Field name='message' as='textarea' className='input-field' />
                        
                        <div>
                        <button className='text-white bg-[#042825] rounded-lg mt-5 px-4 py-2 active:scale-95 transition transform ease-out' type='submit' onClick={() => sendEmail()}>Versturen</button>
                        </div>
                    </Form>
                )}
               
            </Formik>
        </div>
    )
}

export default ContactForm
