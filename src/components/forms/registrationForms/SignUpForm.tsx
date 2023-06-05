import React, { useState } from 'react';
import { Form, Formik, FormikValues } from 'formik';
import styles from './styles.module.scss';
import Progress from '@/components/forms/registrationForms/Progress/Progress';
import {
  EmailAndPassword,
  FullName,
  PositionAtWorkAndPhone,
} from '@/components/forms/registrationForms/steps';
import RegistrationFormButtons from '@/components/UI/buttons/RegistrationFormButtons';
import signUpValidateSchema from '@/utils/validate/signUpValidateSchema';

type InitialValuesSignUpForm = {
  name: string;
  surname: string;
  email: string;
  password: string;
  phone: string;
  position: string;
};

type SignUpFormContextProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const SignUpFormContext = React.createContext<SignUpFormContextProps | null>(null);

function SignUpForm(props) {
  const [step, setStep] = useState(0);
  const stepComponents = [FullName, EmailAndPassword, PositionAtWorkAndPhone];
  const currentValidateSchema = signUpValidateSchema[step];

  const initialValues: InitialValuesSignUpForm = {
    name: '',
    surname: '',
    email: '',
    password: '',
    position: '',
    phone: '',
  };

  const renderSteps = (formikProps: any) => {
    const Component = stepComponents[step];
    return <Component {...formikProps} />;
  };

  const handleSubmit = (values: FormikValues, resetForm: any) => {

    setStep(step + 1);
    if (step === 2) {
      resetForm();
      setStep(0);
      console.log(values);
    }
  };

  return (
    <SignUpFormContext.Provider value={{ step, setStep }}>
      <Formik
        initialValues={initialValues}
        validationSchema={currentValidateSchema}
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
