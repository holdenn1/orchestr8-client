import React, { useState } from 'react';
import { Form, Formik, FormikState, FormikValues } from 'formik';
import styles from './styles.module.scss';
import Progress from '@/components/forms/registrationForms/Progress/Progress';
import {
  EmailAndPassword,
  FullName,
  PositionAtWorkAndPhone,
} from '@/components/forms/registrationForms/steps';
import { SignUpFormContext } from '@/utils/context/signUpFormContext';
import RegistrationFormButtons from '@/components/UI/buttons/RegistrationFormButtons';

function SignUpForm(props) {
  const [step, setStep] = useState(0);
  const stepComponents = [FullName, EmailAndPassword, PositionAtWorkAndPhone];

  const renderSteps = (formikProps: any) => {
    const Component = stepComponents[step];
    return <Component {...formikProps} />;
  };

  const handleSubmit = (values: FormikValues, resetForm: any) => {
    setStep(0);
  };

  return (
    <SignUpFormContext.Provider value={{ step, setStep }}>
      <Formik
        initialValues={{}}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {(props) => (
          <Form className={styles.signUpForm}>
            <Progress />
            {renderSteps(props)}
            <RegistrationFormButtons />
          </Form>
        )}
      </Formik>
    </SignUpFormContext.Provider>
  );
}

export default SignUpForm;
