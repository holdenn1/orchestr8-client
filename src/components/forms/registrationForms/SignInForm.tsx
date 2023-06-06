import React from 'react';
import { Form, Formik, FormikValues } from 'formik';
import styles from './styles.module.scss';
import TextInput from 'ui/inputs/formInputs/TextInput';
import SignInButton from 'ui/buttons/RegistrationFormButtons/SignInButton';
import RegistrationFormInputsWrapper from 'ui/wrappers/SignUpFormInputsWrapper/RegistrationFormInputsWrapper';
import { Link } from 'react-router-dom';

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
      // validationSchema={currentValidateSchema}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {(props) => (
        <Form className={styles.signInForm}>
          <RegistrationFormInputsWrapper>
            <TextInput name='email' type='email' placeholder='Your email' label='Email' />
            <TextInput
              name='password'
              type='password'
              placeholder='Your password'
              label='Password'
            />
          </RegistrationFormInputsWrapper>
          <div className={styles.btnContainer}>
            <p className={styles.isAccount}>
              Do you want to register? <Link to='/sign-up'>Sign Up</Link>
            </p>
            <SignInButton />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
