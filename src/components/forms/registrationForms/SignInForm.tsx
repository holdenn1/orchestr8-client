import React from 'react';
import { Form, Formik, FormikValues } from 'formik';
import styles from './styles.module.scss';
import TextInput from 'ui/inputs/formInputs/TextInput';
import SignUpFormInputsWrapper from 'ui/wrappers/SignUpFormInputsWrapper';
import signInValidateSchema from '@/utils/validate/signInValidateSchema';
import FormNavigation from 'components/forms/registrationForms/FormNavigation';
import { loginUserRequest } from '@/api/requests';
import { notify } from 'components/Toast';
import { InitialValuesSignInForm } from 'components/forms/types';


function SignInForm() {
  const initialValues: InitialValuesSignInForm = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: FormikValues, resetForm: any) => {
    try {
      const { data } = await loginUserRequest(values);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      resetForm();
    } catch (e) {
      notify('Check field', 'error');
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInValidateSchema}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {(props) => (
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
          <FormNavigation />
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
