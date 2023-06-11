import React from 'react';
import { Form, Formik, FormikValues } from 'formik';
import styles from './styles.module.scss';
import TextInput from 'ui/inputs/formInputs/TextInput';
import SignUpFormInputsWrapper from 'ui/wrappers/SignUpFormInputsWrapper';
import signInValidateSchema from '@/utils/validate/signInValidateSchema';
import FormNavigation from 'components/forms/registrationForms/FormNavigation';

type InitialValuesSignInForm = {
  email: string;
  password: string;
};

function SignInForm(props) {
  const initialValues: InitialValuesSignInForm = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: FormikValues, resetForm: any) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      //validationSchema={signInValidateSchema}
    >
      {({ values, resetForm }) => (
        <Form className={styles.signInForm}>
          <SignUpFormInputsWrapper>
            <TextInput name='email' type='email' placeholder='Your email' label='Email' />
            <TextInput
              name='password'
              type='password'
              placeholder='Your password'
              label='Password'
            />
          </SignUpFormInputsWrapper>
          <FormNavigation handleSubmit={() => handleSubmit(values, resetForm)} />
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
