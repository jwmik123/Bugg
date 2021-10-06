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
        <div className='w-6/12 mx-auto'>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                }}
                validationSchema={ContactSchema}
            >
                {({ errors, touched }) => (
                    <Form className='flex flex-col'>
                        <div className='flex'>
                            <label htmlFor='name'>Naam*</label>
                            { errors.name && touched.name 
                            ? ( <div>{errors.name}</div>) 
                            : null }
                            <Field name='name' />
                        </div>

                        <label htmlFor='email'>Emailadres*</label>
                        { errors.email && touched.email 
                        ? ( <div>{errors.email}</div>) 
                        : null }
                        <Field name='email' />

                        <label htmlFor='company'>Bedrijf</label>
                        { errors.company && touched.company 
                        ? ( <div>{errors.company}</div>) 
                        : null }
                        <Field name='company' />

                        <label htmlFor='message'>Bericht*</label>
                        { errors.message && touched.message 
                        ? ( <div>{errors.message}</div>) 
                        : null }
                        <Field name='message' as='textarea' />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactForm
