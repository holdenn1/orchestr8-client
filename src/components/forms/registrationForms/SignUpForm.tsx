import React, { useState } from 'react';
import { Form, Formik, FormikValues } from 'formik';
import styles from './styles.module.scss';
import {
  EmailAndPassword,
  FullNameAndPhone,
} from 'components/forms/registrationForms/steps';
import signUpValidateSchema from '@/utils/validate/signUpValidateSchema';
import Progress from 'components/forms/registrationForms/Progress';
import FormNavigation from 'components/forms/registrationForms/FormNavigation';
import { profileRequest, registrationUserRequest } from '@/api/requests';

type InitialValuesSignUpForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function SignUpForm(props) {
  const [step, setStep] = useState(0);
  const stepComponents = [FullNameAndPhone, EmailAndPassword];
  const currentValidateSchema = signUpValidateSchema[step];

  const initialValues: InitialValuesSignUpForm = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const renderSteps = (formikProps: any) => {
    const Component = stepComponents[step];
    return <Component {...formikProps} />;
  };

  const handleSubmit = async (values: FormikValues, resetForm: any) => {
    setStep(step + 1);
    if (step === 1) {

      setStep(0);
      const {data} = await registrationUserRequest(values);
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      setTimeout(() =>  profileRequest(), 10000)
      resetForm();
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={currentValidateSchema}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {(props) => (
        <Form className={styles.signUpForm}>
          <Progress activeStep={step + 1} />
          {renderSteps(props)}
          <FormNavigation handlePrev={handlePrev} step={step} />
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
