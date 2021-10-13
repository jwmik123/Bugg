import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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

function ContactForm() {
    return (
        <div className='md:w-6/12 mx-auto p-36'>
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
                    <Form className='flex flex-col bg-white p-10'>
                        <div>
                            <div className='flex'>
                                <label htmlFor='name' classname=''>Naam*</label>
                                { errors.name && touched.name 
                                ? ( <div>{errors.name}</div>) 
                                : null }
                            </div>
                            <Field name='name' />
                        </div>
                        <div className='flex'>       
                            <label htmlFor='email' className='text-white'>Emailadres*</label>
                            { errors.email && touched.email 
                            ? ( <div>{errors.email}</div>) 
                            : null }
                        </div>
                        <Field name='email' />

                        <div className='flex'>
                            <label htmlFor='company' className='text-white'>Bedrijf</label>
                            { errors.company && touched.company 
                            ? ( <div>{errors.company}</div>) 
                            : null }
                        </div>
                        <Field name='company' />

                        <div className='flex'>
                            <label htmlFor='message' className='text-white'>Bericht*</label>
                            { errors.message && touched.message 
                            ? ( <div>{errors.message}</div>) 
                            : null }
                        </div>
                        <Field name='message' as='textarea' />
                        
                        <div>
                        <button className='text-[#042825] bg-white rounded-lg mt-5 px-4 py-2 active:scale-95 transition transform ease-out' type='submit'>Versturen</button>
                        </div>
                    </Form>
                )}
               
            </Formik>
        </div>
    )
}

export default ContactForm
