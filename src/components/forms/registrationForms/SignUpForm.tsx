import React, { useState } from 'react';
import { Form, Formik, FormikValues } from 'formik';
import styles from './styles.module.scss';
import { EmailAndPassword, FullNameAndPhone } from 'components/forms/registrationForms/steps';
import signUpValidateSchema from '@/utils/validate/signUpValidateSchema';
import Progress from 'components/forms/registrationForms/Progress/Progress';
import RegistrationFormButtons from 'ui/buttons/RegistrationFormButtons';

type InitialValuesSignUpForm = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string
};

type SignUpFormContextProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const SignUpFormContext = React.createContext<SignUpFormContextProps | null>(null);

function SignUpForm(props) {
  const [step, setStep] = useState(0);
  const stepComponents = [FullNameAndPhone, EmailAndPassword];
  const currentValidateSchema = signUpValidateSchema[step];

  const initialValues: InitialValuesSignUpForm = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const renderSteps = (formikProps: any) => {
    const Component = stepComponents[step];
    return <Component {...formikProps} />;
  };

  const handleSubmit = (values: FormikValues, resetForm: any) => {
    setStep(step + 1);
    if (step === 1) {
      resetForm();
      setStep(0);
      console.log(values);
    }
  };

  return (
    <SignUpFormContext.Provider value={{ step, setStep }}>
      <Formik
        initialValues={initialValues}
        //validationSchema={currentValidateSchema}
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
